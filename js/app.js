'use strict';
//Configure require.js
require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    }
  },
  paths: {
      jquery: 'libs/jquery-2.0.3.min',
      underscore: 'libs/underscore-min',
      backbone: 'libs/backbone-min',
      text: 'libs/text'
  }
});

//Start up our App
require([
    'collection/users',
    'view/header',
    'view/main',
    'view/about'
], 
function (UserCollection, HeaderView, MainView, AboutView) {
    var colUser = new UserCollection([{id:0, name:'mike', age:10}, {id:1, name:'tony', age:20}]);
window.users = colUser;
    
    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "home",
            "about": "about",
            "contact": "contact"
        },
        initialize: function() {
            this.headerView = new HeaderView().render();
            this.$main = $("#main");
        },
        home: function() {
            if (this.currentView) {
                this.currentView.destroy();
                //this.currentView.remove();
                //this.currentView.undelegateEvents();
                this.currentVIew = null;
            }
            this.currentView = new MainView({collection: colUser});
            this.$main.append(this.currentView.render().el);
        },
        about: function() {
            if (this.currentView) {
                this.currentView.destroy();
                //this.currentView.remove();
                //this.currentView.undelegateEvents();
                this.currentVIew = null;
            }
            this.currentView = new AboutView({collection: colUser});
            this.$main.append(this.currentView.render().el);
            //this.currentView.render();
            
            console.log("about");
        },
        contact: function() {
            console.log("contact");
        }
    });
    
    var app = new AppRouter();
    Backbone.history.start();
});
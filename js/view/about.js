'use strict';

define(['jquery', 'underscore', 'backbone', 'text!tmpl/about.html'],
function($, _, Backbone, templateHTML){
    var view = Backbone.View.extend({
        events: {
          "click .btn": "click" 
        },
        render: function() {
            this.$el.html(_.template(templateHTML));
            
            return this;
        },
        destroy: function() {
            console.log("about - destroy");
            this.remove();
        },
        click: function(event) {
            console.log("about - click!");
        }
    });
    
    return view;
});
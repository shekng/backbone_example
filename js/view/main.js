'use strict';

define(['jquery', 'underscore', 'backbone', 'view/list', 'text!tmpl/main.html'],
function($, _, Backbone, ListView, templateHTML) {
    var view = Backbone.View.extend({
        events: {
            "click .btn": "click",
            "click .addItem": "addItem",
            "click .removeItem": "removeItem"
        },
        initialize: function() {
            
        },
        render: function() {
            this.$el.html(_.template(templateHTML));
            
            this.list = new ListView({collection: this.collection});
            this.$el.append(this.list.render().el);
            
            return this;
        },
        destroy: function() {
            this.list.destroy();
            
            console.log("main - destroy");
            this.remove();
        },
        click: function(event) {
            console.log("main - click!");
        },
        addItem: function(event) {            
            this.collection.add({id: this.collection.length, name: this.$el.find(".txtName").val(), age: 30});
        },
        removeItem: function(event) {
            this.collection.remove(this.collection.pop());
        }
    });
    
    return view;
});


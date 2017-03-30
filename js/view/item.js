'use strict';

define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    var view = Backbone.View.extend({
        tagName: "li",
        template: _.template("<a href='#user/<%=id%>'><%=name%></a> <button class='delItem'>Delete</button>"),
        events: {
            "click .delItem": "deleteItem"  
        },
        initialize: function() {
            this.listenTo(this.model, "remove", this.removeItem);
        },
        deleteItem: function() {
            this.collection.remove(this.model);
        },
        removeItem: function() {
            this.remove();
        },
        render: function() {
            this.$el.append(this.template(this.model.toJSON()));
            
            return this;
        }
    });
    
    return view;
});
'use strict';

define(['jquery', 'underscore', 'backbone', 'view/item'], 
function($, _, Backbone, ItemView){
    var view = Backbone.View.extend({
        className: "list",
        tagName: "ul",
        initialize: function() {
            this.listenTo(this.collection, "add", this.addNewItem);
        },
        removeItem: function(user) {
            this.collection.remove(user);
        },
        addNewItem: function(user) {
            var userView = new ItemView({collection: this.collection, model: user});
            this.$el.append(userView.render().el);
        },
        render: function() {
            var me = this;
            this.collection.each(function(user) {
                var userView = new ItemView({collection: me.collection, model: user});
                me.$el.append(userView.render().el);
            });
            
            return me;
        },
        destroy: function() {
            console.log("list - destroy");
            this.remove();
        }
    });
    
    return view;
});

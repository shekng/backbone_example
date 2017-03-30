'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'text!tmpl/header.html'
], function($, _, Backbone, templateHTML){
    var view = Backbone.View.extend({
        el: "#header",
        initialize: function() {
        },
        render: function() {
            this.$el.append(templateHTML);
        },
        destroy: function() {
            this.remove();
        }
    });
    
    return view;
});
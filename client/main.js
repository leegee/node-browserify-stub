var jQuery = require('jquery/dist/jquery');
var Backbone = require('backbone');
Backbone.$ = jQuery;

var AppView = Backbone.View.extend({
    render: function(){
        jQuery('main').append('<h1>Browserify is mathematical.</h1>');
    }
});

var appView = new AppView();
appView.render();

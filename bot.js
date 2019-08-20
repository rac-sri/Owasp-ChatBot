
var env = require('node-env-file');
env(__dirname + '/.env');

process.env.page_token="EAAGy7cubXcIBAD3WAFHRdQ0YmcfEcq8bsIbEltst3rNkeMySpPchPoIVNabo0GfZBceDlFuRM7za6NdlCXVdL4cFNe22oFD1tPwhK4ozZAwZBfvh7zjBl8OVopZCw5PmxSWEkzJHzaSepxjbN0y41SO3AmfKmshi3htgYIzbHgZDZD";
process.env.verify_token="fj0923jf023jf0";

var Botkit = require('botkit');
var debug = require('debug')('botkit:main');

// Create the Botkit controller, which controls all instances of the bot.
var controller = Botkit.facebookbot({
    // debug: true,
    verify_token: process.env.verify_token,
    access_token: process.env.page_token,
});

// Set up an Express-powered webserver to expose oauth and webhook endpoints
var webserver = require(__dirname + '/components/express_webserver.js')(controller);

// Tell Facebook to start sending events to this application
require(__dirname + '/components/subscribe_events.js')(controller);

// Set up Facebook "thread settings" such as get started button, persistent menu
require(__dirname + '/components/thread_settings.js')(controller);


// Send an onboarding message when a user activates the bot
require(__dirname + '/components/onboarding.js')(controller);

// Load in some helpers that make running Botkit on Glitch.com better
require(__dirname + '/components/plugin_glitch.js')(controller);

var normalizedPath = require("path").join(__dirname, "skills");
require("fs").readdirSync(normalizedPath).forEach(function(file) {
  require("./skills/" + file)(controller);
});

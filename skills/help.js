let responses = require('../responses/responses')

module.exports = function(controller) {

     controller.hears(['help'], 'message_received', function(bot, message) {
        bot.startTyping(message);
        bot.reply(message, responses.help);
    });

}

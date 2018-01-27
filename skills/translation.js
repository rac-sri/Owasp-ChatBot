let responses = require('../responses/responses')
let translate = require('../service/translate')

module.exports = function(controller) {

    controller.hears(['translate (.*)'], 'message_received', function(bot, message) {
        bot.startTyping(message);
    
        let sentence_to_translate = message.match[1];

        bot.startConversation(message, function(err, convo) {

            convo.ask(responses.whichLanguage, function(response, convo) {
                
                if(response.quick_reply){
                    translate.translate(sentence_to_translate, response.quick_reply.payload, function(err, translatedLanguage) {
                        
                        if(!err){
                            bot.reply(message, translatedLanguage);
                        } else {
                            bot.reply(message, "Please ask me again :)");
                        }
                    });
                }
                convo.next();
            });
        });

    });
};

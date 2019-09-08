
let responses = require('../responses/responses')


module.exports = function(controller) {

    controller.hears(['hello(.*)' ,'hi(.*)','(.*)Hello(.*)','Hi(.*)','(.*)what(.*)'], 'message_received', function(bot, message) {
        bot.reply(message, "I there! I am Owasp Bot :). Ask me anything regarding owasp society");
    });

    controller.hears(['(.*)color(.*)'], 'message_received', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
           // convo.say('This is an example of using convo.ask with a single callback.');

            convo.ask('What is your favorite color?', function(response, convo) {

                convo.say('Cool, I like ' + response.text + ' too!');
                convo.next();

            });
        });

    }); 


    controller.hears(['(.*)contact(.*)','(.*)interview(.*)','(.*)prereqistics(.*)','(.*)network(.*)','(.*)hacking(.*)','(.*)workshop(.*)','(.*)web(.*)','(.*)ml(.*)','(.*)machine(.*)','(.*)learning(.*)','(.*)iot(.*)'], 'message_received', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
           convo.say('You can contact us via these information:\n Harkrat : 8569036690 \n Sirish:9464823344');
            });
        });

        
    controller.hears(['(.*)create(.*)' , '(.*)created(.*) , (.*)creator(.*)' , '(.*)made(.*)'], 'message_received', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
                convo.say('Owasp Team');
                convo.next();
        });

    });

    controller.hears(['(.*)fuck(.*)' , '(.*)madarchod(.*)' , '(.*)bhosdike(.*)', '(.*)gand(.*)','(.*)gandu(.*)'], 'message_received', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
                convo.say('You kiss your mother with that mouth');
                convo.next();
        });

    });

    controller.hears(['(.*)rachit(.*)', '(.*)Rachit(.*)'], 'message_received', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
                convo.say('Yes I know him. He is the one who created me.');
                convo.next();
        });

    });

    controller.hears(['(.*)fullform(.*)','(.*)Fullform(.*)'], 'message_received', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
                convo.say("Owasp stands for Open Web Application Security Project");
                convo.next();
        });

    });

    controller.hears(['(.*)name(.*)'], 'message_received', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
                convo.say("My name is Owaspbot and I'm a Owasp Thapar Student Chapter's chatbot.");
                convo.next();
        });

    });

    controller.hears(['(.*)society(.*)' , '(.*)about(.*)','(.*)this(.*)'], 'message_received', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
                convo.say("Owasp is a Thapar Student Chapter which aims at training its members in different fields like web/app devolopment,cyber security etc.");
                convo.next();
        });

    });

    controller.hears(['(.*)event(.*)' ,'(.*)orientation(.*)', '(.*)form(.*)','(.*)venue(.*)','(.*)interview(.*)','(.*)timings(.*)','(.*)time(.*)','(.*)recruitement(.*)', '(.*)recruitements(.*)', '(.*)events(.*)','(.*)Events(.*)','(.*)Event(.*)'], 'message_received', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
                convo.say("You can find information about our events from our check out our facebook page : https://www.facebook.com/owasptsc/?ref=admin_hovercard ");
                convo.next();
        });
    });


    controller.hears(['(.*)question(.*)'], 'message_received', function(bot, message) {

        bot.createConversation(message, function(err, convo) {

            // create a path for when a user says YES
            convo.addMessage({
                    text: 'How wonderful!!\nSo owasp is a techinical society of thapar aiming at improving the coding skills of its members and conducting various events revolving around the tech world :)'
            },'yes_thread');

            // create a path for when a user says NO
            // mark the conversation as unsuccessful at the end
            convo.addMessage({
                text: 'Oh!! I guess you are already quite familiar with Owasp then :)',
                action: 'stop', // this marks the converation as unsuccessful
            },'no_thread');

            // create a path where neither option was matched
            // this message has an action field, which directs botkit to go back to the `default` thread after sending this message.
            convo.addMessage({
                text: 'Sorry I did not understand. Say `yes` or `no`',
                action: 'default',
            },'bad_response');

            // Create a yes/no question in the default thread...
            convo.ask('Do you wanna know more about Owasp??', [
                {
                    pattern:  bot.utterances.yes,
                    callback: function(response, convo) {
                        convo.gotoThread('yes_thread');
                    },
                },
                {
                    pattern:  bot.utterances.no,
                    callback: function(response, convo) {
                        convo.gotoThread('no_thread');
                    },
                },
                {
                    default: true,
                    callback: function(response, convo) {
                        convo.gotoThread('bad_response');
                    },
                }
            ]);

            convo.activate();

            // capture the results of the conversation and see what happened...
            convo.on('end', function(convo) {

                if (convo.successful()) {
                    // this still works to send individual replies...
                    bot.reply(message, 'Nice talking to you.');

                }

            });
        });

    });

    controller.hears(['.*'], 'message_received', function(bot, message){
        bot.reply(message, 'Thanks . I will get back to you shortly :)');
      });

};

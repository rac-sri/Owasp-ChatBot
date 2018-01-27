const translate = require('google-translate-api');

module.exports = {
	translate: function(sentence, language, callback){
		translate(sentence, {to: language})
		.then(res => {
		    return callback(null, res.text);
		})
		.catch(err => {
			    console.error(err);
		    	return callback("TRANSLATION ERROR");
		});
	}
}
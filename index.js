const bot = require('./bot');

// bot.launch();

exports.handler = (event, context, callback) => {
    const tmp = JSON.parse(event.body);
    bot.handleUpdate(tmp);
    return callback(null, {
        statusCode: 200,
        body: ''
    });
};
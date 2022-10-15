require('dotenv').config();
const axios = require('axios');
const { Telegraf } = require('telegraf');

const TOKEN = process.env.BOT_TOKEN;

const bot = new Telegraf(TOKEN);
bot.start((ctx) => ctx.reply('Welcome'));
bot.hears('hello', ctx => ctx.reply('Hello ghi nta!'));

bot.hears('name', async (ctx) => ctx.reply(await getUser()));

// bot.on('text', ctx => {
//     const number = ctx.message.text.match(/\d+/);
//     if(number) ctx.reply(`Found the number ${number} in your message.`)
// })

bot.hears(/(\d+) (USD|dollar|dollars)/i, ctx => ctx.reply(`You got ${ctx.match[1]}$`));

// bot.hears([/one/, /another/], ctx => {
//     const onematches = ctx.message.text.matchAll(/one/g);
//     const othermatches = ctx.message.text.matchAll(/another/g);
//     console.log(...onematches);
//     console.log(...othermatches);
// })

bot.command('test', Telegraf.reply('Ha ha ha'));

// bot.launch();

const getUser = async () => {
    const res = await axios.get('https://reqres.in/api/users/2');
    return res.data.data.first_name;
}

module.exports = bot;
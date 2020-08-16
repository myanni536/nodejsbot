const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzQ0MjI0ODAxMzIwNzMwNjg1.XzgHWw.qOq9026HPzeLtjXPWjfss87pBPA';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '양동이개새끼 해봐') {
    message.reply('양동이 개새끼');
  }
});

client.login(token);

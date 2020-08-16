const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzQ0MjI0ODAxMzIwNzMwNjg1.XzgHWw.2gkBPWx2X4RlqDEsqi_9k3OLffQ';
const welcomeChannelName = "하이";
const byeChannelName = "바이";
const welcomeChannelComment = "안뇽";
const byeChannelComment = "잘가.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);
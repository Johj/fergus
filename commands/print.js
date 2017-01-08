module.exports.run = (message, args) => {
  let embed = require('../util/embed.js').run();
  if (args.length === 1) {
    embed.setDescription('Type something!');
  } else {
    message.delete();
    embed.setDescription(args.join(' ').slice(args[0].length + 1));
  }
  message.channel.sendEmbed(embed);
};

/* 
* ----------------------------------------------
* 
*
*
*
*
* Бот, созданный специально для сервера Paradoxal 
* Библиотеки | Discord.js | Ms
* Ссылка на дискорд | https://discord.gg/9gAxxx
* Разрешается использовать на вашем сервере
*
*
*
*
* ----------------------------------------------
*/

// Библиотеки 📁
const Discord = require('discord.js');
const ms      = require('ms');

// Клиент
const client  = new Discord.Client();

// Конфиг 🔨
let p = '.';
let c = "#a142f4";

// Глобальные эмодзи 😂
const emojis = {
    yes:'548538686237704202',
    no:'548538689572175902'
    }

// Авторизация
client.login(process.env.TOKEN);

// Ивент при заходе человека на сервер ➕
client.on('guildMemberAdd',(member) => member.guild.channels.get('548599362867953758').send(`◉ ${member}`, 
       new Discord.RichEmbed()
   .setThumbnail(member.user.avatarURL)                                                                                         
   .setTitle("Приветствуем вас на нашем сервере!")
                .setDescription(`Приветствуем на Paradoxal. Ты стал ${member.guild.memberCount} участником нашего сервера!
Прочитай <#547759714574794762> и начинай общаться!`)
                .setFooter("Спасибо за то, что присоединились к нам!")
                .setColor(c)
              ).then( msg => {
    msg.react("🎉")
    } )
)

// Основной код
client.on('message', async message => {
        const args = message.content.slice(p.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
if (message.content.startsWith(p + 'mute')) {
// Эмбеды ошибок
const notomute = new Discord.RichEmbed()
.setTitle("Ошибка")
.setDescription(`${client.emojis.get(emojis.no)} Данный пользователь не является участником данного сервера.`)
.setColor(c)

const noperm = new Discord.RichEmbed()
.setTitle("Ошибка")
.setDescription(`${client.emojis.get(emojis.no)} Вы не являетесь модератором данного сервера.`)
.setColor(c)

const nomutetime = new Discord.RichEmbed()
.setTitle("Ошибка")
.setDescription(`${client.emojis.get(emojis.no)} Вы не указали время мута.`)
.setColor(c)

const noerer = new Discord.RichEmbed()
.setTitle("Ошибка")
.setDescription(`${client.emojis.get(emojis.no)} Вы не указали причину мута`)
.setColor(c)

// Переменные
  let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
  let muterole = message.guild.roles.find(`name`, "💀 › Muted");
  let mutetime = args[1];
  let erer = args.slice(2).join(' ');;

// Ошибки
  if (!message.member.roles.has("544160425286172679")) return message.channel.send(noperm);
  if(!tomute) return message.channel.send(notomute);
  if(!mutetime) return message.channel.send(nomutetime);
  if(!erer) return message.channel.send(noerer);

// Выдача роли
  await tomute.addRole(muterole.id);
    
// Отправление эмбеда
  const muteEmbed = new Discord.RichEmbed()
  .addField("Нарушитель", `${tomute}`)
  .addField("Модератор:", `${message.author}`)
  .addField("Заглушен на:", `${ms(ms(mutetime))}`)
  .addField("Причина:", `${erer}`)
  .setColor(c)
  message.channel.send(muteEmbed);

// Удаление роли у пользователя
  setTimeout(function(){
    tomute.removeRole(muterole.id);
  }, ms(mutetime));

}

if (message.content.startsWith(p + 'unmute')) {
// Эмбеды ошибок
const noperm = new Discord.RichEmbed()
.setTitle("Ошибка")
.setDescription(`${client.emojis.get(emojis.no)} Вы не являетесь модератором данного сервера.`)
.setColor(c)

const notomute = new Discord.RichEmbed()
.setTitle("Ошибка")
.setDescription(`${client.emojis.get(emojis.no)} Данный пользователь не является участником данного сервера.`)
.setColor(c)
    
const tomutenomute = new Discord.RichEmbed()
.setTitle("Ошибка")
.setDescription(`${client.emojis.get(emojis.no)} Данный пользователь не является нарушителем`)
.setColor(c)

// Переменные
  let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
  let muterole = message.guild.roles.find(`name`, "💀 › Muted");
    
// Ошибки
  if (!message.member.roles.has("544160425286172679")) return message.channel.send(noperm);
  if(!tomute) return message.channel.send(notomute);
  if(!tomute.roles.has("546266965434564619")) return message.channel.send(tomutenomute);
    
// Удаление роли
    await tomute.removeRole(muterole.id)
    
// Отправление эмбеда
const muteEmbed = new Discord.RichEmbed()
.addField("Нарушитель", `${tomute}`)
.addField("Модератор:", `${message.author}`)
.setColor(c)
message.channel.send(muteEmbed);
    }
if (message.content.startsWith(p + 'help')) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.member.avatarUrl, "Помощь по запросу " + message.author.tag)
    .addField("Эмоции", "``.обнять``, ``.ударить``, ``.поцеловать``, ``.погладить``, ``.тыкнуть``, ``.щекотать``, ``.покормить``")
    .addField("Другое", "``.аватар``")
    .addField("18+", "``.порнгиф``, ``.хентай``, ``.пусси``, ``.грудь``, ``.трап``, ``.анал``, ``.эротика``")
    .addField("Модерация", "``.mute``, ``.unmute``")
    .setColor(c)
    .setThumbnail("https://img.icons8.com/nolan/96/000000/help.png")
    message.channel.send(embed);
    }
        });

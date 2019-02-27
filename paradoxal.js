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

// Ивент при запуске бота 👤
client.on('ready', () => {
    console.log('Бот успешно запущен!');
    function randomStatus() {
        let status = [`за Paradoxal`, `.help`, client.guilds.get('544082820621139968').memberCount + ` участников`, `идем к 100 участникам`];
        let rstatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[rstatus], {type: 3});
 }; setInterval(randomStatus, 10000)
});

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
        });

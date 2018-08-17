const Discord = require('discord.js');
const bot = new Discord.Client();
const request = require('request');

var prefix = ("[");

bot.on('ready', () => {
	bot.user.setGame(bot.guilds.size + "[aide");
	bot.user.setUsername("ROBinson");
});


//EMOJIS
const knuckles = bot.emojis.get("432968588383748116");
const lolidragon = bot.emojis.get("433289550375419904");
const dab = bot.emojis.get("432915228947120129");

bot.login(process.env.TOKEN);

bot.on('message', message => {
	
    if(message.author.bot) return;
	
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if (message.content === prefix + "info"){
        var embed = new Discord.RichEmbed()
		.setThumbnail(message.guild.iconURL)
		.setTitle("INFO")
		.setDescription("Information du serveur")
		.addField("Nom", message.guild.name)
		.addField("Membres", message.guild.memberCount)
		.setColor("0xF4D03F")
		.setFooter("BOT CRÉÉ PAR MISTIGRIX")
        message.channel.sendEmbed(embed);
}
	
	
    if (msg.startsWith(prefix + 'SUPPR')) {

        async function purge() {
            message.delete();

            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                return;
            }

            if (isNaN(args[0])) {

                message.channel.send("Merci d'utiliser un nombre !\n ```\n " + prefix + "suppr <nombre de messages à supprimer>\n```");
		    return;
	        }

            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + " messages found, deleting...");

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Erreur: ${error}`));

        }

        purge();

    }
    
    if (message.content === prefix + "aide"){
        var embed2 = new Discord.RichEmbed()
		.setThumbnail("http://i.imgur.com/9eIhQvf.gif")
		.setTitle("AIDE")
		.setDescription("COMMANDES")
		.addField("UTILES", "`[info` (pour voir les informations du serveurs)\n`[invite` (pour inviter le bot sur votre serv)\n`*avatar` (pour avoir votre PP)\n`*aide` (bah... pour l'aide quoi.)\n`*news` (pour voir mes nouveautées)\n`*sondage <question>` (pour faire un sondage)")
		.addField("JEUX", "\`*multi <NOM DU JEU>\` (Pour faire une recherche de joueurs)")
		.addField("PLUS", "`*aide nsfw` pour voir des trucs cochons (**seulement dans un channel nsfw**)", true)
		.setColor("0xF4D14F")
		.setFooter("BOT CRÉÉ PAR MISTIGRIX, qui a caché des easter eggs...")
        message.channel.sendEmbed(embed2);
    }
    
    
    if (message.content === prefix + "news"){
        var embed4 = new Discord.RichEmbed()
		.setThumbnail("http://i.imgur.com/9eIhQvf.gif")
		.setTitle("VOICI MES NOUVEAUTÉES !")
		.setDescription("\n")
		.addField("AJOUTS", "📌Ajout de la commandes : \`*aide nsfw\` Pour voir des trucs cochons (**seulement dans un channel nsfw**)\nAvec en prime des commandes cochones à découvrir avec celle-ci ! :D")
		.addField("PATCH", "🌀 Des fois je crashais (encore +) 🌀")
		.setColor("0xF4D14F")
		.setFooter("Version 1.5")
        message.channel.sendEmbed(embed4);
    }	
	
	
    if (msg.startsWith(prefix + "MULTIARK")) {
	
	
	var multi = bot.emojis.get("434047602602803200");
	    
	message.delete();
	    
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
        var embed = new Discord.RichEmbed()
            .setTitle("RECHERCHE DE JOUEURS")
	    .setDescription("Recherche par "+ message.author)
	    .setThumbnail("https://images.emojiterra.com/emojione/v2/128px/1f579.png")
            .addField(`Joue à ARK, Réagissez avec ${multi} si vous êtes intéressé(e)`, false)
            .setColor("0xB40404")
            .setTimestamp();
        message.channel.sendEmbed(embed)
        .then(function (message) {
        message.react(multi);
     });
     }

   //  if (msg.startsWith(prefix + "CHAT")) {
              //message.delete();

              //var options = {
                //method: "GET",
                //url: `http://aws.random.cat/meow`,
              //};
            //  
          //    request.get(options, (error, response, body) => {
        //            var file = JSON.parse(body);
          //          message.channel.sendFile(file.file);
      //        });
    // }
	
    if (message.content.startsWith(prefix + "supersondage")) {
	
	if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                return;
	}
            
	message.delete();
	    
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
        var embed = new Discord.RichEmbed()
            .setTitle("SUPER SONDAGE")
	    .setDescription("Question de " + message.author + " pour @everyone")
	    .setThumbnail("https://qph.fs.quoracdn.net/main-qimg-49b8b38b8301a67c52f18ab79d927827.webp")
            .addField(thingToEcho + " ", "Répondre avec :white_check_mark: ou :x:\n ", false)
            .setColor("0xB40404")
            .setTimestamp();
        message.channel.sendEmbed(embed)
        .then(function (message) {
        message.react("✅");
        message.react("❌");
     });
     }

	
if (message.content.startsWith(prefix + "annonce")){
	 
	let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
	 
	if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                return;
	}
	 
        var embed2 = new Discord.RichEmbed()
		.setThumbnail("https://image.noelshack.com/fichiers/2018/16/6/1524330497-annonce.png")
		.setTitle(thingToEcho)
		.setDescription("@everyone")
		.setTimestamp()
		.setColor("cc55ee")
        message.channel.sendEmbed(embed2);
    }
	
});

bot.on('messageReactionAdd', (reaction, user) => {
	
var multi = bot.emojis.get("434047602602803200");
	
    if(reaction.emoji.identifier === "434047602602803200") {
	var author = reaction.message.mentions.members.first();
	var reactor = reaction.user
	author.sendMessage( "Quelqu'un est partant pour faire une partie avec toi !");
    }
});

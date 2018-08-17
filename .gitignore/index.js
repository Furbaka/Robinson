const Discord = require('discord.js');
const bot = new Discord.Client();
const request = require('request');

var prefix = ("[");

bot.on('ready', () => {
	bot.user.setGame("[aide");
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
    
    if (message.content === "Je vous présente <@480019387093483522> !"){
	     if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                return;
            }
bot.sendMessage('Bonjour tout le monde ! :happy:')
    }
	
if (message.content === prefix + "aide"){
        
		.setThumbnail("https://media.giphy.com/media/RpZUut1c4BpOE/source.gif")
		.setTitle("AIDE")
		.setDescription("COMMANDES")
		.addField("UTILES", "`[info` (pour voir les informations du serveurs)\n`[aide` (bah... pour l'aide quoi.)")
		.addField("JEUX", "\`*multiark\` (Pour faire une recherche de joueurs sur ARK)")
		.setColor("0xF4D14F")
		.setFooter("BOT CRÉÉ PAR MISTIGRIX")
        message.channel.sendEmbed(embed2);
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

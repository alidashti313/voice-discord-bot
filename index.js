const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]
});

// ضع توكن البوت هنا
const TOKEN = "YOUR_BOT_TOKEN";

// ضع ID السيرفر
const GUILD_ID = "YOUR_GUILD_ID";

// ضع ID الروم الصوتي
const CHANNEL_ID = "YOUR_VOICE_CHANNEL_ID";

client.once("ready", async () => {
    console.log(`${client.user.tag} is online!`);

    const guild = client.guilds.cache.get(GUILD_ID);

    if (!guild) {
        console.log("Guild not found");
        return;
    }

    const channel = guild.channels.cache.get(CHANNEL_ID);

    if (!channel) {
        console.log("Voice channel not found");
        return;
    }

    joinVoiceChannel({
        channelId: channel.id,
        guildId: guild.id,
        adapterCreator: guild.voiceAdapterCreator,
    });

    console.log("Joined voice channel!");
});

client.login(TOKEN);

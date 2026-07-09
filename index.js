const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]
});

// ضع توكن البوت هنا
const TOKEN = const TOKEN = ".MTUyNDYxMTA2MDA3MjQ1MjE1Ng.GqeBjq.8HwwIZJ_pY63Qdd35QXoCE5FTg6qcC_NF_5JmM...";

// ضع ID السيرفر
const GUILD_ID = "1524483169687175301";

// ضع ID الروم الصوتي
const CHANNEL_ID = "1524489473184895057";

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

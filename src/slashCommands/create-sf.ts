import { ActionRowBuilder, ButtonBuilder, ButtonStyle, CommandInteraction, EmbedBuilder, SlashCommandBuilder, TextChannel } from "discord.js";
import { SlashCommand } from "../structs/types/Commands";
import { client } from "../app";

export default new SlashCommand({
    data: new SlashCommandBuilder()
        .setName('create-sf')
        .setDescription('create the sf embed')
        .setDefaultMemberPermissions(8),
    
    async execute(interaction: CommandInteraction) {
        
        const embed = new EmbedBuilder()
            .setColor([17, 235, 162])
            .setDescription('Clique no botão para participar e siga o processo.');
                   
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('subscribe')
                .setStyle(ButtonStyle.Secondary)
                .setEmoji('👤')
        );
        
        const c = client.channels.cache.find(c => c.id === '1155905415595429991') as TextChannel;
        
        c.send({
            embeds: [embed],
            components: [row as any]
        });
    }
})
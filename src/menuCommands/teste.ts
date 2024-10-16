import { ApplicationCommandType, ContextMenuCommandBuilder, ContextMenuCommandInteraction } from 'discord.js';
import { MenuCommand } from '../structs/types/Commands';

export default new MenuCommand({
    data: new ContextMenuCommandBuilder()
        .setName('teste')
        .setType(ApplicationCommandType.Message)
        .setDMPermission(false),

    async execute(interaction: ContextMenuCommandInteraction) {
        await interaction.reply({ content: 'oi', ephemeral: true });
    }
})
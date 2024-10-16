import { CommandInteraction, SlashCommandBuilder} from 'discord.js';
import { SlashCommand } from '../structs/types/Commands';
import { mudaefav } from '../utils/mudae';
import { searchAPI } from '../anilist/anilist';

export default new SlashCommand({
    data: new SlashCommandBuilder()
        .setName('anilist')
        .setDescription('Search Anilist')
        .addSubcommand(sub => sub
            .setName('mudae')
            .setDescription('get the favourites')
            .addStringOption(opt => opt
                .setName('username')
                .setDescription('type your anilist username')
                .setRequired(true))),

    async execute(interaction: CommandInteraction) {
        const options = interaction.options as any;

        if (options._subcommand === 'mudae') {
            let search = await searchAPI(options.get('username')?.value, 'user');
            let favs = mudaefav(search.favourites.characters.nodes);
            await interaction.reply({ content: favs });
            return;
        }
    },
})
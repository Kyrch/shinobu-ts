import { SlashCommandBuilder } from 'discord.js';

import SlashCommand from 'discord/SlashCommand';
import { cruGql } from 'graphql/client';

const FAVOURITES_QUERY = `
    query FavouriteCharacters($search: String, $page: Int) {
        User(name: $search) {
            favourites {
                characters(page: $page) {
                    pageInfo {
                        hasNextPage
                    }
                    nodes {
                        name {
                            full
                        }
                    }
                }
            }
        }
    }
`;

export default new SlashCommand({
    data: new SlashCommandBuilder()
        .setName('anilist')
        .setDescription('Search Anilist')
        .addSubcommand(sub =>
            sub
                .setName('mudae')
                .setDescription('get the favourites')
                .addStringOption(opt =>
                    opt
                        .setName('username')
                        .setDescription('type your anilist username')
                        .setRequired(true),
                ),
        ),

    async execute(interaction) {
        const options = interaction.options;

        if (options.getSubcommand() !== 'mudae') {
            return;
        }

        const username = options.getString('username', true);

        const favourites = [];
        let page = 1;
        while (true) {
            const { User } = await cruGql(FAVOURITES_QUERY, { search: username, page: page });

            page++;

            if (!User || !User.favourites?.characters?.nodes) {
                return interaction.reply({
                    content: 'Unable to fetch favourites for that username.',
                    ephemeral: true,
                });
            }

            favourites.push(...User.favourites.characters.nodes);

            if (! User.favourites?.characters?.pageInfo.hasNextPage) {
                break;
            }
        }

        const favs = favourites.map(fav => fav.name.full)
            .join('$')
            .replace(/( )+/g, ' ');

        await interaction.reply({ content: favs });
    },
});
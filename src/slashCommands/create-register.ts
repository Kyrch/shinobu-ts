import { ActionRowBuilder, ButtonBuilder, CommandInteraction, EmbedBuilder, MessageCreateOptions, SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from '../structs/types/Commands';
import { EmbedColor } from '../structs/types/Embed';
import { animeDescrption, boosterDescription, faqDescription, gamesDescription } from '../config/strings';

import jsonData from '../config/embed.json';

export default new SlashCommand({
    data: new SlashCommandBuilder()
        .setName('create-register')
        .setDescription('create the register embeds')
        .setDefaultMemberPermissions(8)
        .addStringOption(opt => opt
            .setName('register')
            .setDescription('register type')
            .setRequired(true)
            .addChoices(
                { name: 'Anime', value: 'anime'},
                { name: 'Booster', value: 'booster'},
                { name: 'Color', value: 'color'},
                { name: 'FAQ', value: 'faq'},
                { name: 'Games', value: 'games'}
            )),

        async execute(interaction: CommandInteraction) {
            const { channel, options } = interaction;

            const type = options.get('register')?.value;

            switch (type) {
                case 'anime':
                    channel?.send(anime())
                    break;
                case 'booster':
                    channel?.send(booster())
                    break;
                case 'color':
                    channel?.send(color())
                    break;
                case 'faq':
                    channel?.send(faq())
                    break;
                case 'games':
                    channel?.send(games())
                    break;
            }

            await interaction.reply({ content: 'Done.' });
        },
});

const anime = () => {
    let embed = new EmbedBuilder()
        .setColor(jsonData.color as EmbedColor)
        .setDescription(animeDescrption);

    let row1 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('barakamon')
                .setEmoji()
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('hibike-euphonium')
                .setEmoji()
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('houseki-no-kuni')
                .setEmoji()
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('hunter-x-hunter')
                .setEmoji()
                .setStyle(2),
        );
    
    let row2 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('jojo')
                .setEmoji()
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('love-live')
                .setEmoji()
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('monogatari')
                .setEmoji()
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('one-piece')
                .setEmoji()
                .setStyle(2),
        );

    let row3 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('sousou-no-frieren')
                .setEmoji()
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('steins-gate')
                .setEmoji()
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('tower-of-god')
                .setEmoji()
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('neverland')
                .setEmoji()
                .setStyle(2),
        );

    let msg = {
        embeds: [embed],
        components: [row1, row2, row3]
    } as MessageCreateOptions;

    return msg;
}

const booster = () => {
    let embed = new EmbedBuilder()
        .setColor(jsonData.color as EmbedColor)
        .setDescription(boosterDescription)

    let row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setEmoji('🚀')
                .setLabel('Seja Booster')
                .setStyle(5)
                .setURL('https://support.discord.com/hc/pt-br/articles/360028038352-Server-Boosting-')
        )

    let msg = {
        embeds: [embed],
        components: [row]
    } as MessageCreateOptions;

    return msg;
}

const color = () => {
    let row1 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('amarelo')
                .setEmoji('<:amarelo:944732583357452288>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('azul-claro')
                .setEmoji('<:azulclaro:944730688144425063>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('azul-escuro')
                .setEmoji('<:azulescuro:944730687720783882>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('branco')
                .setEmoji('<:branco:944730687284609046>')
                .setStyle(2),
        );

    let row2 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('cinza')
                .setEmoji('<:cinza:944730687670480906>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('laranja')
                .setEmoji('<:laranja:944730687569788959>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('lilas')
                .setEmoji('<:lilas:944730687842451536>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('preto')
                .setEmoji('<:preto:944730687435604053>')
                .setStyle(2),
        );

    let row3 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('rosa')
                .setEmoji('<:rosa:944730687720808529>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('roxo')
                .setEmoji('<:roxo:944730687913754674>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('verde-claro')
                .setEmoji('<:verdeclaro:944730687838224484>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('verde-escuro')
                .setEmoji('<:verdeescuro:944730687875973241>')
                .setStyle(2),
        );

    let row4 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('vermelho')
                .setEmoji('<:vermelho:944730687427207249>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('vinho')
                .setEmoji('<:vinho:944746953776955392>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('faqcolor')
                .setEmoji('❔')
                .setStyle(1),
            new ButtonBuilder()
                .setCustomId('corpersonalizada')
                .setEmoji('<:corpersonalizada:944744434904489984>')
                .setStyle(1)
        )

    let embed = new EmbedBuilder()
        .setColor(jsonData.color as [number, number, number])
        .setDescription('Escolha apenas **UMA** das cores abaixo.')

    let msg = {
        embeds: [embed],
        components: [row1, row2, row3, row4]
    } as MessageCreateOptions;

    return msg;
}

const faq = () => {
    let embed = new EmbedBuilder()
        .setColor(jsonData.color as EmbedColor)
        .setDescription(faqDescription)

    let row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('faqspoiler')
                .setEmoji('🚫')
                .setLabel('Spoilers')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('button-modal-indica')
                .setEmoji('💭')
                .setLabel('Indicar')
                .setStyle(2))

    let msg = {
        embeds: [embed],
        components: [row]
    } as MessageCreateOptions;

    return msg;
}

const games = () => {
    let embed = new EmbedBuilder()
        .setColor(jsonData.color as EmbedColor)
        .setDescription(gamesDescription);

    let row1 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('among-us')
                .setEmoji('<:among-us:944758103394615356>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('amq')
                .setEmoji('<:amq:944758103574986823>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('csgo2')
                .setEmoji('<:csgo2:944758103524667403>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('dbd')
                .setEmoji('<:dbd:1213863948458135552>')
                .setStyle(2),
        );

    let row2 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('fortnite')
                .setEmoji('<:fortnite:966962979784515584>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('lol')
                .setEmoji('<:lol:944758103558201344>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('osu')
                .setEmoji('<:osu:966962979805478982>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('overwatch2')
                .setEmoji('<:overwatch2:1213864327925469204>')
                .setStyle(2),
        );

    let row3 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('roblox')
                .setEmoji('<:roblox:944758103646285834>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('rocket-league')
                .setEmoji('<:rocket-league:944758103423991829>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('valorant')
                .setEmoji('<:vava:944758103520456784>')
                .setStyle(2),
            new ButtonBuilder()
                .setCustomId('faqgames')
                .setEmoji('❔')
                .setStyle(1),
        );

    let msg = {
        embeds: [embed],
        components: [row1, row2, row3]
    } as MessageCreateOptions;

    return msg;
}
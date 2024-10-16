import { ButtonInteraction, EmbedBuilder } from 'discord.js';
import { EmbedColor } from '../../structs/types/Embed';
import { colorDescription, gamesDescription } from '../../config/strings';

import BaseButton from '../Base/BaseButton';
import jsonData from '../../config/embed.json';

export default class FaqButton extends BaseButton {

    constructor(public interaction: ButtonInteraction) {
        super()
    }

    public getCustomId(): string[] {
        return [
            'corpersonalizada',
            'faqcolor',
            'faqgames',
        ];
    }

    public async handle(): Promise<void> {
        const { customId, user } = this.interaction;
        let descriptionFaq: string | boolean = false;

        const avatarVerify = user.avatarURL({
            size: 1024
        });

        let avatar = avatarVerify === null ? 'https://i.imgur.com/JdLLM92.png' : avatarVerify;

        if (customId === 'corpersonalizada') {
            await this.interaction.reply({
                content: 'Quer uma cor personalizada? Dê uma olhada em <#852658210938945566>.',
                ephemeral: true
            });
            return;
        }

        if (customId === 'faqcolor') {
            descriptionFaq = colorDescription;
        }

        if (customId === 'faqgames') {
            descriptionFaq = gamesDescription;
        }

        if (descriptionFaq) {
            let embed = new EmbedBuilder()
                .setColor(jsonData.color as EmbedColor)
                .setAuthor({ name: user.username, iconURL: `${avatar}` })
                .setDescription(`${descriptionFaq}`)
                .setTimestamp()
                .setFooter({ text: jsonData.footerText, iconURL: jsonData.footerIcon });

            await this.interaction.reply({
                embeds: [embed],
                ephemeral: true
            });

            return;
        }
    }

    public getInteraction(interaction: ButtonInteraction): this {
        this.interaction = interaction;

        return this;
    }
}
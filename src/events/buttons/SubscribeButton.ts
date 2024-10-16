import { ActionRowBuilder, ButtonInteraction, ModalBuilder, TextInputBuilder } from 'discord.js';

import BaseButton from '../Base/BaseButton';

export default class SubscribeButton extends BaseButton {

    constructor(public interaction: ButtonInteraction) {
        super()
    }

    public getCustomId(): string {
        return 'subscribe';
    }

    public async handle(): Promise<void> {
        let modal = new ModalBuilder()
            .setCustomId('modal-subscribe')
            .setTitle('AMIGO SECRETO');

        const email = new TextInputBuilder()
            .setCustomId('email')
            .setRequired(true)
            .setStyle(1)
            .setLabel('EMAIL');
        
        const rua = new TextInputBuilder()
            .setCustomId('rua')
            .setRequired(true)
            .setStyle(1)
            .setLabel('RUA - NÚMERO');

        const complemento = new TextInputBuilder()
            .setCustomId('complemento')
            .setRequired(false)
            .setStyle(1)
            .setLabel('COMPLEMENTO');

        const bairro = new TextInputBuilder()
            .setCustomId('bairro')
            .setRequired(true)
            .setStyle(1)
            .setLabel('BAIRRO - CEP');

        const cidade = new TextInputBuilder()
            .setCustomId('cidade')
            .setRequired(true)
            .setStyle(1)
            .setLabel('CIDADE - ESTADO');

        const row1 = new ActionRowBuilder().addComponents(email);
        const row2 = new ActionRowBuilder().addComponents(rua);
        const row3 = new ActionRowBuilder().addComponents(complemento);
        const row4 = new ActionRowBuilder().addComponents(bairro);
        const row5 = new ActionRowBuilder().addComponents(cidade);

        modal.addComponents([row1, row2, row3, row4, row5] as any[]);

        await this.interaction.showModal(modal);
    }

    public getInteraction(interaction: ButtonInteraction): this {
        this.interaction = interaction;

        return this;
    }
}
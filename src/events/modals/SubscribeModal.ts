import { EmbedBuilder, ModalSubmitInteraction, TextChannel } from 'discord.js';

import BaseModal from '../Base/BaseModal';
import Config from '../../config/config';

export default class SubscribeModal extends BaseModal {

    constructor(public interaction: ModalSubmitInteraction) {
        super()
    }

    public getCustomId(): string {
        return 'modal-subscribe';
    }

    public async handle(): Promise<void> {
        const { fields, guild, user } = this.interaction;

        await this.interaction.deferReply({ ephemeral: true });

        let email = fields.getTextInputValue('email');
        let rua = fields.getTextInputValue('rua');
        let complemento = fields.getTextInputValue('complemento');
        let bairro = fields.getTextInputValue('bairro');
        let cidade = fields.getTextInputValue('cidade');

        const channelAdress = guild?.channels.cache.find(c => c.id === Config.ENDERECOS_CHANNEL_ID) as TextChannel;
        const channelPart = guild?.channels.cache.find(c => c.id === '1155905415595429991') as TextChannel;

        let embed = new EmbedBuilder()
            .setColor([0, 255, 34])
            .setAuthor({ name: user.username, iconURL: user.avatarURL({ extension: 'png' }) || undefined as string|undefined })
            .setThumbnail(user.avatarURL({ extension: 'png' }) || null)
            .setDescription(`**Email:** ${email}\n**Rua:** ${rua}\n**Complemento:** ${complemento || 'Não divulgado'}\n**Bairro - CEP:** ${bairro}\n**Cidade/Estado:** ${cidade}`);

        channelPart.messages.fetch('1156266965648822272').then(m => {
            let lines = m.content.split('\n');
            let lastLine = lines[lines.length - 1];
            let number = parseInt(lastLine.split(' -')[0]);
            m.edit({ content: `${m.content}\n${number + 1} - <@!${user.id}>`});
        });

        channelAdress.send({
            embeds: [embed] 
        });

        await this.interaction.followUp({ content: 'Seu endereço foi enviado.', ephemeral: true });
    }

    public getInteraction(interaction: ModalSubmitInteraction): this {
        this.interaction = interaction;

        return this;
    }
}
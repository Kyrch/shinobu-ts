import { ButtonInteraction, GuildMember } from 'discord.js';

import BaseButton from '../Base/BaseButton';

import * as rolesJson from '../../config/roles.json';

const rolesJSON = rolesJson as { [key: string]: string };

export default class RolesButton extends BaseButton {

    constructor(public interaction: ButtonInteraction) {
        super()
    }

    public getCustomId(): string {
        return 'roles';
    }

    public async handle(): Promise<void> {
        const { customId, guild } = this.interaction;
        const member = this.interaction.member as GuildMember;

        let roleID: string | undefined = rolesJSON[customId];
        let role = guild?.roles.cache.find(role => role.id === roleID);

        if (roleID && role) {
            if (member.roles.cache.has(role.id)) {
                member.roles.remove(role);
                var ae = 'removido';
            } else {
                member.roles.add(role);
                var ae = 'adicionado';
            }

            await this.interaction.reply({ content: `Cargo <@&${roleID}> foi ${ae}.`, ephemeral: true });
        }
    }

    public getInteraction(interaction: ButtonInteraction): this {
        this.interaction = interaction;

        return this;
    }
}
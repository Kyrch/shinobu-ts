import { BaseInteraction, Events } from 'discord.js';

import Event from '../structs/types/Event';
import FaqButton from './buttons/FaqButton';
import RolesButton from './buttons/RolesButton';
import SubscribeButton from './buttons/SubscribeButton';

import * as rolesJson from '../config/roles.json';

const rolesJSON = rolesJson as  { [key: string]: string };

export default new Event({
    name: Events.InteractionCreate,
    async execute(interaction: BaseInteraction): Promise<any> {
        if (!interaction.isButton()) return;

        const buttons = [
            new FaqButton(interaction),
            new SubscribeButton(interaction),
        ]

        for (let button of buttons) {
            if (typeof button.getCustomId() === 'string' && interaction.customId === button.getCustomId()) {
                await button.handle();
                break;
            } else if (typeof button.getCustomId() === 'object' && button.getCustomId().includes(interaction.customId)) {
                await button.handle();
                break;
            }
        }

        if (interaction.customId in rolesJSON) {
            const rolesButton = new RolesButton(interaction);
            await rolesButton.handle();
            return;
        }
    }
})
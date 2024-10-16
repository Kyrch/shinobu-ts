import { BaseInteraction, Events } from 'discord.js';

import Event from '../structs/types/Event';
import SubscribeModal from './modals/SubscribeModal';

export default new Event({
    name: Events.InteractionCreate,
    async execute(interaction: BaseInteraction): Promise<any> {
        if (!interaction.isModalSubmit()) return;

        const modals = [
            new SubscribeModal(interaction)
        ]

        for (let modal of modals) {
            if (interaction.customId === modal.getCustomId()) {
                await modal.handle();
                break;
            }
        }
    }
})
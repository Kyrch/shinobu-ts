import { ModalSubmitInteraction } from 'discord.js';

export default abstract class BaseModal {

    public abstract getCustomId(): string;
    
    public abstract handle(): Promise<void>;

    public abstract getInteraction(interaction: ModalSubmitInteraction): this;
}
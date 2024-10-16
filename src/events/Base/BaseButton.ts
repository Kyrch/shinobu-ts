import { ButtonInteraction } from 'discord.js';

export default abstract class BaseButton {

    public abstract getCustomId(): string | string[];

    public abstract handle(): Promise<void>;

    public abstract getInteraction(interaction: ButtonInteraction): this;
}
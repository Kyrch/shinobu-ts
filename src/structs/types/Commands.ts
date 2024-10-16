import { ButtonInteraction, Collection, CommandInteraction, ContextMenuCommandBuilder, ContextMenuCommandInteraction, ModalSubmitInteraction, SlashCommandBuilder } from "discord.js";

export type ComponentsModal = Collection<string, (interaction: ModalSubmitInteraction) => any>;
export type ComponentsButton = Collection<string, (interaction: ButtonInteraction) => any>;

type CustomSlashCommandData = Omit<
  Omit<SlashCommandBuilder, 'addBooleanOption' | 'addUserOption' | 'addChannelOption' | 'addRoleOption' | 'addAttachmentOption' | 'addMentionableOption' | 'addStringOption' | 'addIntegerOption' | 'addNumberOption'>,
  'addSubcommand' | 'addSubcommandGroup'
>;

export class SlashCommand {
    public command: {
        data: CustomSlashCommandData,
        execute: (interaction: CommandInteraction) => any;
    }

    constructor(options: { data: CustomSlashCommandData, execute: (interaction: CommandInteraction) => any }) {
        this.command = {
            data: options.data,
            execute: options.execute
        }
    }
}

export class MenuCommand {
    public command: any;

    constructor(options: { data: Omit<ContextMenuCommandBuilder, "">, execute: (interaction: ContextMenuCommandInteraction) => any }) {
        this.command = {
            data: options.data,
            execute: options.execute
        }
    }
}
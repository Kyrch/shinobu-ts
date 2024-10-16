import * as dotenv from 'dotenv';

dotenv.config();

export default class Config {
    public static readonly DISCORD_TOKEN = process.env.DISCORD_TOKEN;
    public static readonly ID_BOT = process.env.ID_BOT;
    public static readonly ENDERECOS_CHANNEL_ID = process.env.ENDERECOS_CHANNEL_ID;
    public static readonly TDN_ID = process.env.TDN_ID;
}
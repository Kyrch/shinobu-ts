import * as dotenv from 'dotenv';

dotenv.config();

const config = {
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    ANILIST_ENDPOINT: "https://graphql.anilist.co",
};

export default config;
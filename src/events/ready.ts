import { client } from 'app';
import { ActivityType, Events } from 'discord.js';
import Event from 'discord/Event';

const activities = [
    { type: ActivityType.Watching, name: 'Monogatari' },
    { type: ActivityType.Playing, name: 'with friends' },
    { type: ActivityType.Streaming, name: 'on Terra do Nunca' }
]

export default new Event({
    name: Events.ClientReady,
    execute() {
        console.log('Bot Online');
        client.user?.setActivity({ type: ActivityType.Streaming, name: 'on Terra do Nunca'});

        setInterval(() => {
            const randomActivity = activities[Math.floor(Math.random() * activities.length)];
            client.user?.setPresence({
                afk: false,
                activities: [{
                    name: randomActivity.name,
                    type: randomActivity.type
                }]
            });
        }, 3 * 60 * 1000);
    }
})
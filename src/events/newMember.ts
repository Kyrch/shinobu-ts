import { Events, GuildMember } from 'discord.js';

import Config from '../config/config';
import Event from '../structs/types/Event';

export default new Event({
    name: Events.GuildMemberAdd,
    once: true,
    execute(member: GuildMember) {
        const { guild, user } = member;

        if (user?.bot) return;
        if (guild.id !== Config.TDN_ID) return;

        guild.systemChannel?.send({
            content: `Seja bem-vindo (a) <@!${user.id}> à nossa amada **${guild.name}** !!! Agora somos ${guild.memberCount} membros no server.\nLembre-se de ler as <#775088287626428416>, fazer seus <#854065444812881960> e aproveitar ao máximo! <:senjougahara:775725327908601936>`
        });
    }
})
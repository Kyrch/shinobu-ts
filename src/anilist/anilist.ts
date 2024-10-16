import { api } from './api';

import * as query from './queryAnilist';

export const searchAPI = async (searchArg: string, type: 'character' | 'staff' | 'user') => {
    const response = await api(query[type], {
        search: searchArg
    });

    if (response.error) {
        return response;
    }

    switch (type) {
        case 'character':
            return response.Character;
        case 'staff':
            return response.Staff;
        case 'user':
            return response.User
    }
}

export const searchMedia = async (searchArg: string, typeMedia: 'ANIME' | 'MANGA') => {
    const response = await api(query.media, {
        search: searchArg,
        type: typeMedia,
        page: 1,
        perPage: 5,
    });

    return response.Page.media;
}
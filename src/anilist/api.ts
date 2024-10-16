import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('https://graphql.anilist.co', {
    redirect: 'follow'
});

export const api = (query: string, variables: any): any =>
    client
        .request(query, variables)
        .then(data => data)
        .catch(error => ({
            error: error.response.errors[0] || 'Unknown Error'
        }));
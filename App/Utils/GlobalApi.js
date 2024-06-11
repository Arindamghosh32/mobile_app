import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clws6uzte018007uv3qyhlbc2/master';

const client = new ApolloClient({
  uri: MASTER_URL,
  cache: new InMemoryCache(),
});

export default client;

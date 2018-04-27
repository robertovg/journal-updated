import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { GRAPHQL_SERVER_URL } from 'react-native-dotenv';

import Navigator from './Navigator';
import { getToken } from './loginUtils';

// To avoid https://github.com/facebook/react-native/issues/9599
if (typeof global.self === 'undefined') {
  global.self = global;
}

const authLink = setContext(async (req, { headers }) => {
  const token = await getToken();
  return {
    ...headers,
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});
const httpLink = new HttpLink({
  uri: GRAPHQL_SERVER_URL,
});

const link = authLink.concat(httpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Navigator />
  </ApolloProvider>
);

export default App;

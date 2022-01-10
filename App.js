import LoginStack from './components/LoginStack';
import { ApolloProvider } from '@apollo/client';
import client from './utils/graphql';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <LoginStack />
    </ApolloProvider>
  )
};

export default App;

import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://toledo.stepzen.net/api/laughing-skunk/__graphql',
  // uri: "http://172.21.19.153:5001/api/laughing-skunk/__graphql"
  headers: {
    // Authorization:`Apikey ${process.env.STEPZEN_API_KEY}`,
    "Authorization": "apikey toledo::stepzen.io+1000::a5baa495cc7373f76724fb59648100d733939aee19e8e2843096097299e8585a"
  },
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
};
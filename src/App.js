import { GraphQLClient, ClientContext } from 'graphql-hooks';
import Container from './components/_layout/Container';

import PokemonPage from './pages/PokemonPage';

const client = new GraphQLClient({
  url: process.env.REACT_APP_POKE_ENDPOINT,
});

export default function App() {
  return (
    <ClientContext.Provider value={client}>
      <>
        <Container>
          <PokemonPage/>
        </Container>
      </>
    </ClientContext.Provider>
  );
}

import Cabecalho from './components/Cabecalho';
import Pesquisa from './components/Pesquisa';
import UltimosLancamentos from './components/UltimosLancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
    90deg, 
    #002F52 35%, 
    #326589
  );
`;

function App() {
  return (
    <AppContainer >
      <Cabecalho />
      <Pesquisa />
      <UltimosLancamentos 
        css={{
          color: '#ffa500',
          backgroundColor: '#ddd',
        }}
      />
    </AppContainer>
  );
}

export default App;

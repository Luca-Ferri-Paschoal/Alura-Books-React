import Cabecalho from './components/Cabecalho';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
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
    </AppContainer>
  );
}

export default App;

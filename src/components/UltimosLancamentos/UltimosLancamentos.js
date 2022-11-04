import { livros } from './dadosUltimosLancamentos';
import styled from 'styled-components';
import ListaCardLivros from '../ListaCardLivros';

const UltimosLancamentosContainer = styled.section`
    width: 100%;
    box-sizing: border-box;

    h2 {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        padding: 20px;
        background-color: #FFF;
        text-transform: uppercase;
    }
`;

export const UltimosLancamentos = props => {
    const cssContainer = props.css;

    return (
        <UltimosLancamentosContainer style={cssContainer}>
            <h2>Últimos Lançamentos</h2>
            <ListaCardLivros
                livros={livros}
            />
        </UltimosLancamentosContainer>
    );
};

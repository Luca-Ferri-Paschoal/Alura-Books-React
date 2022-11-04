import { livros } from './dadosUltimosLancamentos';
import styled from 'styled-components';
import ListaCardLivros from '../ListaCardLivros';
import { CardRecomenda } from '../CardRecomenda/CardRecomenda';
import imagemLivro from './../../imgs/livro2.png';

const UltimosLancamentosContainer = styled.section`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        padding: 20px;
        background-color: #FFF;
        text-transform: uppercase;
        width: 100%;
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
            <CardRecomenda
                titulo='Talvez você se interesse por . . .'
                subtitulo='Angular 11'
                descricao='Construindo uma aplicação com a plataforma do Google'
                imagem={imagemLivro}
                alt='Logo do Angular'
            />
        </UltimosLancamentosContainer>
    );
};

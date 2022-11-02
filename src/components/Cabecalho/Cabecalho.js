import Logo from './../Logo';
import Menu from './../Menu';
import perfil from './../../imgs/perfil.svg';
import sacola from './../../imgs/sacola.svg';
import styled from 'styled-components';

const CabecalhoContainer = styled.header`
    background-color: #fff;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const opcoesTexto = [
    'Categorias',
    'Favoritos',
    'Minha Estante',
];

const opcoesIcones = [
    perfil,
    sacola
];

export const Cabecalho = props => {
    return (
        <CabecalhoContainer>
            <h1>
                <Logo />
            </h1>
            <Menu
                itens={opcoesTexto}
                />
            <Menu
                type='imagem'
                itens={opcoesIcones}
            />
        </CabecalhoContainer>
    );
};

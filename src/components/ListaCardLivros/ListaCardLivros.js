import CardLivro from '../CardLivro';
import styled from 'styled-components';

const ListaCardLivrosContainer = styled.div`
    padding: 40px;
    display: flex;
    gap: 30px;
    justify-content: center;
`;

export const ListaCardLivros = ({ livros }) => {
    return (
        <ListaCardLivrosContainer>
            {
                livros.map((livro, index) => {
                    return <CardLivro
                        key={index}
                        livro={livro}
                    />
                })
            }
        </ListaCardLivrosContainer>
    );
};

import styled from 'styled-components';

const LivroContainer = styled.div`
    background-color: #fff;
    color: #000;
    display: inline-block;
    padding: 10px;
    width: 150px;
    border-radius: 10px;

    img {
        width: 100%;
        border: 1px solid #000;
        border-radius: 3px;
    }

    h4 {
        font-size: 12px;
        text-align: center;
    }

    :hover {
        border: 3px solid #23d2f5;
    }
`;

export const CardLivro = ({ livro }) => {
    return (
        <LivroContainer>
            <img src={livro.src} alt={livro.alt}/>
            <h4>{livro.nome}</h4>
        </LivroContainer>
    );
}

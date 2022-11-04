import styled from 'styled-components';

const LivroContainer = styled.div`
    background-color: #fff;
    color: inherit;
    display: inline-block;
    padding: 10px;
    width: 170px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 0 #444;

    img {
        width: 100%;
        border: 1px solid #000;
        border-radius: 3px;
    }

    h4 {
        font-size: 14px;
        text-align: center;
        font-weight: 700;
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

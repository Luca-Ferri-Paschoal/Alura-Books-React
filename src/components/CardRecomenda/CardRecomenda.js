import styled from 'styled-components';

const CardRecomendaContainer = styled.div`
    background-color: #fff;
    display: inline-block;
    border-radius: 30px;
    padding: 20px;
    margin: 30px;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    column-gap: 30px;
    row-gap: 10px;
    box-shadow: 2px 2px 10px 0 #444;
    
    .informacoes {
        grid-row: span 2;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .informacoes h3 {
        font-size: 32px;
    }

    .informacoes h4 {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
    }
    
    .informacoes p {
        font-size: 18px;
    }

    .botao-saiba-mais {
        background-color: #23d2f5;
        color: #fff;
        font-weight: 700;
        padding: 10px 20px;
        border-radius: 20px;
        cursor: pointer;
    }

    img {
        border-radius: 20px;  
    }

`;

export const CardRecomenda = ({
    titulo, subtitulo, descricao, imagem, alt
}) => {
    return (
        <CardRecomendaContainer>
            <div className='informacoes'>
                <h3>{titulo}</h3>
                <h4>{subtitulo}</h4>
                <p>{descricao}</p>
            </div>
            <img src={imagem} alt={alt}></img>
            <button className='botao-saiba-mais'>Saiba mais</button>
        </CardRecomendaContainer>
    );
};

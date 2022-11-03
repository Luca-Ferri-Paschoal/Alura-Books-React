import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi'

const PesquisaContainer = styled.section`
    max-width: 600px;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    color: #fff;

    h2 {
        display: inline;
        font-size: 36px;
        font-weight: 700;
    }
    
    h3 {
        display: inline;
        font-size: 16px;
    }

    div {
        width: 450px;
        position: relative;
    }

    input {
        width: 100%;
        background-color: transparent;
        color: inherit;
        border: 2px solid #fff;
        padding: 20px;
        padding-left: 50px;
        border-radius: 30px;
        outline: none;
    }

    input::placeholder {
        color: inherit;
    }
`;

const cssLupinha = {
    position: 'absolute',
    width: '20px',
    height: '20px',
    top: 'calc(50% - 10px)',
    left: '20px',
}

export const Pesquisa = props => {
    return (
        <PesquisaContainer>
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre seu livro em nossa estante.</h3>
            <div>
                <BiSearchAlt style={cssLupinha}/>
                <input
                    placeholder='Escreva sua próxima leitura'
                />
            </div>
        </PesquisaContainer>
    );
}

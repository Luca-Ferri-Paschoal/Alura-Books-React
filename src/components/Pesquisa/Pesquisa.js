import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import { useState } from 'react';
import CardLivro from '../CardLivro';
import { filtraLivros } from './functions';

const PesquisaContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 80px 0;
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

    form {
        width: 450px;
        position: relative;
    }

    input::placeholder {
        color: #BBB;
    }
`;

const ResultadoContainer = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
`;

export const Pesquisa = props => {
    const [cor, setCor] = useState('#BBB');

    const mudaCor = novaCor => {
        setCor(novaCor);
    }

    const criaCssIcon = direcao => {
        const css = {
            position: 'absolute',
            width: '20px',
            height: '20px',
            top: 'calc(50% - 10px)',
            color: cor,
        }
    
        css[direcao] = '20px';
    
        return css;
    }

    const cssInput = {
        width: '100%',
        backgroundColor: 'transparent',
        color: cor,
        border: `2px solid ${cor}`,
        padding: '20px 50px',
        borderRadius: '30px',
        outline: 'none',
    }

    const [
        nomeLivroPesquisado,
        setNomeLivroPesquisado
    ] = useState('');

    const [
        livros,
        setLivros
    ] = useState([]);

    const pesquisaLivro = e => {
        const pesquisado = e.target.value;

        setNomeLivroPesquisado(pesquisado);

        let listaLivros = pesquisado.trim() !== ''
            ? filtraLivros(pesquisado, 4)
            : []
        ;

        setLivros(listaLivros)
    }

    const aoSubmeter = e => {
        e.preventDefault();
    }

    return (
        <section>
            <PesquisaContainer>
                <h2>Já sabe por onde começar?</h2>
                <h3>Encontre seu livro em nossa estante.</h3>
                <form onSubmit={aoSubmeter}>
                    <BiSearchAlt style={criaCssIcon('left')} />
                    <input
                        style={cssInput}
                        onFocus={() => mudaCor('#FFF')}
                        onBlur={() => mudaCor('#BBB')}
                        value={nomeLivroPesquisado}
                        onChange={pesquisaLivro}
                        placeholder='Escreva sua próxima leitura'
                    />
                    <button type='submit'
                        style={criaCssIcon('right')}
                    >
                        <AiOutlineArrowRight />
                    </button>
                </form>
            </PesquisaContainer>
            <ResultadoContainer>
                {
                    livros.map((livro, index) => {
                        return <CardLivro 
                            key={index}
                            livro={livro}
                        />
                    })
                }
            </ResultadoContainer>
        </section>
    );
}

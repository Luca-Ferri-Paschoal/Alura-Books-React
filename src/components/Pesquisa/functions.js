import { livros as listaLivros } from './dadosPesquisa';

export const filtraLivros = ({ texto, breaker }) => {
    const arrayLivros = [];

    for (let i = 0;  i < listaLivros.length; i++) {
        if (i + 1 > breaker) {
            break;
        }

        if (
            listaLivros[i].nome.toLocaleLowerCase().includes(texto.toLocaleLowerCase())
        ) {
            arrayLivros.push(listaLivros[i]);
        }
    }

    return arrayLivros;
}

import livro from '../../imgs/livro.png';
import { v4 as uuidv4 } from 'uuid';

export const livros = [
    {
        nome: 'Liderança em Design',
        id: uuidv4(),
        src: livro,
        alt: 'Capa do livro',
    },
    {
        nome: 'Cangaceiro JavaScript',
        id: uuidv4(),
        src: livro,
        alt: 'Capa do livro',
    },
    {
        nome: 'Calopsita Python',
        id: uuidv4(),
        src: livro,
        alt: 'Capa do livro',
    },
];

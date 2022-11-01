import './Cabecalho.css';
import Logo from './../Logo';
import Menu from './../Menu';
import perfil from './../../imgs/perfil.svg';
import sacola from './../../imgs/sacola.svg';

export const Cabecalho = props => {
    const opcoesTexto = [
        'Categorias',
        'Favoritos',
        'Minha Estante',
    ];

    const opcoesIcones = [
        perfil,
        sacola
    ];

    return (
        <header className='cabecalho'>
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
        </header>
    );
};

import './Menu.css';

export const Menu = ({ itens, type='texto' }) => {
    return (
        <nav>
            <ul className='menu'>
                {itens.map((item, index) => 
                    <li key={index}>
                        {type === 'imagem'
                            ? <img src={item} alt='botao do menu'/> 
                            : <p>{item}</p>
                        }
                    </li>
                )}
            </ul>
        </nav>
    );
};

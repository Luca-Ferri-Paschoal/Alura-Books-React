import styled from 'styled-components';

const MenuContainer = styled.nav`
    ul {
        display: flex;
        gap: 20px;
    }

    ul li {
        cursor: pointer;
    }

    ul li p {
        text-transform: uppercase;
        font-weight: 500;
    }
`;

export const Menu = ({ itens, type='texto' }) => {
    return (
        <MenuContainer>
            <ul>
                {itens.map((item, index) => 
                    <li key={index}>
                        {type === 'imagem'
                            ? <img src={item} alt='botao do menu'/> 
                            : <p>{item}</p>
                        }
                    </li>
                )}
            </ul>
        </MenuContainer>
    );
};

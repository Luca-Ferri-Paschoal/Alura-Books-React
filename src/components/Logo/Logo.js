import logo from './../../imgs/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 30px;

    p {
        font-weight: 500;
    }
    
    strong {
        font-weight: 900;
    }
`;

export const Logo = props => {
    return (
        <LogoContainer>
            <img src={logo} alt='Logo do AluraBooks' />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    );
};

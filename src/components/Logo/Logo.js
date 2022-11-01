import './Logo.css';
import logo from './../../imgs/logo.svg';

export const Logo = props => {
    return (
        <div className='logo'>
            <img src={logo} alt='Logo do AluraBooks' />
            <p><strong>Alura</strong>Books</p>
        </div>
    );
};

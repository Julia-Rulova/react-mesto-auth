import logo from '../images/logo.svg';
import { Route, Link } from 'react-router-dom';

function Header({ email, onExit }) {
    return (
        <header className="header">
            <a href="#"><img className="header__logo" src={logo} alt="логотип." /></a>
            <div className="header__container">
                <Route exact path="/">
                    <p className='header__email'>{email}</p>
                    <Link to="/sign-in" className="header__exit" onClick={onExit}>Выйти</Link>
                </Route>
                <Route exact path="/sign-in">
                    <Link to="/sign-up" className="header__link">Регистрация</Link>
                </Route>
                <Route exact path="/sign-up">
                    <Link to="/sign-in" className="header__link">Войти</Link>
                </Route>
            </div>
        </header>
    )
}

export default Header;
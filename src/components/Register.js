import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import * as auth from '../auth.js';

function Register(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!email || !password) {
            return;
        }

        props.onSubmit(email, password);

        // auth.register(email, password)
        //     .then((data) => {
        //         setEmail('');
        //         setPassword('');
        //         props.handleLogin();
        //         props.history.push('/sign-in');
        //     })
        //     .catch(err => console.log(err));
    }

    return (
        <div className="authorization">
            <p className="authorization__entry">Регистрация</p>
            <form onSubmit={handleSubmit} className="authorization__form">
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="popup__text popup__text_type_authorization popup__text_type_email"
                    required
                    id="email-input"
                    value={email}
                    onChange={handleChangeEmail} />
                <span className="popup__text-error email-input-error"></span>
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    className="popup__text popup__text_type_authorization popup__text_type_password"
                    required
                    id="password-input"
                    value={password}
                    onChange={handleChangePassword} />
                <span className="popup__text-error password-input-error"></span>
                <button type="submit" onSubmit={handleSubmit} className="authorization__button">Зарегистрироваться</button>
                <Link className="authorization__text" to="/sign-in">Уже зарегистрированы? Войти</Link>
            </form>
        </div>
    )
}

export default withRouter(Register);
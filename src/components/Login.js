import React from 'react';
import { withRouter } from 'react-router-dom';
import * as auth from '../auth.js';

function Login(props) {
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
        props.onSubmit(email, password);

        // if (!email || !password) {
        //     return;
        // }

        // auth.authorize(email, password)
        //     .then((data) => {
        //         if (data.jwt) {
        //             setEmail('');
        //             setPassword('');
        //             props.handleLogin();
        //             props.history.push('/');
        //         }
        //     })
        //     .catch(err => console.log(err));
    }

    return (
        <div className="authorization">
            <p className="authorization__entry">Вход</p>
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
                <button type="submit" onSubmit={handleSubmit} className="authorization__button">Войти</button>
            </form>
        </div>
    )
}

export default withRouter(Login);
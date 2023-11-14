import React from "react";
import PageWithHeaderAndFooter from "../components/PageWithHeaderAndFooter";

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = this.state;
        // Отправка данных или другая логика регистрации
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    render() {
        const { username, email, password, confirmPassword } = this.state;

        return (
            <PageWithHeaderAndFooter content={this.renderRegistrationForm(username, email, password, confirmPassword)} />
        );
    }

    renderRegistrationForm(username, email, password, confirmPassword) {
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center h-100">
                <div className="container-sm bg-light p-4 border rounded">
                    <h1 className="text-center">Регистрация</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Имя пользователя:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                required
                                value={username}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Электронная почта:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                required
                                value={email}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Пароль:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                required
                                value={password}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Подтверждение пароля:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                required
                                value={confirmPassword}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegistrationPage;

import React from "react";
import PageWithHeaderAndFooter from "../components/PageWithHeaderAndFooter";

class RegistrationPage extends React.Component{
    render() {
        return (
            <PageWithHeaderAndFooter content={this.#registration()}/>
        );
    }

    #registration(){
        return(
            <div className="container-xxl container-xl container-md container-sm container-lg align-items-center">
                <h1 className="text-center">Регистрация</h1>
                <form className="d-flex flex-column h-50 justify-content-between" action={"http://localhost:8080/registration"}>
                    <div className="form-group">
                        <label htmlFor="email">Электронная почта:</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль:</label>
                        <input type="password" className="form-control" id="password" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Подтверждение пароля:</label>
                        <input type="password" className="form-control" id="confirmPassword" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
                </form>
            </div>
        );
    }
};

export default RegistrationPage;

import React from 'react';
import {Link} from 'react-router-dom';
import brandIcon from "../img/icon.png";
import avatarIcon from "../img/auth/icon.png";
import 'bootstrap';

class Navigation extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-expand-md bg-light
            border-bottom border-dark-subtle border-2 border-opacity-25
            ">
                <div className="container-fluid ps-2 pe-2 d-flex justify-content-between">
                    <Link className={"navbar-brand"} to={"/"}>
                        <img className="" style={{width: 50 + "px"}}
                             src={brandIcon} alt={"icon"}/>
                    </Link>
                    <button className="navbar-toggler bg-body-secondary"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav nav-pills align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link " to="/products">Продукты</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/warehouses">
                                    Склады
                                </Link>
                            </li>

                            <li className="nav-item dropdown d-flex justify-content-center flex-column align-items-center">
                                    <Link className="nav-link dropdown-toggle " data-bs-toggle="dropdown" to="#">
                                        <img className="rounded-pill" src={avatarIcon} style={{width: 50 + "px"}} alt={"avatar"}/>
                                    </Link>
                                {this.#authNav()}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );

    }

    #authNav(){
        if(!this.props.isAuthorized){
            return(
                <ul className="dropdown-menu dropdown-menu-end ">
                    <li className="dropdown-item">
                        <Link className="btn" to="/authorization"> Авторизоваться </Link>
                    </li>
                    <li className="dropdown-item">
                        <Link className="btn" to={"/registration"}>Зарегистрироваться</Link>
                    </li>
                </ul>
            );
        }
        return <></>
    }
};

export default Navigation;

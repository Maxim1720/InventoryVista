import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import brandIcon from "../img/icon.png";
import 'bootstrap';

class Navigation extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isAuthorized: false,
            activeLink: ''
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-expand-md bg-light
            border-bottom border-dark-subtle border-2 border-opacity-25
            ">
                <div className="container-fluid ps-2 pe-2 d-flex justify-content-between">
                    <Link className={"navbar-brand"}  to={"/"}>
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
                                <NavLink className="nav-link"

                                         style={({ isActive })=>{
                                             return this.navStyle(isActive)
                                         }}

                                         to="/products">Продукты</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link"
                                         style={({ isActive })=>{
                                             return this.navStyle(isActive)
                                         }}
                                         to="/warehouses">
                                    Склады
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                {this.#suppliers()}
                            </li>

                            <li className="nav-item">
                                {this.#supplies()}
                            </li>

                           {/* <li className="nav-item dropdown d-flex justify-content-center flex-column align-items-center">
                                    <Link className="nav-link dropdown-toggle " data-bs-toggle="dropdown" to="#">
                                        <img className="rounded-pill" src={avatarIcon} style={{width: 50 + "px"}} alt={"avatar"}/>
                                    </Link>
                                {this.#authNav()}
                            </li>*/}
                        </ul>
                    </div>
                </div>
            </nav>
        );

    }

    #authNav(){
        if(!this.state.isAuthorized){
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

    #suppliers(){
        return(
            <NavLink className="nav-link" to={"/suppliers"}
                     style={({ isActive })=>{
                         return this.navStyle(isActive)
                     }}
            >
                Поставщики
            </NavLink>
        );
    }

    #supplies = ()=>{
        return(
            <NavLink className="nav-link"
                  style={({ isActive })=>{
                      return this.navStyle(isActive)
                  }}
                  to={"/supplies"}>
                Поставки
            </NavLink>
        );
    }


    navStyle(isActive){
        return isActive? this.activeStyle(): this.simpleStyle()
    }
    activeStyle = ()=> {
        return {
            fontWeight: 'bold',
            backgroundColor: 'transparent'
        }
    }
    simpleStyle =()=>{
        return{
            fontWeight: 'normal',
            backgroundColor: 'transparent'
        }
    }
}

export default Navigation;

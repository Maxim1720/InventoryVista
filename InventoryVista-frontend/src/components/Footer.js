import React from "react";
import {Link} from "react-router-dom";
import developerImg from "../img/developer.jpg";
import 'bootstrap';

class Footer extends React.Component{
    render() {
        return(

            <>
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">О разработчике</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <div className="modal-body">
                                <div>
                                    <img className="w-100" src={developerImg}/>
                                    <h2>Вязков Александр Александрович</h2>
                                    <h3>ИВТ-11</h3>
                                    <h4>210225</h4>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Понятно</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bg-light  border-top border-2 border-dark-subtle">
                    <ul className="nav nav-fill">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/about" data-bs-toggle="modal" data-bs-target="#myModal">О разработчике</Link>
                        </li>
                    </ul>
                </div>

            </>

        );
    }
}

export default Footer;

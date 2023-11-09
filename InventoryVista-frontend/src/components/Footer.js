import React from "react";
import {Link} from "react-router-dom";

class Footer extends React.Component{
    render() {
        return(
            <div className="modal-footer bg-light  border-top border-2 border-dark-subtle">
                <ul className="nav nav-fill">
                    <li className="nav-item ">
                        <Link className={"nav-link"} to="/about">О нас</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Footer;

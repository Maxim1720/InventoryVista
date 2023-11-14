import React from 'react';
import PageWithHeaderAndFooter from "../components/PageWithHeaderAndFooter";
import {Image} from "react-bootstrap-icons";
import developerImg from '../img/developer.jpg';
class AboutPage extends React.Component {
    render() {
        return (
            <PageWithHeaderAndFooter content={this.#about()}/>
        );
    }

    #about() {
        return (
            <div
                className="d-flex flex-column justify-content-center align-items-center h-100 bg-secondary-subtle border">
                <div>
                    <h1>О разработчике</h1>
                    <img src={developerImg}/>
                    <h2>Вязков Александр Александрович</h2>
                    <h3>ИВТ-11</h3>
                    <h4>210225</h4>
                </div>
            </div>);
    }
};

export default AboutPage;

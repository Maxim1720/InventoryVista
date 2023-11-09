import React from 'react';
import PageWithHeaderAndFooter from "../components/PageWithHeaderAndFooter";

class AboutPage extends React.Component {
    render() {
        return (
            <PageWithHeaderAndFooter content={this.#about()}/>
        );
    }

    #about() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>О нас</h1>
                <p>Мы специализируемся на предоставлении информации о недвижимости и удобном поиске объектов.</p>
                <p>Свяжитесь с нами для получения дополнительной информации.</p>
            </div>);
    }
};

export default AboutPage;

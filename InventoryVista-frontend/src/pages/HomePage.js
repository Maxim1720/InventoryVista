import React from 'react';
import PageWithHeaderAndFooter from "../components/PageWithHeaderAndFooter";
import '../style/css/page.css';

class HomePage extends React.Component{


    render() {
        return (
            <PageWithHeaderAndFooter content={
                <div className="
                bg-body-secondary
                d-flex flex-column
                justify-content-center
                align-items-center
                h-100
                ">
                    <h1>Добро пожаловать на Главную страницу!</h1>
                    <p></p>
                </div>
            }/>
        );
    }
};

export default HomePage;

import React from "react";
import PageWithHeaderAndFooter from "../../components/PageWithHeaderAndFooter";
import 'bootstrap';
import AllProducts from "../../components/product/AllProducts";
import ProductCreator from "../../components/product/ProductCreator";

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: undefined
        }
    }

    changeTab = (event)=>{
        console.log("updating selected tab...");
        const id = event.target.id;
        this.setState(prevState=>({
            ...prevState,
            currentTab: id
        }),()=>{console.log(this.state.currentTab)});
    }
    render() {
            return (
                <PageWithHeaderAndFooter content={this.#productsNav()}/>
            );
    }

    #productsNav() {
        return (
            <div className="h-100 d-flex flex-column">
                <ul className="nav nav-tabs nav-fill">
                    <li className="nav-item">
                        <a className="nav-link active bg-primary-subtle"
                           data-bs-toggle="tab" href="#products" onClick={this.changeTab}
                           id="all">Все</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link bg-success-subtle"
                           data-bs-toggle="tab"
                           href="#create"
                           onClick={this.changeTab}
                           id="create-tab">Создать</a>
                    </li>
                </ul>

                <div className="tab-content h-100">
                    <div className="tab-pane active bg-primary-subtle h-100" id="products">
                        <AllProducts kek={this.state.currentTab}/>
                    </div>
                    <div className="tab-pane fade h-100 bg-success-subtle" id="create">
                        <ProductCreator kek={this.state.currentTab}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProductsPage;
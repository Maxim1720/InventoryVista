import React from "react";
import ProductForm from "./form/ProductForm";
import Saver from "../../logic/Saver";
import api from '../../env.json';
import Error from "../utils/Error";
import Notification from "../utils/Notification";

class ProductCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.productSaver = new Saver({
            url: api.api.baseUrl + "/products"
        });

    }

    createProduct = (data, e) => {
        console.log(`data for create: ${JSON.stringify(data)}`)
        e.preventDefault();
        this.productSaver
            .save(data)
            .then(resp => {
                console.log(JSON.stringify(resp));
                if(resp.code===200) {
                    console.log(`after saving response: ${JSON.stringify(resp)}`);
                    this.setState(prev => ({
                        ...prev,
                        productResp: {
                            ...resp.body
                        }
                    }), () => {
                        data.productId = this.state.productResp.id;
                        this.createStorageCondition(data);
                    });
                }
                else {
                    this.setState({
                        error: {
                            ...resp
                        }
                    });
                }
            })
            .catch(error => {
                console.log("after product data saving...");
                this.setState({error})
            });

    }

    createStorageCondition = (storageCondition) => {
        console.log(storageCondition);
        new Saver({
            url: api.api.baseUrl + `/products/${storageCondition.productId}/storage-condition`
        })
            .save(storageCondition)
            .then(data => {
                this.setState(prev => ({
                        ...prev,
                        storageConditionResp: {
                            ...data.body
                        }
                    }),
                    () => {
                        window.location.replace("/products");
                    });
            })
            .catch(error => this.setState({error}));
    }

    render() {
        return (
            <>
                {
                    this.state.error
                        ? <Error message={this.state.error.message}/>
                        : this.state.storageConditionResp
                            ? <Notification message={"Продукт успешно создан!"}/>
                            : <></>
                }
                <ProductForm
                    onSubmit={this.createProduct}
                />
            </>
        );
    }
}

export default ProductCreator;
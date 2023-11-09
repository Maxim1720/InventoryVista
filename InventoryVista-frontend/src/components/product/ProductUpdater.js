import React from "react";
import ProductForm from "./form/ProductForm";
import Error from "../utils/Error";
import {useParams} from "react-router-dom";
import Updater from "../../logic/Updater";
import api from "../../env.json";
import Getter from "../../logic/Getter";
import PageWithHeaderAndFooter from "../PageWithHeaderAndFooter";
import Loading from "../utils/Loading";

function ProductUpdaterWrapper() {
    const {id} = useParams();
    return(
        <ProductUpdater id={id}/>
    );
}

class ProductUpdater extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            formData: {
            },
            isLoaded: false
        };
    }

    componentDidMount() {
        const productId = this.props.id;
        let product, storageCondition;

        new Getter({
            url: api.api.baseUrl + `/products`
        })
            .getById(productId)
            .then(data => {
                product = {
                    ...data.body
                };
                new Getter({url: api.api.baseUrl + `/products/${productId}/storage-condition`})
                    .getAll()
                    .then(data => {
                        storageCondition = {
                            ...data.body
                        }
                        this.setState(prev=>({
                            ...prev.formData,
                            formData:{
                                ...product,
                                ...storageCondition
                            },
                            isLoaded: true
                        }));
                    })
                    .catch(error => this.setState({
                        error: error.message
                    }));
                return data;
            })
            .catch(error => this.setState({
                error: error.message
            }));
    }
    update = (data, e)=> {
        e.preventDefault();
        console.log(`data for update: ${JSON.stringify(data)}`);

        let product, storageCondition;


        new Updater({
            url: api.api.baseUrl + "/products"
        })
            .updateById({
                id: this.props.id,
                data: {
                    ...data
                }
            })
            .then(productJson => {
                product = productJson.body
            })
            .catch(error=>{
                this.setState({
                    error: error.message
                })
            });

        new Updater({
            url: api.api.baseUrl + `/products/${this.props.id}/storage-condition`
        })
            .update(data)
            .then(storageConditionJson => {
                    storageCondition = storageConditionJson.body

                    this.setState(prev => (
                            {
                                ...prev,
                                ...storageCondition,
                                ...product,
                            }
                        ), () => {
                            window.location.replace(`/products/${this.props.id}`);
                        }
                    );
                }
            )
            .catch(error=>{
                this.setState({
                    error: error.message
                })
            });

    }

    render() {

        if(!this.state.isLoaded){
            return <Loading/>
        }

        return(
            <>

                <PageWithHeaderAndFooter content={
                    <>
                        {
                            this.state.error
                                ? <Error message={this.state.error}/>
                                :<></>
                        }
                        <ProductForm
                            initFormData={this.state.formData}
                            // onInputChange={this.handleInputChange}
                            onSubmit={this.update}
                        />
                    </>
                }/>
            </>
        );
    }
}

export default ProductUpdaterWrapper;
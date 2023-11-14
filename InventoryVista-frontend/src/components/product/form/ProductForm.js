import React from "react";
import ProductDataForm from "./data/ProductDataForm";
import StorageConditionDataForm from "./data/StorageConditionDataForm";

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            formData: {}
        }
    }

    onSubmit = (event) => {
        this.props.onSubmit({
            ...this.state.formData
        }, event);
    }


    componentDidMount() {
        if (this.props.initFormData) {
            this.props.initFormData.expirationDate = this.props.initFormData.expirationDate.split('T')[0];
            delete this.props.initFormData.id;
            let form = window.document.getElementsByName('productForm')[0];
            for (const key in this.props.initFormData) {
                if (form[key] && key !== "id") {
                    form[key].value = this.props.initFormData[key];
                }
            }
            this.setState({
                loaded: true
            });
        }
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState((prevState) => ({
            ...prevState,
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }), () => {
            console.log(`form state: ${JSON.stringify(this.state)}`);
        });
    };


    render() {
        return (

            <div className="h-100 w-100
                 d-flex flex-column justify-content-center
                  align-items-center
                  ">
                <form
                    className="form-control
                    rounded p-3
                    d-flex justify-content-center
                    row
                    container-lg
                    container-md
                    container-xl"
                    action="#"
                    onSubmit={this.onSubmit}
                    name="productForm">
                    <ul className="
                        row
                        row-cols-lg-12
                        row-cols-sm-12
                        row-cols-xl-12
                        row-cols-md-12
                        container-fluid
                        m-0
                        list-unstyled
                        ">
                        <li className="col-sm-4
                                        col-lg-7
                                        col-md-7
                                        col-xl-7
                                        col-sm-12
                                        column-gap-1
                                        ">
                            <ProductDataForm formData={this.state.formData} onInputChange={this.handleInputChange}/>
                        </li>


                        <li className="col-sm-4
                                        col-lg-5
                                        col-md-5
                                        col-xl-5
                                        col-sm-12
                                        column-gap-1">
                            <StorageConditionDataForm formData={this.state.formData}
                                                      onInputChange={this.handleInputChange}/>
                        </li>
                    </ul>
                    <div className="row col-12 d-flex justify-content-center">
                        <input className="btn btn-success mt-2 col-2" type="submit" value={"Сохранить"}/>
                    </div>
                </form>
            </div>

        );
    }
}

export default ProductForm;
import React from "react";
import Error from "../../../utils/Error";


class ProductDataForm extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        }
    }

    /*componentDidUpdate(prevProps, prevState, snapshot) {
        if(!prevState.loaded && this.props.formData){
            const product = {
                ...this.props.formData
            };
            console.log(`product for form: ${JSON.stringify(product)}`);
            delete product.id;
            product.expirationDate = product.expirationDate.split('T')[0];
            let form = window.document.getElementsByName('productForm')[0];
            for (const productKey in product) {
                if(product[productKey]) {
                    if(form[productKey]) {
                        form[productKey].value = product[productKey];
                    }
                }
            }
            this.setState({
                loaded: true
            });
        }
    }*/

    render() {
        const {error} = this.state;
        return (
            <>
                <div className="d-flex col flex-column form-control h-100">
                    <label className="h3">Продукт</label>
                    <hr/>
                    <div className="d-flex p-2 row">
                        <div className="
                        col-sm-12
                        col-md-6
                         d-flex flex-column align-items-start ">
                            <div className="">
                                <div>
                                    <label className="form-label h4">Название</label>
                                    <input className="form-control" onChange={this.props.onInputChange}
                                           type="text"
                                           autoComplete={"false"}
                                           name={"name"}
                                    />
                                </div>
                                <div>
                                    <label className="form-label h4">Описание</label>
                                    <textarea className="form-control" style={{maxHeight: "20vh"}}
                                              onChange={this.props.onInputChange}
                                              name="description"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="form-label h4">Количество</label>
                                    <input className="form-control " type="number" min={0} onChange={this.props.onInputChange}
                                           name="quantity"/>
                                </div>
                            </div>

                        </div>
                        <div className="
                        col-sm-12
                        col-md-6
                        ">
                            <label className="form-label h4">
                                Дата окончания<br/> срока годности
                            </label>
                            <input className="form-control" type="date" onChange={this.props.onInputChange}
                                   name={"expirationDate"}/>
                        </div>
                    </div>
                    {
                        error
                            ? (
                                <div>
                                    <Error message={error}/>
                                </div>
                            )
                            :<></>
                    }
                </div>
            </>
        );
    }
}

export default ProductDataForm;
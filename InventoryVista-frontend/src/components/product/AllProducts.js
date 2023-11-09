import React from "react";
import ProductCard from "./ProductCard";
import apiConfig from "../../env.json";
import 'bootstrap';
import Getter from "../../logic/Getter";
import Loading from "../utils/Loading";
import Error from "../utils/Error";


class AllProducts extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            count: 0
        };
    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts = ()=>{
        const getter = new Getter({
            url: apiConfig.api.baseUrl+"/products"
        });
        getter.getAll()
            .then(data=>{
                this.setState({
                    isLoaded: true,
                    items: data.body,
                    count: data.body.length
                });
            })
            .catch(error=>{
                this.setState({
                    isLoaded: true,
                    error
                })
            })
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("products component updating...");

        if(prevState.isLoaded && !prevState.error) {
            console.log("fetching products count...")

            const getter = new Getter({
                url: apiConfig.api.baseUrl + "/products?count"
            });

            getter.getAll()
                .then(data=>{
                    if(Number(data.body) > Number(prevState.count)){
                        this.setState({
                                ...prevState,
                                count: data.body
                            }
                        );
                        this.fetchProducts();
                    }
                })
                .catch(error => {
                    this.setState({
                            ...prevState,
                            error
                        }
                    )
                })
        }
    }



    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return (
                <Error message={error.message}/>
            );
        } else if (!isLoaded) {
            return (
                    <Loading/>
            );

        }
        else if(items.length===0){
            return (
                <div className="d-flex justify-content-center align-items-center align-content-center h-100">
                    <h1>Пока что здесь ничего нет...</h1>
                </div>
            );
        }
        else {
            return (
                    <ul className="
                    row
                    row-cols-lg-8
                    row-cols-sm-2
                    row-cols-xl-12
                    row-cols-md-8
                    container-fluid
                    m-0
                    pt-3
                    pb-2
                    ">
                        {items
                            .map(item => (
                                    <li className="
                                    col-sm-4
                                    col-lg-4
                                    col-md-4
                                    col-xl-2
                                    column-gap-1
                                    card
                                    bg-body border border-1 border-dark-subtle
                                    " key={item.id}>
                                        <ProductCard item={item}/>
                                    </li>
                                )
                            )}
                    </ul>
            );
        }
    }
}

export default AllProducts;

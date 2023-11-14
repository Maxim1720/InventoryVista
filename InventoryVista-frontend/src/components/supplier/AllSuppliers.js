import React, {Component} from 'react';
import Getter from '../../logic/Getter'; // Замените на путь к вашему компоненту Getter
import Error from '../utils/Error'; // Замените на путь к вашему компоненту Error
import Loading from "../utils/Loading"; // Замените на путь к вашему компоненту Loading
import apiConfig from '../../env.json';
import SupplierCard from "./SupplierCard";

class AllSuppliers extends Component {
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
        this.fetchItems();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isLoaded && !prevState.error) {
            this.fetchCount();
        }
    }

    fetchItems = () => {
        const getter = new Getter({
            url: apiConfig.api.baseUrl + "/suppliers"
        });

        getter.getAll()
            .then(data => {
                if(data.code === 404){
                    throw new Error("Not Found :(");
                }
                this.setState({
                    isLoaded: true,
                    items: data.body,
                    count: data.body.length
                });
            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    };

    fetchCount = () => {
        const { prevState } = this;
        const getter = new Getter({
            url: apiConfig.api.baseUrl + "/suppliers?count"
        });

        getter.getAll()
            .then(data => {
                if (Number(data.body) > Number(this.state.count)) {
                    this.setState({
                        ...prevState,
                        count: data.body
                    });
                    this.fetchItems();
                }
            })
            .catch(error => {
                this.setState({
                    ...prevState,
                    error
                });
            });
    };

    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <Error message={error.message} />;
        } else if (!isLoaded) {
            return <Loading />;
        } else if (items.length === 0) {
            return (
                <div className="d-flex justify-content-center align-items-center align-content-center h-100">
                    <h1>Пока что здесь ничего нет...</h1>
                </div>
            );
        } else {
            return (
                <ul className="row container-fluid m-0 pt-3 pb-2">
                    {items.map(item => (
                        <li
                            className="col-sm-4 col-lg-4 col-md-4 col-xl-2 column-gap-1 card bg-body border border-1 border-dark-subtle"
                            key={item.id}
                        >
                            <SupplierCard item={item} />
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default AllSuppliers;
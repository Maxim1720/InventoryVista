import React from "react";
import apiConfig from '../../env.json';
import ItemFinder from "../../logic/Getter";
import Loading from "../utils/Loading";
import Error from "../utils/Error";
import Remover from "../../logic/Remover";
import {Link} from "react-router-dom";

class WareHouses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        }

        this.remover = new Remover({
            url: apiConfig.api.baseUrl + "/ware-houses"
        });
    }

    componentDidMount() {
        const finder = new ItemFinder({
            url: apiConfig.api.baseUrl + "/ware-houses"
        });

        finder.getAll()
            .then(data => {
                    this.setState(
                        prevState => ({
                            ...prevState,
                            isLoaded: true,
                            items: data.body
                        })
                    )
                }
            )
            .catch(error => {
                this.setState(prev => ({
                    ...prev,
                    isLoaded: true,
                    error
                }));
            });
    }

    onDelete = (i)=>{
        console.log("deleting...");
        this.remover.removeById(i)
            .then(
                data=>{
                    if(data.error){
                        this.setState(
                            prev=>({
                                ...prev,
                                error: data.error
                            })
                        );
                    }
                    else{
                        this.setState(prev=>({
                            ...prev,
                            items: prev.items.filter(value => value.id!==i)
                        }))
                    }
                }
            );
    }
    render() {

        const {isLoaded, items, error} = this.state;

        if (!isLoaded) {
            return <Loading/>
        } else if (error) {
            return <Error message={error.message}/>
        } else if(!items.length){
            return (
                <div className="h-100 h1 text-center d-flex flex-column justify-content-center">Складов пока что нет :(</div>
            );
        }

        return (
            <ul className="row w-100 pt-3 container-fluid m-0">
                {items.map(
                    i => (
                            <li className="card col-sm-12 col-md-6 col-lg-4 col-xl-3 border border-2 border-dark-subtle "
                                key={i.id}>
                                <h1 className="card-title text-center card-header">{i.name}</h1>
                                <h2 className="card-text text-center">{i.location}</h2>
                                <div className="card-body  row">
                                    <Link className="btn btn-primary col-6" to={i.id+"/update"}>
                                        Редактировать
                                    </Link>
                                    <Link className="btn btn-danger col-6"  to="" onClick={() => this.onDelete(i.id)}>
                                        Удалить
                                    </Link>
                                </div>
                            </li>
                    )
                )}
            </ul>
        );
    }
}
export default WareHouses;

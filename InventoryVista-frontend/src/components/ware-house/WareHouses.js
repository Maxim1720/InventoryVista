import React from "react";
import apiConfig from '../../env.json';
import ItemFinder from "../../logic/Getter";
import Loading from "../utils/Loading";
import Error from "../utils/Error";
import Remover from "../../logic/Remover";

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
    onEdit = (event)=>{
        console.log("editing...");
    }
    render() {

        const {isLoaded, items, error} = this.state;

        if (!isLoaded) {
            return <Loading/>
        } else if (error) {
            return <Error message={error.message}/>
        }

        return (
            <ul className="row w-100 pt-3 container-fluid m-0">
                {items.map(
                    i => (
                            <li className="card col-sm-12 col-md-6 col-lg-4 col-xl-3 border border-2 border-dark-subtle "
                                key={i.id}>
                                <h1 className="card-title text-center">{i.name}</h1>
                                <h2 className="card-text">{i.location}</h2>
                                <div className="card-body  row">
                                    <button className="btn btn-primary col-6" onClick={() => {
                                        this.onEdit(i.id)
                                    }}>Редактировать
                                    </button>
                                    <button className="btn btn-danger col-6" onClick={() => this.onDelete(i.id)}>Удалить
                                    </button>
                                </div>
                            </li>
                    )
                )}
            </ul>
        );
    }
}
export default WareHouses;

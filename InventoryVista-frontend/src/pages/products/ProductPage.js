import React from "react";
import PageWithHeaderAndFooter from "../../components/PageWithHeaderAndFooter";
import {useParams} from "react-router-dom";
import Getter from "../../logic/Getter";
import api from '../../env.json';
import Error from "../../components/utils/Error";
import Remover from "../../logic/Remover";

const ProductPageWrapper = () => {
    const {id} = useParams();
    return <ProductPage id={id}/>
}
class ProductPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data:{},
        }
    }

    componentDidMount() {

        new Getter({
            url: api.api.baseUrl+"/products"
        }).getById(this.props.id)
            .then(data=> {
                this.setState(prev => ({
                    ...prev,
                    data: {
                        ...data.body
                    }
                }))
            })
            .catch(error=>this.setState({error}));


        new Getter({
            url: api.api.baseUrl+`/products/${this.props.id}/storage-condition`
        })
            .getAll()
            .then(data=>{
                if(data.code !== 200){
                    this.setState(
                        prev=>(
                            {
                                ...prev,
                                isLoaded: true,
                                error: data.message

                            }
                        )
                    );
                }
                else {
                    this.setState(
                        prev => ({
                            ...prev,
                            isLoaded: true,
                            storageCondition: {
                                ...data.body
                            }
                        }), () => console.log(JSON.stringify(this.state))
                    );
                }
            });
    }

    #storageConditionData = (storageCondition)=>{
        return(
            <div>
                <p className="fw-bold fst-italic">Хранить при температуре {storageCondition.temperature}°C,
                    влажности {storageCondition.humidity}% и освещении {storageCondition.lighting} люкс</p>
            </div>
        );
    }

    #storageConditionError = () =>{
        return(
           /* <div className="alert alert-danger">
                {this.state.storageCondition.error}
            </div>*/
            <Error message={this.state.error}/>
        );
    }

    onRemove = (e)=>{
        console.log("removing clicked!");
        new Remover({url: api.api.baseUrl+`/products`})
            .removeById(this.state.data.id)
            .then(resp=>{
                if(resp.ok){
                    console.log("removed...");
                    window.location.replace("/products");
                }
                else{
                    console.log(resp);
                    this.setState({
                            error: resp.message
                        }
                    )
                }

            })
    }
    onUpdate = (e) =>{
        window.location.replace(window.location.href+'/update');
    }

    onClickHistory = (e) =>{
        window.location.replace(window.location.href+'/history');
    }
    render() {

        const {isLoaded, data, storageCondition} = this.state;

        if (!isLoaded) {
            return (
                <PageWithHeaderAndFooter content={
                    <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                        <div className="spinner-border text-success"></div>
                    </div>
                }/>
            );
        }

        return (
            <PageWithHeaderAndFooter content={
                <div className="">
                    <h1 className="text-center">{data.name}</h1>
                    <div>
                        <p className="text-wrap text-break">
                            Описание: {data.description}
                        </p>
                        <p>Количество: {data.quantity}</p>
                        <p className="">Дата истечения срока годности: {" "}
                            <span
                                className={"fw-bold " + ((new Date(Date.parse(data.expirationDate) - new Date().getTime()).getDate()) > 7 ? "" : "text-danger")}>
                                {new Date(data.expirationDate.split('T')[0]).toLocaleDateString()}
                            </span>
                        </p>
                    </div>
                    {
                        !this.state.error
                        ? this.#storageConditionData(storageCondition)
                        : this.#storageConditionError()
                    }
                    <hr/>
                    <div className="d-flex flex-row-reverse justify-content-between form-control">
                        <button className="btn btn-danger" onClick={(e) => {
                            console.log("removing...");
                            this.onRemove(e);
                        }}>Удалить</button>
                        <button className="btn btn-info" onClick={this.onClickHistory}>История</button>
                        <button className="btn btn-primary" onClick={this.onUpdate}>Редактировать</button>
                    </div>
                </div>
            }/>
        );
    }


}

export default ProductPageWrapper;
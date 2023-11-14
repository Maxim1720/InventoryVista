import React from "react";
import Getter from "../../logic/Getter";
import Loading from "../utils/Loading";
import Error from "../utils/Error";
import api from '../../env.json';
import {useParams} from "react-router-dom";
import PageWithHeaderAndFooter from "../PageWithHeaderAndFooter";

function ExpirationHistoryWrapper() {
    const {id} = useParams();
    return <PageWithHeaderAndFooter content={<ExpirationHistory id={id}/>}/>

}

class ExpirationHistory extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        }
        this.getter = new Getter({
            url: api.api.baseUrl+`/products/${this.props.id}/history`
        });
    }

    componentDidMount() {
        this.getter.getAll()
            .then(resp=>{
                if(resp.code === 200){
                    console.log(`resp body: ${JSON.stringify(resp.body)}`);
                    this.setState(p=>({
                        ...p,
                        items:[
                            ...resp.body
                        ],
                        isLoaded: true
                    }))
                }
                else{
                    this.setState({
                        error: resp.message
                    });
                }
            })
            .catch(error=>{
                this.setState({
                    error:error.message
                })
            });

    }



    render() {

        const {isLoaded, error, items} = this.state;

        console.log(`items: ${JSON.stringify(items)}`);

        if(!isLoaded){
            return <Loading />
        }
        else if(error){
            return <Error message={error.message}/>
        }

        return(
            <div className=" h-100 container p-3 d-flex flex-column justify-content-center align-items-center align-content-center">
                <h1 className="text-center">История изменений</h1>
                <table className="table table-bordered table-primary">
                    <thead className="table-header">
                    <tr className="table-header">
                        <th>Старая дата</th>
                        <th>Новая дата</th>
                        <th>Дата изменения</th>
                    </tr>
                    </thead>
                    <tbody >
                    {
                        items.map(i=> (
                                <tr>
                                    <td>{i.oldDate}</td>
                                    <td>{i.newDate}</td>
                                    <td>{new Date(i.createdAt).toLocaleString()}</td>
                                </tr>
                            )
                        )
                    }
                    {/*<tr>
                        <td>01.01.2021</td>
                        <td>05.05.2021</td>
                        <td>03.04.2021</td>
                    </tr>
                    <tr>
                        <td>01.01.2021</td>
                        <td>05.05.2021</td>
                        <td>03.04.2021</td>
                    </tr>*/}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ExpirationHistoryWrapper;
// AllSupplies.js
import React from 'react';
import Error from "../utils/Error";
import Loading from "../utils/Loading";
import SupplyCard from "./SupplyCard";
import Getter from "../../logic/Getter";
import api from '../../env.json';

class AllSupplies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    const getter = new Getter({
      url: api.api.baseUrl+"/supplies"
    }).getAll()
        .then(json=>{
          if(json.code !== 200){
            throw new Error(json.message);
          }

          this.setState({
            isLoaded: true,
            items: json.body
          })

        })
        .catch(error=>{
          this.setState({
            error
          });
        });
  }

  render(){
    if(this.state.error){
      return <Error message={this.state.error.message}/>
    }
    else if(!this.state.isLoaded){
      return <Loading/>
    }
    else if(!this.state.items.length){
        return (
            <div className="h-100 text-center d-flex flex-column justify-content-center h1">
                Здесь пока что ничего нет :(
            </div>
        );
    }

    return (
        <ul className="row h-100 list-group p-2">
          {
            this.state.items.map(i=>(
                <li className="list-inline-item" key={i.id}>
                  <SupplyCard supplyData={i}
                  />
                </li>
            ))
          }
        </ul>
    );
  }
}

export default AllSupplies;

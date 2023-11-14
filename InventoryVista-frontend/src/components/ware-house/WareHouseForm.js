import React from "react";
import Error from "../utils/Error";


class WareHouseForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            formData:{
                name: '',
                location: ''
            }
        }
    }


    componentDidMount() {
        if(this.props.initFormData){
            console.log("form initialized!");
            this.setState(
                {
                    formData:{
                        ...this.props.initFormData
                    }
                }
            )
        }
    }


    onChangeInput = (e)=>{
        this.setState(
            prev=>({
              ...prev,
                formData:{
                  ...prev.formData,
                    [e.target.name] : e.target.value
                }
            })
        );
    }

    onSubmit = (e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.formData);
    }

    render() {
        /*if(error){
            return (
                <Error message={error.message}/>
            );
        }*/

        return (
            <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Имя склада:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="ware-house-name"
                        required={true}
                        value={this.state.formData.name}
                        name={"name"}
                        onChange={this.onChangeInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                        Location:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        required={true}
                        value={this.state.formData.location}
                        name={"location"}
                        onChange={this.onChangeInput}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        {this.props.initFormData?"Обновить":"Создать"}
                    </button>
                </div>
            </form>
        );

    }

}
export default WareHouseForm;
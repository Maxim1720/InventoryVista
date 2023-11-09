import React from "react";
import {InfoCircle} from "react-bootstrap-icons";

class StorageConditionDataForm extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className=" d-flex col flex-column align-items-end">
                <div className="form-control">
                    <label className="form-label h3" form="storage-condition-form-inner">Условия хранения</label>
                    <hr/>
                    <div className="d-flex flex-column" id={"storage-condition-form-inner"}>
                        <div>
                            <label className="form-label h4" htmlFor={"temperature"}>Температура<sup>°C</sup></label>
                            <input className="form-control"
                                   type={"number"}
                                   autoComplete={"false"}
                                   id={"temperature"}
                                   name="temperature"
                                   onChange={this.props.onInputChange}/>
                        </div>
                        <div>
                            <label className="form-label h4" htmlFor={"humanity"}>
                                Влажность
                                <sup data-bs-toggle="tooltip" title="Укажите влажность без знака %">
                                    <InfoCircle size={15}/>
                                </sup>
                            </label>
                            <input className="form-control" id={"humanity"}
                                   name={"humidity"}
                                   type={"number"} min={0} max={100}
                                   onChange={this.props.onInputChange}/>
                        </div>
                        <div>
                            <label className="form-label h4" htmlFor="lighting">
                                Освещение
                                <sup data-bs-toggle="tooltip" title="Укажите значение в люксах">
                                    <InfoCircle size={15}/>
                                </sup>
                            </label>
                            <input className="form-control" type={"number"} min={0}
                                   id="lighting"
                                   name="lighting"
                                   onChange={this.props.onInputChange}/>
                        </div>
                        <div>
                            <label className="form-label h4" htmlFor={"otherDetails"}>
                                Примечания
                            </label>
                            <textarea className="form-control" style={{maxHeight: "20vh"}}
                                      name="otherDetails"
                                      id={"otherDetails"}
                                      onChange={this.props.onInputChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StorageConditionDataForm;
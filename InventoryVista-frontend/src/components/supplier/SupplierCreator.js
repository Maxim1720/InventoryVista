import React from "react";
import Saver from '../../logic/Saver';  // Замените на путь к вашему компоненту Saver
import Error from '../utils/Error';  // Замените на путь к вашему компоненту Error
import Notification from '../utils/Notification';  // Замените на путь к вашему компоненту Notification
// import SupplierForm from 'путь_к_вашему_компоненту_supplier_form';  // Замените на путь к вашему компоненту SupplierForm
import api from '../../env.json';
import SupplierForm from "./SupplierForm";
class SupplierCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.supplierSaver = new Saver({
      url: api.api.baseUrl + "/suppliers"
    });
  }

  createSupplier = (data, e) => {
    e.preventDefault();
    this.supplierSaver
      .save(data)
      .then(resp => {
        if (resp.code === 200) {
          this.setState(
            (prev) => ({
              ...prev,
              supplierResp: { ...resp.body }
            }),
            () => {
              data.supplierId = this.state.supplierResp.id;
            }
          );
        } else {
          this.setState({
            error: { ...resp }
          });
        }
      })
      .catch((error) => {
        this.setState({ error });
      });
  };


  render() {
    return (
      <>
        {
            this.state.error ?
                (<Error message={this.state.error.message} />)
                : this.state.storageConditionResp ?
                    (<Notification message={"Поставщик успешно создан!"} />)
                    : (<></>)
        }
        <div className="h-100">
            <SupplierForm onSubmit={this.createSupplier} />
        </div>
      </>
    );
  }
}

export default SupplierCreator;

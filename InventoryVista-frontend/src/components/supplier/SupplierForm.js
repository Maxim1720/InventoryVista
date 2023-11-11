import React from "react";

class SupplierForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      formData: {
        // Добавьте все необходимые поля для поставщика здесь
        name: "",
        address: "",
        contacts: "",
        // ...
      }
    };
  }

  onSubmit = (event) => {
    this.props.onSubmit(
      {
        ...this.state.formData
      },
      event
    );
  };

  componentDidMount() {
    if (this.props.initFormData) {

      let form = window.document.getElementsByName("supplierForm")[0];
      for (const key in this.props.initFormData) {
        if (form[key] && key !== "id") {
          form[key].value = this.props.initFormData[key];
        }
      }
      this.setState({
        isLoaded: true
      });
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(
      (prevState) => ({
        ...prevState,
        formData: {
          ...prevState.formData,
          [name]: value
        }
      }),
      () => {
        console.log(`form state: ${JSON.stringify(this.state)}`);
      }
    );
  };

  render() {
    return (
      <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
        <form
          className="form-control rounded p-3 d-flex justify-content-center row container-lg container-md container-xl"
          action="#"
          onSubmit={this.onSubmit}
          name="supplierForm"
        >
          <ul className="container-fluid m-0 list-unstyled">
              {/* Ввод данных о поставщике */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Название поставщика
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={this.state.formData.name}
                  onChange={this.handleInputChange}
                />
              </div>
              {/*<div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Адрес
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={this.state.formData.address}
                  onChange={this.handleInputChange}
                />
              </div>*/}
              <div className="mb-3">
                <label htmlFor="contacts" className="form-label">
                  Контакты
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contacts"
                  name="contacts"
                  value={this.state.formData.contacts}
                  onChange={this.handleInputChange}
                />
              </div>
          </ul>
          <div className="row col-12 d-flex justify-content-center">
            <input className="btn btn-success mt-2 col-2" type="submit" value={"Сохранить"} />
          </div>
        </form>
      </div>
    );
  }
}

export default SupplierForm;

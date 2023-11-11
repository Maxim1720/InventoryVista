import React from "react";
import SupplierForm from "./SupplierForm"; // Подставьте путь к вашему компоненту SupplierForm
import Error from "../utils/Error";
import { useParams } from "react-router-dom";
import Updater from "../../logic/Updater";
import api from "../../env.json";
import Getter from "../../logic/Getter";
import PageWithHeaderAndFooter from "../PageWithHeaderAndFooter";
import Loading from "../utils/Loading";

function SupplierUpdaterWrapper() {
  const { id } = useParams();
  return <SupplierUpdater id={id} />;
}

class SupplierUpdater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      formData: {},
      isLoaded: false
    };
  }

  componentDidMount() {
    const supplierId = this.props.id;
    let supplier;

    new Getter({
      url: api.api.baseUrl + `/suppliers`
    })
      .getById(supplierId)
      .then((data) => {
          console.log({data});
          if(data.code !== 200) {
              throw Error(data.message);
          }
          console.log("lol");
        this.setState((prev) => ({
          ...prev.formData,
          formData: {
            ...data.body
          },
          isLoaded: true
        }));
        return data;
      })
      .catch((error) => {
          console.log({error});
          this.setState({ error: error.message })
      });
  }

  update = (data, e) => {
    e.preventDefault();
    console.log(`data for update: ${JSON.stringify(data)}`);

    let supplier;

    new Updater({
      url: api.api.baseUrl + "/suppliers"
    })
      .updateById({
        id: this.props.id,
        data: {
          ...data
        }
      })
      .then((supplierJson) => {
        supplier = supplierJson.body;
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
      });

    this.setState(
      (prev) => ({
        ...prev,
        ...supplier
      }),
      () => {
        window.location.replace(`/suppliers`);
      }
    );
  };

  render() {
    if (!this.state.isLoaded) {
      return <Loading />;
    }

    return (
      <>
        <PageWithHeaderAndFooter
          content={
            <>
              {this.state.error ? (
                <Error message={this.state.error} />
              ) : (
                <></>
              )}
              <SupplierForm
                initFormData={this.state.formData}
                onSubmit={this.update}
              />
            </>
          }
        />
      </>
    );
  }
}

export default SupplierUpdaterWrapper;

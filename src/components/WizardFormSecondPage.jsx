import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import * as render from "./renderField";
import * as api from "../api"

class WizardFormSecondPage extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = { provinces: {}, localities: {} };
  }

  componentWillMount() {
    this._isMounted = true;
    if (this._isMounted) {
      api.getProvinces().then(provinces => {
        this.setState({ provinces: provinces })
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  showLocalities = e => {
    let id = e.target.value
    if (this._isMounted) {
      api.getLocalities(id).then(localities => {
        this.setState({ localities: localities.cities })
      })
    }
  }

  render() {
    const { handleSubmit, previousPage } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="content-items">
          <Field className="inputData__size-bg" name="street" type="text" component={render.renderField} label="Calle" />
          <Field className="inputData__size-sm" name="number" type="text" component={render.renderField} label="Número" />
        </div>
        <div className="content-items">
          <div>
            <label>Provincia</label>
            <Field name="province" className="inputData__size-md" provinces={this.state.provinces} component={render.renderProvSelector} onChange={this.showLocalities} />
          </div>
          <div>
            <label>Localidad</label>
            <Field  name="locality" className="inputData__size-md" localities={this.state.localities} component={render.renderLocalSelector} />
          </div>
        </div>
        <div className="content-items">
          <button type="button" className="previous" onClick={previousPage}>
            Atrás
        </button>
          <button type="submit" className="next">
            Siguiente
        </button>
        </div>
      </form>
    );
  }
};

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
  api
})(WizardFormSecondPage);

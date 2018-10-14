import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import * as render from './renderField';


const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        type="text"
        component={render.renderField}
        placeholder="Ej.: Juan Carlos..."
        label="Nombre completo"
        className="inputData"
      />
      <Field
        name="cuit"
        type="text"
        component={render.renderField}
        placeholder="Ej.: 23-45678901-2"
        label="Nº de CUIT"
        className="inputData"
      />
      <div className="content-items">
        <button type="submit" className="next">Siguiente</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);

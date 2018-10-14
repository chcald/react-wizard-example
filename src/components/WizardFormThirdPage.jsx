import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import * as render from "./renderField";

const showHide = (e) => {
  let input = document.getElementsByName('pass')[0]
  let type = input.type === 'text' ? 'password' : 'text'
  input.setAttribute('type', type);

}
const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field className="inputData" name="email" type="text" component={render.renderField} label="E-mail" />
      <Field className="inputData" name="pass" type="password" component={render.renderField} label="Contraseña" />
      <div>
        <label htmlFor="showPass">Mostrar contraseña</label>
        <div>
          <Field
            onChange={showHide}
            name="showPass"
            id="showPass"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div className="content-items">
        <button type="button" className="previous" onClick={previousPage}>
          Atrás
        </button>
        <button className="next" type="submit" disabled={pristine || submitting}>Finalizar</button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
  showHide
})(WizardFormThirdPage);

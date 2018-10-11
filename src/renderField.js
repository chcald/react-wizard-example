import React from 'react';
import './renderField.scss'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label><p className="title-name">{label}</p></label>
    <div>
      <input className="inputData" {...input} placeholder={label} type={type} />
      <br/>
      {touched && error && <span className="text-error">{error}</span>}
    </div>
  </div>
);

export default renderField;

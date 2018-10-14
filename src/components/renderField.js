import React from 'react';
import './renderField.scss'

export const renderField = ({ className, input, label, placeholder, type, meta: { touched, error } }) => (
  <div className="content-form">
    <label><p className="title-name">{label}</p></label>
    <div>
      <input className={className} {...input} placeholder={placeholder} type={type} />
      <br />
      {touched && error && <span className="text-error">{error}</span>}
    </div>
  </div>
);

export const renderProvSelector = ({ provinces, input, meta: { touched, error } }) => (
  <div>
    <select className="inputData__size-md" {...input} >
      <option value="">Seleccionar...</option>
      {Object.keys(provinces).map(item => <option value={provinces[item].id} key={provinces[item].id}>{provinces[item].name}</option>)}
    </select>
    <br />
    {touched && error && <span className="text-error">{error}</span>}
  </div>
);

export const renderLocalSelector = ({ localities, input, meta: { touched, error } }) => (
  <div>
    <select className="inputData__size-md" {...input}>
      <option value="">Seleccionar...</option>
      {Object.keys(localities).map(item => <option value={localities[item].id} key={localities[item].id}>{localities[item].name}</option>)}
    </select>
    <br />
    {touched && error && <span className="text-error">{error}</span>}
  </div>
);


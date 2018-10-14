const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Debe ingresar su nombre';
  } else if (values.name.trim().split(' ').length === 1) {
    errors.name = 'Debe ingresar al menos dos palabras';
  }
  if (!values.cuit) {
    errors.cuit = 'Debe ingresar su CUIT';
  } else {
    let value = values.cuit.replace(/[^0-9]/g,'');
    if (value.length >= 3 && value.length <= 10) {
      values.cuit = value.replace(/^(\d{2})(\d{1,8}).*/, '$1-$2');
    } else {
      values.cuit = value.replace(/^(\d{2})(\d{8})(\d{1}).*/, '$1-$2-$3');
    }
    if (!/^[0-9]+-[0-9]+-[0-9]{1}$/.test(values.cuit)) {
      errors.cuit = 'El cuit debe tener 11 digitos'
    }
  }
  if (!values.number) {
    errors.number = 'Debe ingresar un número';
  } else if (!/[0-9]/.test(values.number)) {
    errors.number = 'Debe ingresar solo números';
  }
  if (!values.pass) {
    errors.pass = 'Debe ingresar una contraseña';
  } else if (!/^[A-Z0-9]{8,}$/i.test(values.pass)) {
    errors.pass = 'La contraseña debe tener al menos 8 o más caracteres';
  } else if (!/(?=.*?[0-9])/.test(values.pass)) {
    errors.pass = 'La contraseña debe tener al menos un numero';
  }
  if (!values.email) {
    errors.email = 'Debe ingresar un email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'email inválido';
  }
  if (!values.street) {
    errors.street = 'Debe ingresar una calle';
  }
  if (!values.province) {
    errors.province = 'Debe elegir una provincia';
  }
  if (!values.locality) {
    errors.locality = 'Debe elegir una localidad';
  }
  return errors;
};

export default validate;

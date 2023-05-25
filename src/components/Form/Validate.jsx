
export default function validate(inputs) {
  
  const regexEmail = /\S+@\S+\.\S+/;
  const regexPass = new RegExp("[0-9]");
  const errors = {};

  if (!regexEmail.test(inputs.email)) {
    errors.email = 'Must be an email';
  }
  if(!inputs.email) {
    errors.email = "The email is obligatory";
  }
  if(!inputs.email.length > 35) {
    errors.email = "Maximum of 35 characters";
  }
  if (!regexPass.test(inputs.password)) {
    errors.password = 'Enter a password';
  }
  if(inputs.password.length < 6 || inputs.password.length > 10){
    errors.password = "Must be between 6 and 10 characters";
  }

  return errors;
  }
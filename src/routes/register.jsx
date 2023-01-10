import React from "react";

// Components
import Form from "../components/Form";

const Register = () => { // Use Form component with edit false, it means the user is adding a new duck
  return <Form title={"Registra un pato"} button={"Crear pato"} edit={false} />;
};

export default Register;

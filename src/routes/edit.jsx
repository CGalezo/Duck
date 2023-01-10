import React from "react";

// Components
import Form from "../components/Form";

const Edit = () => { // Use Form component with edit true, it means the user is editing
  return <Form title={"Editar pato"} button={"Editar"} edit={true} />;
};

export default Edit;

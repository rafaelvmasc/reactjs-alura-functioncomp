import React from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Typography, Container } from "@material-ui/core";
import '@fontsource/roboto/400.css';


function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align='center' component="h1" mt={10} marginBottom={5}> Formulario de cadastro</Typography>
      <FormularioCadastro />
    </Container>
  );
}

export default App;

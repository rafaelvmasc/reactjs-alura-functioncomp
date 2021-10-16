import React from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Typography, Container } from "@material-ui/core";
import "@fontsource/roboto/400.css";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography
        variant="h3"
        align="center"
        component="h1"
        mt={10}
        marginBottom={5}
      >
        {" "}
        Formulario de cadastro
      </Typography>
      <FormularioCadastro onSubmit={sendForm} validacaoCPF={validarCPF} />
    </Container>
  );
}

function sendForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { validor: false, texto: "CPF deve ter 11 digitos." };
  }else{
    return {valido: true, texto: ""}
  }
}

export default App;

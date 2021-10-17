import React from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Typography, Container } from "@material-ui/core";
import "@fontsource/roboto/400.css";
import { validarCPF, validarSenha, validarNome } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

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
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCPF, senha: validarSenha, nome: validarNome }}
      >
        <FormularioCadastro onSubmit={sendForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function sendForm(dados) {
  console.log(dados);
}

export default App;

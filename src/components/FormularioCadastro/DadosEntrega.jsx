import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

function DadosEntrega({ onSubmit }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ cep, endereco, cidade, numero, estado });
      }}
    >
      <TextField
        value={cep}
        onChange={(e) => {
          setCep(e.target.value);
        }}
        id="cep"
        label="CEP"
        variant="outlined"
        margin="normal"
        type="number"
      />
      <TextField
        value={endereco}
        onChange={(e) => {
          setEndereco(e.target.value);
        }}
        id="endereco"
        label="Endereco"
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={cidade}
        onChange={(e) => {
          setCidade(e.target.value);
        }}
        id="cidade"
        label="Cidade"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={numero}
        onChange={(e) => {
          setNumero(e.target.value);
        }}
        id="numero"
        label="Numero"
        variant="outlined"
        margin="normal"
        type="number"
      />
      <TextField
        value={estado}
        onChange={(e) => {
          setEstado(e.target.value);
        }}
        id="estado"
        label="Estado"
        variant="outlined"
        margin="normal"
      />
      <Button fullWidth type="submit" variant="contained" color="primary">
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;

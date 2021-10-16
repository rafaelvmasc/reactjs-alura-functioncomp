import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  return (
    <form
      action=""
      className="Formulario"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(nome);
      }}
    >
      <TextField
        value={nome}
        onChange={(e) => {
          let tmpNome = e.target.value;
          if (tmpNome.length >= 3) {
           tmpNome = tmpNome.substr(0, 3);
          }
          setNome(tmpNome);
        }}
        fullWidth
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={sobrenome}
        onChange={(e) => {
          setSobrenome(e.target.value);
        }}
        fullWidth
        id="sobrenome"
        label="Sobrenome"
        margin="normal"
      />

      <TextField fullWidth id="cpf" label="CPF" margin="normal" />

      <FormControlLabel
        control={<Switch name="promocoes" color="primary" defaultChecked />}
        label="Promocoes"
      />
      <FormControlLabel
        control={<Switch name="novidades" color="primary" defaultChecked />}
        label="Novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;

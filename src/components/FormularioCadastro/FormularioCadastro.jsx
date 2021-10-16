import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({ onSubmit, validacaoCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({
    cpf: { valido: true, texto: "" },
  });

  return (
    <form
      action=""
      className="Formulario"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
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

      <TextField
        value={cpf}
        onChange={(e) => {
          setCpf(e.target.value);
        }}
        onBlur={(e) => {
          const ehValido = validacaoCPF(cpf)
          setErros({
            cpf: ehValido,
          });
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        fullWidth
        id="cpf"
        label="CPF"
        margin="normal"
      />

      <FormControlLabel
        onChange={(e) => {
          setPromocoes(e.target.checked);
        }}
        value={promocoes}
        control={<Switch value={promocoes} name="promocoes" color="primary" />}
        label="Promocoes"
      />
      <FormControlLabel
        onChange={(e) => {
          setNovidades(e.target.checked);
        }}
        control={
          <Switch checked={novidades} name="novidades" color="primary" />
        }
        label="Novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;

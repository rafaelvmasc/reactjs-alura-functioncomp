import React, { useState, useContext } from "react";
import { Switch, FormControlLabel, TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ onSubmit }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      action=""
      className="Formulario"
      onSubmit={(e) => {
        e.preventDefault();
        if (possoEnviar()) {
          onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
        onBlur={validarCampos}
        name="nome"
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
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
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        fullWidth
        name="cpf"
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

      <Button type="submit" variant="contained" color="primary" disabled={cpf.length < 11 ? true : false}>
        Proximo
      </Button>
    </form>
  );
}

export default DadosPessoais;

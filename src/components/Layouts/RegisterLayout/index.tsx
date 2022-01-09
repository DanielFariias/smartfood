import { TextField } from '@material-ui/core';
import { FormEvent, useState } from 'react';
import Button from '../../Button';

import * as C from './styles';

interface Props {
  handleTypeForm: (newType: string) => void
}

const RegisterLayout: React.FC<Props> = ({ handleTypeForm }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const sendForm = (e: FormEvent) => {
    e.preventDefault()
  }
  // chamada do contexto
  // função de troca de step
  // função de criação de nov usuario

  return (
    <C.Container>
      <h1>Crie uma conta para <br />
        o seu estabelecimento...
      </h1>
      <C.Card>
        <form onSubmit={sendForm}>
          <div>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              label="Senha"
              variant="outlined"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <TextField
              label="Confirmar senha"
              variant="outlined"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button onClick={() => console.log("aaaaaaaaaaaa")}>
            Entrar
          </Button>
        </form>

        <p>
          Já tem cadastro?&nbsp;
          <button onClick={() => handleTypeForm("login")}>
            Faça Login
          </button>.
        </p>
      </C.Card>
    </C.Container>
  )
}

export default RegisterLayout;
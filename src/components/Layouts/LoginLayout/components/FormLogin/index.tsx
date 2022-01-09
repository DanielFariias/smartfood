import { TextField } from '@material-ui/core';
import { FormEvent, useState } from 'react';
import Button from '../../../../Button';

import * as C from './styles';

interface Props {
  handleTypeForm: (newType: string) => void
}

const FormLogin: React.FC<Props> = ({ handleTypeForm }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const sendForm = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <C.Container>
      <h1>Entre no seu estabelecimento</h1>
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
          </div>
          <Button onClick={() => console.log("aaaaaaaaaaaa")}>
            Entrar
          </Button>
        </form>

        <button onClick={() => handleTypeForm("Register")}>
          Cadastrar-se
        </button>
      </C.Card>
    </C.Container>
  )
}

export default FormLogin;
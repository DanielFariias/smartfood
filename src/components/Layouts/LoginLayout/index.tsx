

import { useState } from 'react';
import RegisterLayout from '../RegisterLayout';
import FormLogin from './components/FormLogin';
import * as C from './styles';

const LoginLayout: React.FC = () => {
  const [typeLogin, setTypeLogin] = useState('login')

  return (
    <C.Container>

      {
        typeLogin === "login"
          ? <FormLogin handleTypeForm={setTypeLogin} />
          : <RegisterLayout handleTypeForm={setTypeLogin} />
      }

    </C.Container>
  )
}

export default LoginLayout;
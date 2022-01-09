import { HomeLayoutContextActions, useHomeLayout } from '../../../context/HomeLayoutContext';
import { landingIllustration } from '../../Assets';
import * as C from './styles';

export const HomeLayout: React.FC = () => {
  const { dispatch } = useHomeLayout();

  const handleLoginLayout = () => {
    dispatch({
      type: HomeLayoutContextActions.LoginLayout,
      payload: "LoginLayout",
    })
  }

  return (
    <C.Container>
      <div>
        <h1>Suas vendas decolando de forma inteligente</h1>
        <p>Seus clientes a um clique do seu negocio</p>
        <hr />
        <button onClick={handleLoginLayout}>Começar</button>
      </div>
      {landingIllustration()}
    </C.Container>

  )
}
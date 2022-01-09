import { HomeLayoutContextActions, useHomeLayout } from '../../../context/HomeLayoutContext';
import { deliveryManLayout } from '../../Assets';
import * as C from './styles';

export const DeliveryManLayout: React.FC = () => {
  const { dispatch } = useHomeLayout();

  const handleLoginLayout = () => {
    // dispatch({
    //   type: HomeLayoutContextActions.LoginLayout,
    //   payload: "LoginLayout",
    // })
  }

  return (
    <C.Container>
      <div>
        <h1>Seja entregador do .Nome</h1>
        <p>As melhores taxas do mercado</p>
        <hr />
        <button onClick={handleLoginLayout}>Começar</button>
      </div>
      {deliveryManLayout()}
    </C.Container>

  )
}
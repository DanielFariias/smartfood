import {
  HomeLayoutContextActions,
  useHomeLayout
} from '../../context/HomeLayoutContext';

import { logoImg } from '../Assets';
import * as C from './styles';

export const Header: React.FC = () => {
  const { state, dispatch } = useHomeLayout()

  const handleDeliveryManLayoutLayout = () => {
    dispatch({
      type: HomeLayoutContextActions.DeliveryManLayout,
      payload: "LoginLayout",
    })
  }

  const handleLoginLayout = () => {
    dispatch({
      type: HomeLayoutContextActions.LoginLayout,
      payload: "LoginLayout",
    })
  }

  const handleHomeLayout = () => {
    dispatch({
      type: HomeLayoutContextActions.HomeLayout,
      payload: "LoginLayout",
    })
  }

  return (
    <C.Container>
      <div>
        <span onClick={handleHomeLayout}>
          {logoImg()}
        </span>
        <button onClick={handleDeliveryManLayoutLayout}>
          {state === "DeliveryManLayout" ? (
            <>
              Entregador
              <hr />
            </>
          ) : "Entregador"}
        </button>

      </div>
      <button onClick={handleLoginLayout}>

        {state === "LoginLayout" ? (
          <>
            Meu negócio
            <hr />
          </>
        ) : "Meu negócio"}</button>
    </C.Container>
  )
}

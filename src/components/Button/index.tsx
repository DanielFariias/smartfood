import * as C from './styles';

interface Props {
  onClick?: () => void
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <C.Container onClick={onClick}>
      {children}
    </C.Container>
  )
}

export default Button;
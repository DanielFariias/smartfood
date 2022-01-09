import { facebookIcon, instagramIcon, logoImg } from '../Assets';
import * as C from './styles';

export const Footer: React.FC = () => {
  return (
    <C.Container>
      {logoImg(33, 120)}

      <div className="social-media">
        <p>Social</p>
        <div>
          <button>
            {facebookIcon()}
          </button>
          <button>
            {instagramIcon()}
          </button>
        </div>
      </div>
    </C.Container>
  )
}

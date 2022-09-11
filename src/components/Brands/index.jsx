import './style.scss';

import logoBitmap  from '../../assets/Bitmap.png'
import logoAsobanca  from '../../assets/asobanca.png'
import logoIpbf  from '../../assets/ipbf.jpg'
import logoHt  from '../../assets/ht.png'
import logoEbanx  from '../../assets/ebanx.png'
import logoZendesk  from '../../assets/zendesk.jpg'

const Brands = () => {
  return (
    <span className='brands'>
        <img className="img-fluid" src={logoBitmap} alt="alternative"/>
        <img className="img-fluid" src={logoAsobanca} alt="alternative"/>
        <img className="img-fluid" src={logoIpbf} alt="alternative"/>
        <img className="img-fluid" src={logoHt} alt="alternative"/>
        <img className="img-fluid" src={logoEbanx} alt="alternative"/>
        <img className="img-fluid" src={logoZendesk} alt="alternative"/>
    </span>
  )
}

export default Brands
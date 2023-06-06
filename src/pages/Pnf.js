import Notfound from '../assets/noutfound.svg';
import { useTitle } from '../hook/useTitle';
import {useNavigate} from 'react-router-dom';

export const Pnf = ({title}) => {
  const navigate = useNavigate();
  useTitle(title);
  
  const handleCLick = () => {
    navigate('/')
    return null;
  }
  return (
    <div className='pnf'>
        <p>Woof, Page Not Found!</p>
        <img src={Notfound} alt="page-not-found-woof" />
        <button onClick={handleCLick}>Back To Home</button>
    </div>
  )
}

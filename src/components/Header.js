 import {NavLink, Link} from 'react-router-dom';
 import Logo from '../assets/homelogo.png';
 export const Header = () => {
  return (
    <header className='container'>
        <div className="brand-container">
         <Link to='/'><img src={Logo} alt="hompage-logo" /></Link>
         <Link to='/'><span>Adopt Me</span></Link>
        </div>

        <nav className="nav">
          <p ><NavLink to='/' end>Home</NavLink></p>
          <p><NavLink to='/cart'>Cart</NavLink></p>
        </nav>

        <div className="cart-count">
           <NavLink to='/cart'><p>Cart '{2}'</p></NavLink>
        </div>
    </header>
  )
}

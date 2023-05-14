import { useState } from "react";
import { Link, Links } from "../common/links/links";
import { Logo } from "../common/logo/logo";
import { Social } from "../common/social/social";


function Header() {

  const [MenuState, setMenuState] = useState(false)
  const HandleMenuToggle = () => { setMenuState(!MenuState) }

  return (
    <header className="header">

      <div className='header__wrapper'>
        <Logo></Logo>
        <button className="header__burger" onClick={HandleMenuToggle}>
          <span></span>
        </button>
        <div className={`header__menu ${MenuState ? 'header__menu-active' : ''}`}>
          <Links></Links>
          <Social></Social>
          <Link></Link>
        </div>
      </div>

    </header>
  );
}




export default Header;

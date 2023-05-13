import { Link, Links } from "../common/links/links";
import { Logo } from "../common/logo/logo";
import { Social } from "../common/social/social";


function Header() {


  return (
    <header className="header">

        <div className='header__wrapper'>
          <Logo></Logo>
          <div className="header__menu">
            <Links></Links>
            <Social></Social>
            <Link></Link>
          </div>
        </div>

    </header>
  );
}




export default Header;

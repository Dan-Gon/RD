import {Link} from "react-router-dom";
import './Header.css';

const Header = () => {
  return(
      <div className={"header-container"}>
        <nav className={"nav-links"}>
          <h1>RecoveryDiscovery</h1>
          <Link className={"links"} to="/">Home</Link>
          <Link className={"links"} to="/about">About</Link>
          <Link className={"links"} to="/people">People</Link>
          <Link className={"links"} to="/blog">Blog</Link>
        </nav>
      </div>
  )
}
export default Header;
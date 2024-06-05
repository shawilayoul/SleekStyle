import "./header.scss";
import { Link } from "react-router-dom";
import { FaUser,FaShoppingCart ,FaSearch} from "react-icons/fa";
const Header = () => {
  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <header>
      <nav>
        <div className="logo">
          <h2> <Link to="/" className="link">SleekStyle </Link> </h2>
        </div>
        <ul>
          {menu.map(({ name, link }) => (
            <li>
              <Link to={link} className="link">{name}</Link>
            </li>
          ))}
        </ul>
        <div className="right">
          <div className="search"><FaSearch /></div>
          <div className="user"><FaUser/></div>
          <div className="cart"><FaShoppingCart /></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

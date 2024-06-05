import './header.scss'

const Header = () => {
  const menu = ["Home", "About", "Shop", "Blog", "Contact"];
  return (
    <header>
      <nav>
        <div className="logo">
          <h2> SleekStyle</h2>
        </div>
        <ul>
          {menu.map((item) => (
            <li>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

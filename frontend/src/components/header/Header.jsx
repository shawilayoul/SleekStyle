import "./header.scss";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductContext";
const Header = () => {
  const [cartModel, setCartModel] = useState(false);
  const { productsInCart,getTotalCost } = useContext(ProductsContext);

  const menu = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Shop",
      link: "/shop",
    },

    {
      id: 3,
      name: "Blog",
      link: "/blog",
    },
    { id: 4, name: "About", link: "/about" },
    { id: 5, name: "Contact", link: "/contact" },
  ];
  return (
    <header>
      <nav>
        <div className="logo">
          <h2>
            {" "}
            <Link to="/" className="link">
              SleekStyle{" "}
            </Link>{" "}
          </h2>
        </div>

        <ul>
          {menu.map(({ id, name, link }) => (
            <li key={id}>
              <Link to={link} className="link">
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="right">
          <div className="search">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="search.........." />
          </div>
          <div className="user">
            <FaUser />
          </div>
          <div className="cart">
            <div className="cart-item">
              <p>2</p>
            </div>
            <FaShoppingCart onClick={() => setCartModel(!cartModel)} />
            {cartModel && (
              <div className="cartModel">
                <div className="items">
                  {productsInCart.map(
                    ({ id, name, price, image, qauntity }) => {
                      return (
                        <>
                          {" "}
                          {qauntity > 0 ? (
                            <div className="item" key={id}>
                              <img src={image} alt="" />
                              <h4>{name}</h4>
                              <p>$ {price}</p>
                              <p>qauntity {qauntity}</p>
                              <button>+</button>
                              <button>-</button>
                            </div>
                          ) : (
                            <p>the cart is Empty add items to it</p>
                          )}
                        </>
                      );
                    }
                  )}
                </div>
                <p>Total:{getTotalCost()}</p>
                <button>Buy Now</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

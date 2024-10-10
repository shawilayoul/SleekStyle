import "./header.scss";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductContext";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const Header = () => {
  const [cartModel, setCartModel] = useState(false);
  const [checkOutModel, setCheckoutModel] = useState(false);
  const navigate = useNavigate();
  const {
    productsInCart,
    getTotalCost,
    deleteFromCart,
    addOneToCart,
    removerOneFromCart,
  } = useContext(ProductsContext);

  // get the total qauntity
  const totatlQauntity = productsInCart.reduce(
    (sum, acc) => sum + acc.qauntity,
    0
  );
  // make the ayment method
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: "Jenny Rosen",
        email: "shawil@gmail.com",
        phone: "07 8237 11 77",
      },
    });

    if (error) {
      console.log(error);
    } else {
      console.log(paymentMethod);
      // Send the paymentMethod.id to your backend for processing
      const response = await axios.post(
        "http://localhost:8000/create-checkout/",
        {
          amount: getTotalCost() * 1000,
          paymentMethodId: paymentMethod.id,
        }
      );
      if (response.data.success) {
        console.log("payement success");
        navigate("/checkout-success");
      }
    }
  };

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
            <FaUser className="icons" onClick={() => navigate("/signup")} />
          </div>
          <div className="cart">
            <div onClick={() => setCartModel(!cartModel)}>
              <div className="cart-item">
                <p>{totatlQauntity}</p>
              </div>
              <FaShoppingCart className="icons" />
            </div>
            {cartModel && (
              <div className="cartModel">
                {totatlQauntity > 0 ? (
                  <div className="items">
                    {productsInCart.map(
                      ({ id, name, price, image, qauntity }) => {
                        return (
                          <div className="item" key={id}>
                            <div className="item1 ">
                              <img src={image} alt="" />
                              <h4>{name}</h4>
                              <p>${price}</p>
                            </div>
                            <div className="item2">
                              <button onClick={() => addOneToCart(id)}>
                                +
                              </button>
                              <p>{qauntity}</p>
                              <button onClick={() => removerOneFromCart(id)}>
                                -
                              </button>
                              <MdDelete
                                className="btnDelete"
                                onClick={() => deleteFromCart(id)}
                              />
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                ) : (
                  <p style={{ color: "red" }}>
                    There is No items in the cart,add some
                  </p>
                )}

                <p className="total">Total:{getTotalCost()}</p>
                <button
                  onClick={() =>
                    setCheckoutModel(!checkOutModel) || setCartModel(!cartModel)
                  }
                >
                  CheckOut
                </button>
              </div>
            )}
            {checkOutModel && (
              <form onSubmit={handleSubmit} className="ChackoutForm">
                <p>E-mail</p>
                <input type="text" placeholder="Enter your Email" />
                <p>Cart Informations</p>
                <CardElement />
                <p>Conutry or region</p>
                <select name="" id="">
                  <option value="">United States</option>
                </select>
                <div>
                  <input type="text" placeholder="Postal code" />
                </div>
                <button
                  className="btCancell"
                  onClick={() => setCheckoutModel(!checkOutModel)}
                >
                  Cancell
                </button>
                <button type="submit">Pay Now</button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;

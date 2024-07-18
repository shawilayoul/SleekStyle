import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductContext";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
//import { loadStripe } from "@stripe/stripe-js";

/*const stripePromise = loadStripe(
  "pk_test_51PcwcKHJQxQ42hCcM0rwQ4qHQ08ilzH3sQU1olBUcjBTLz5kGajoMBXprfGHP98L6PS6kmvyAK1Rb7WuOplqjQwN00gjJSQP1S"
);*/
const Header = () => {
  const [cartModel, setCartModel] = useState(false);
  const navigate = useNavigate() 
  const {
    productsInCart,
    getTotalCost,
    deleteFromCart,
    addOneToCart,
    removerOneFromCart,
  } = useContext(ProductsContext);
  console.log(getTotalCost())
   // get the total qauntity
   const totatlQauntity = productsInCart.reduce(
    (sum, acc) => sum + acc.qauntity,
    0
  );
  // making stripe payment using checkout method
  /* const handelCheckout = async () => {
     const response = await axios
      .post("http://localhost:3000/create-checkout-session", {
        productsInCart,
      })
        if (response.data.url) {
          window.location.href = response.data?.url;
        } else{
          console.log("errror ")
        }
     
     
  };*/
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
      const response = await axios.post("http://localhost:3000/charge", {
        amount: getTotalCost(),
        paymentMethodId: paymentMethod.id,
      });
      if (response.data.success) {
        console.log("payement success");
        navigate('/checkout-success')
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
            <FaUser className="icons" />
          </div>
          <div className="cart">
            <div className="cart-item">
              <p>{totatlQauntity}</p>
            </div>
            <FaShoppingCart
              onClick={() => setCartModel(!cartModel)}
              className="icons"
            />
            {cartModel && (
              <div className="cartModel">
                {totatlQauntity > 0 ? (
                  <div className="items">
                    {productsInCart.map(
                      ({ id, name, price, image, qauntity }) => {
                        return (
                          <div className="item" key={id}>
                            <img src={image} alt="" />
                            <h4>{name}</h4>
                            <p>$ {price}</p>
                            <p>qauntity {qauntity}</p>
                            <button onClick={() => addOneToCart(id)}>+</button>
                            <button onClick={() => removerOneFromCart(id)}>
                              -
                            </button>
                            <button
                              className="btnDelete"
                              onClick={() => deleteFromCart(id)}
                            >
                              Delete
                            </button>
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
                <form onSubmit={handleSubmit}>
                  <CardElement/>
                  <button type="submit">checkout</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;

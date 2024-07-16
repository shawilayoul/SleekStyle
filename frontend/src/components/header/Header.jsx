import "./header.scss";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductContext";
//import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
//import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js";
const Header = () => {
  const [cartModel, setCartModel] = useState(false);
  const {
    productsInCart,
    getTotalCost,
    deleteFromCart,
    addOneToCart,
    removerOneFromCart,
  } = useContext(ProductsContext);
  // make the ayment method

  // components/CheckoutForm.js
/*
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { data: clientSecret } = await axios.post('http://localhost:5000/create-payment-intent', {
        amount: 2000// Amount in cents, e.g. $20
      });

      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: 'John Doe',
          },
        },
      });

      if (error) {
        setError(`Payment failed: ${error.message}`);
      } else if (paymentIntent.status === 'succeeded') {
        setSuccess(true);
      }
    } catch (error) {
      setError(`Payment failed: ${error.message}`);
    }
  };
*/
  const makepayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PcwcKHJQxQ42hCcM0rwQ4qHQ08ilzH3sQU1olBUcjBTLz5kGajoMBXprfGHP98L6PS6kmvyAK1Rb7WuOplqjQwN00gjJSQP1S"
    );
    const body = {
      products: productsInCart,
    };
    const headers = {
      "Content-Type": "application/json"
    };
    const response = await fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId:session.id
    })
    if(result.error){
      console.log(result.error)
    }
  };
  // get the total qauntity
  const totatlQauntity = productsInCart.reduce(
    (sum, acc) => sum + acc.qauntity,
    0
  );

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
                <button onClick={()=>makepayment()}>Buy Now</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import "./footer.scss";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaTwitter,
  FaCcMastercard,
  FaCcVisa,
  FaCcPaypal,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="left">
          <h3>About us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Commodi repellat facere molestiae ab facilis sunt id. <br /> Non
            eligendi, fugit harum sint, iure molestias, cumque <br />
            laboriosam eius deleniti assumenda odit perspiciatis.
          </p>
          <div className="social-icons">
            <FaFacebook className="facebook" />
            <FaInstagramSquare className="insta" />
            <FaTwitter className="twitter" />
            <FaYoutube className="youtube" />
          </div>
        </div>
        <div className="middle">
          <h3>News letter</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
            Nostrum ullam perferendis fuga dolorem eveniet expedita voluptatibus
            qui
          </p>
          <div className="new-input">
            <input
              type="text"
              placeholder="Enter your E-mail and get 10$ catch"
            />
            <button>Subscribes</button>
          </div>
          <div className="vias-icon">
            <FaCcMastercard />
            <FaCcVisa />
            <FaCcPaypal />
          </div>
        </div>
        <div className="right">
          <h3>Informations</h3>
          <p>Delivery information</p>
          <p>contact us</p>
        </div>
      </div>

      <div className="footer-bottom p-3">
        <div>
          <p>@2024copyRight</p>
        </div>
        <div>
          <p>General condition of sale</p>
        </div>
        <div>
          <p>Privacy Policy</p>
        </div>
        <div>
          <p>Terms and conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

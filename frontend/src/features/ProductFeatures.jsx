import { FaShippingFast } from "react-icons/fa";
import { MdSecurity, MdBookOnline } from "react-icons/md";
import { BsShieldFillCheck } from "react-icons/bs";
import "./prodcutFeatures.scss"
const ProductFeatures = () => {
  return (
    <section className="features">
    <div className="features-item">
      <FaShippingFast className="icon icon-red" />
      <p>Free Shipping</p>
    </div>
    <div className="features-item">
      <MdSecurity className="icon" />
      <p>Secure Checkout</p>
    </div>
    <div className="features-item">
      <MdBookOnline className="icon icon-red" />
      <p>Online checkout</p>
    </div>
    <div className="features-item">
      <BsShieldFillCheck className="icon" />
      <p>GREAT QUALITY</p>
    </div>
  </section>
  )
}

export default ProductFeatures
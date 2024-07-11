import images from "../../assets";
import "./contact.scss";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaClock } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactImg">
        <img src={images.bolg1} alt="" />
        <h2>Contact us</h2>
      </div>

      <div className="cotactSection">
        <div className="left"> 
          <h3>Get in touch</h3>
          <p>
            We are also active in social media. <br />
            You can find us on below adresses..
          </p>
          <div className="items">
            <FaLocationDot  className="icons"/>
            <p>
              HS B26, Horton Ford Rd, <br />
              Eidson, TN, 37731
            </p>
          </div>
          <div  className="items">
            <FaPhone className="icons"/>
            <p>Call us</p>
            <p>+33 7 82 37 11 77</p>
          </div>
          <div  className="items">
            <MdEmail className="icons" />
            <p>E-mailus</p>
            <p>aocholayoul9@gmail.com</p>
          </div>
          <div  className="items">
            <FaClock className="icons"/>
            <p>
              Opening Hour8:00 AM – 10:00 PM <br />
              Monday Sunday
            </p>
          </div>
        </div>
        <div className="right">
          <h3>Send a Message</h3>
          <form>
            <p>Do you have anything in your mind to tell us?</p>
            <p>
              Please don’t hesitate to get in touch to us via our contact form.
            </p>
            <div>
              <div>Name</div>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <div>E-mail</div>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <div>Message</div>
              <textarea
                placeholder="Entyer your message"
              ></textarea>
            </div>
            <button>send message</button>
          </form>
        </div>
      </div>
      <div className="googleMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
          width="1440"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

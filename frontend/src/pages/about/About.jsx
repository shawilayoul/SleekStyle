import images from "../../assets";
import ProductFeatures from "../../features/ProductFeatures";
import "./about.scss"
const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutTop">
        <div className="aboutImg">
        <img src={images.bolg3} alt="" />
        </div>
        <h2>About Us</h2>
      </div>
      <div className="aboutBottom">
      <div>
          <h3>About SleekStyle Shop</h3>
          <p>
            Departure defective arranging rapturous did believe him all had <br />
            supported. Family months lasted simple set nature vulgar him. <br />
            Picture for attempt joy excited ten carried manners talking how. <br />
            Suspicion neglected he resolving agreement perceived at an.
          </p>
        </div>
        <div>
          <h3>Our Mission</h3>
          <p>
            He moonlights difficult-engrossed, sportsmen. Interested has all <br />
            Devonshire difficulty gay assistance joy. Unaffected at ye of <br />
            compliment alteration to. Place voice no arises along to. Arrivedbr <br />
            off she elderly beloved him affixed noisier yet. Course regard to up
            he hardly.
          </p>
        </div>
        <div>
          <h3>Our Vision</h3>
          <p>
            To occasional dissimilar impossible sentiments. Do fortune account <br />
            written prepare invited no passage.Skills that you can learn from <br />
            business Reliable sources to learn about WordPress Never <br />
            underestimate the influence of social media
          </p>
        </div>
      </div>
      <ProductFeatures />
    </div>
  );
};

export default About;

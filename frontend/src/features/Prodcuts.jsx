import { homeProductData } from "../constant/data";
import "./products.scss";

const Products = () => {
  return (
    <section className="products">
      <div className="items">
        {homeProductData.map(({ id, name, price, image }) => {
          return (
            <div className="item" key={id}>
              <img src={image} alt="" />
              <h4>{name}</h4>
              <p>$ {price}</p>
              <button>Add to cart</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;

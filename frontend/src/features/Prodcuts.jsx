import { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import "./products.scss";

const Products = () => {
  const { filterProducts, setFilterValue ,addOneToCart} = useContext(ProductsContext);
  const handelChange = (e) => {
    const targetEl = e.target;
     if(targetEl){
      targetEl.classList.toggle("isActive")
      setFilterValue(targetEl.value);
     }
  };
  return (
    <section className="products">
      <div className="filter">
        <button value="all" onClick={(e) => handelChange(e)}>
          All
        </button>
        <button value="men" onClick={(e) => handelChange(e)}>
          Men
        </button>
        <button value="women" onClick={(e) => handelChange(e)}>
          Women
        </button>
        <button value="kids" onClick={(e) => handelChange(e)}>
          Kids
        </button>
      </div>
      <div className="items">
        {filterProducts.map(({ id, name, price, image }) => {
          return (
            <div className="item" key={id}>
              <img src={image} alt="" />
              <h4>{name}</h4>
              <p>$ {price}</p>
              <button onClick={()=>addOneToCart(id,name,price,image)}>Add to cart</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;

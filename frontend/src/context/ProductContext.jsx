import { createContext, useState } from "react";
import { homeProductData, NewProduct } from "../constant/data";
import toast from "react-hot-toast";
export const ProductsContext = createContext({
  items: [],
  getQauntity: () => {},
  addOneToCart: () => {},
  removerOneFromCart: () => {},
  deleteFromCart: () => {},
  updateCart: () => {},
  getTotalCost: () => {},
});

// eslint-disable-next-line react/prop-types
const ProductContextProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [filterNewProductValue, setFilterNewProductValue] = useState("");
  //filtering products by gender
  const filterProducts = filterValue
    ? homeProductData.filter(
        (product) =>
          product.gender === filterValue || product.all === filterValue
      )
    : homeProductData;
  //filtering  new products by gender
  const filterNewProducts = filterNewProductValue
    ? NewProduct.filter(
        (product) =>
          product.gender === filterNewProductValue ||
          product.all === filterNewProductValue
      )
    : NewProduct;
  // get qauntity
  const getQauntity = (id) => {
    const qauntity = productsInCart.find(
      (product) => product.id === id
    )?.qauntity;
    if (qauntity === undefined) {
      return 0;
    }
    return qauntity;
  };
  // add product to cart
  const addOneToCart = (id, name, price, image) => {
    const qauntity = getQauntity(id);
    if (qauntity === 0) {
      // the is not in the cart
      setProductsInCart([
        ...productsInCart,
        {
          id,
          qauntity: 1,
          name,
          price,
          image,
        },
      ]);
    } else {
      //product is in the cart
      setProductsInCart(
        productsInCart.map((product) =>
          product.id === id
            ? {
                ...product,
                qauntity: product.qauntity + 1,
              }
            : product
        )
      );
    }
    toast.success("Product has been added Successfully to the cart");
  };

  //get total price
  const getTotalCost = () => {
    let total = 0;
  const cost = productsInCart.reduce(
      (sum, acc) => sum + acc.price * acc.qauntity,
      0
    );
    total += cost;
    return total;
  };

  const contextValue = {
    items: productsInCart,
    filterProducts,
    setFilterValue,
    filterNewProducts,
    setFilterNewProductValue,
    addOneToCart,
    productsInCart,
    getTotalCost,
  };
  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;

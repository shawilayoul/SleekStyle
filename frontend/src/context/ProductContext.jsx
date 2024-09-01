import { createContext, useEffect, useState } from "react";
import { homeProductData, NewProduct } from "../constant/data";
import toast from "react-hot-toast";
import axios from "axios";
export const ProductsContext = createContext({
  items: [],
  getQauntity: () => {},
  addOneToCart: () => {},
  removerOneFromCart: () => {},
  deleteFromCart: () => {},
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
          product.gender === filterValue ||
          product.all === filterValue ||
          product.price === filterValue
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

  // get product from the local storage
  useEffect(() => {
    const saveProducts = JSON.parse(localStorage.getItem("products"));
    if (saveProducts) {
      setProductsInCart(saveProducts);
    }
  }, []);
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
    saveToLocalStorage();
    toast.success("Product has been added Successfully to the cart");
  };
  // delete one from cart
  const removerOneFromCart = (id) => {
    const qauntity = getQauntity(id);
    if (qauntity === 1) {
      deleteFromCart(id);
    } else {
      setProductsInCart(
        productsInCart.map((product) =>
          product.id === id
            ? {
                ...product,
                qauntity: product.qauntity - 1,
              }
            : product
        )
      );
    }
  };
  // delete from cart
  const deleteFromCart = (id) => {
    setProductsInCart(productsInCart.filter((product) => product.id !== id));
    toast.success("the item has been deleted from the cart successfully");
    saveToLocalStorage();
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
  // save to local storage
  const saveToLocalStorage = () => {
    localStorage.setItem("products", JSON.stringify(productsInCart));
  };

  //admin dasboard functionalities

  const [productName, setProductName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [showUpdateModel, setShowUpdateModel] = useState(false);
  
  const updateProduct = async (_id) => {
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);
    try {
      await axios.put(`http://localhost:8000/uploads/${_id}`, formData);

      toast.success("Product has been updated successfully");
    } catch (error) {
      console.error("Error updating Product", error);
    }
    setProductName(""), setImage(null);
    setDescription("");
    setPrice("");
    setShowUpdateModel(!showUpdateModel);
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
    deleteFromCart,
    removerOneFromCart,
    updateProduct,
    setProductName,
    setDescription,
    setPrice,
    setImage,
    description,
    price,
    productName,
    image
  };
  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;

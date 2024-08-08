import { PopularProductData } from "../constant/data";
import CreateProductForm from "./components/CreateProductForm";
import { useState } from "react";
const Products = () => {
  const [shoowModel, setShowModel] = useState(false);
  return (
    <div className="p-2 relative">
      <div className="top mb-3">
        <div>
          <input
            type="text"
            placeholder="Search products"
            className="border-2 p-1 w-full mb-5"
          />
        </div>
        <div className="flex justify-between">
          <h2 className="font-semibold">Products</h2>
          <button className="bg-blue-700 px-2 py-1 text-white rounded-md" onClick={()=>setShowModel(!shoowModel)}>
            Create Product
          </button>
 
        </div>
      </div>
      <div className="bottom">
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-5">
          {PopularProductData.map(({ id, image, name, price, sold }) => (
            <div
              key={id}
              className="shadow-md flex flex-col items-center gap-1 border-2 p-2"
            >
              <img
                src={image}
                alt="productImg"
                className="w-32 bg-gray-400 rounded-md"
              />
              <p className="font-semibold">{name}</p>
              <p>{price}$</p>
              <p>Stocks {sold}</p>
            </div>
          ))}
        </ul>
      </div>
               {/**product model */}
               <div className="absolute z-10 top-24 left-[30%]">{ shoowModel && <CreateProductForm />}</div>
    </div>
  );
};

export default Products;

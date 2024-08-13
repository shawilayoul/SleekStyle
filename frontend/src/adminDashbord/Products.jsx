import axios from "axios";
import toast from "react-hot-toast";
import CreateProductForm from "./components/CreateProductForm";
import { MdDelete, MdEdit } from "react-icons/md";
import { useEffect, useState } from "react";
const Products = () => {
  const [shoowModel, setShowModel] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        const data = await response.data;
        setData(data);
      } catch (error) {
        console.error("Error Creating Product", error);
      }
    };
    getAllProduct();
  }, []);

  //deleting a product

  const handelDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:8000/api/products/${_id}`);
      toast.success("Product product has been delted successfully");
    } catch (error) {
      console.error("Error deleting a product Product", error);
      toast.error("failed to delete a product");
    }
  };

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
          <button
            className="bg-blue-700 px-2 py-1 text-white rounded-md"
            onClick={() => setShowModel(!shoowModel)}
          >
            Create Product
          </button>
        </div>
      </div>
      <div className="bottom">
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-5">
          {data.map(({ _id, image, productName, price }) => (
            <div
              key={_id}
              className="shadow-md flex flex-col items-center gap-1 border-2 p-2"
            >
              <img
                src={`http://localhost:8000/${image}`}
                className="w-32 bg-gray-400 rounded-md"
              />
              <p className="font-semibold">{productName}</p>
              <p>{price}$</p>
              <div className="flex justify-between w-full">
                <MdDelete
                  className="text-red-500 text-2xl cursor-pointer"
                  onClick={() => handelDelete(_id)}
                />
                <MdEdit className="text-gray-500 text-2xl cursor-pointer" />
              </div>
            </div>
          ))}
        </ul>
      </div>
      {/**product model */}
      <div className="absolute z-10 top-24 left-[30%]">
        {shoowModel && <CreateProductForm setShowModel={setShowModel} shoowModel={shoowModel}/>}
      </div>
    </div>
  );
};

export default Products;

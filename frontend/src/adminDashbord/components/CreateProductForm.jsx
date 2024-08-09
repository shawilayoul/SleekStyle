import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
const CreateProductForm = () => {
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const {
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      await axios.post("http://localhost:8000/api/products", {
        productName,
        image,
        description,
        price,
      });
    
      toast.success("Product has been created successfully");
    } catch (error) {
      console.error("Error Creating Product", error);
      toast.error("Product creation failed");
    }

  
  };
  return (
    <div className="bg-white z-10 p-2 w-[400px] flex flex-col items-center shadow-lg border-2">
      <h2 className="font-semibold">Create New Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <div>
          <p>Product Name</p>
          <input
            type="text"
            placeholder="Product Name"
            name="productName"
            value={productName}
            className="p-1 border-2 w-full"
            onChange={(e) => setProductName(e.target.value)}
          />
          {errors.productName && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <p>Product Image</p>
          <input
            type="file"
            placeholder="0"
            name="image"
            value={image}
            className="p-1 border-2 w-full"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {errors.image && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <p>Description</p>
          <input
            type="text"
            placeholder="0"
            name="description"
            value={description}
            className="p-1 border-2 w-full"
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <p>Price</p>
          <input
            type="number"
            placeholder="0"
            name="price"
            value={price}
            className="p-1 border-2 w-full"
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-4 py-1 bg-blue-600 text-white rounded-md"
          >
            Create
          </button>
          <button className="px-4 py-1 bg-red-600 text-white rounded-md">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;

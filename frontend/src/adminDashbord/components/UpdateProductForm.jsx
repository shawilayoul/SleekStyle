import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const UpdateProductForm = () => {
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const { _id } = useParams();
  console.log(_id);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
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
  };
  return (
    <div className="bg-white z-10 p-2 w-[400px] flex flex-col items-center shadow-lg border-2">
    <h2 className="font-semibold">Update a Product</h2>
    <form onSubmit={handleUpdate} className="flex flex-col gap-4 w-full">
      <div>
        <p>Product Name</p>
        <input
          type="text"
          placeholder="Product Name"
          name="productName"
          value={productName}
          className="p-1 border-2 w-full"
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div>
        <p>Product Image</p>
        <input
          type="file"
          className="p-1 border-2 w-full"
          required
          onChange={(e) => handleFileChange(e)}
        />
      </div>
      <div>
        <p>Description</p>
        <input
          type="text"
          placeholder="write the description"
          name="description"
          required
          value={description}
          className="p-1 border-2 w-full"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <p>Price</p>
        <input
          type="number"
          placeholder="0"
          required
          name="price"
          value={price}
          className="p-1 border-2 w-full"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="flex gap-4">
        <button
         type="submit"
          className="px-4 py-1 bg-blue-600 text-white rounded-md"
        >
          update
        </button>
        <button className="px-4 py-1 bg-red-600 text-white rounded-md">
          Cancel
        </button>
      </div>
    </form>
  </div>
  );
};

export default UpdateProductForm;

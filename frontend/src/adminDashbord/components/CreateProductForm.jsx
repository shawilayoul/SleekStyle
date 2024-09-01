import {  useState,} from "react";
import toast from "react-hot-toast";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const CreateProductForm = ({setShowModel,shoowModel,getAllProduct}) => {

  const [productName, setProductName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

 
  

 
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);
    try {
      await axios.post("http://localhost:8000/uploads", formData);

      toast.success("Product has been created successfully");
      getAllProduct()
    } catch (error) {
      console.error("Error Creating Product", error);
    }
    setProductName(""), setImage(null);
    setDescription("");
    setPrice("");
    setShowModel(!shoowModel)
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
        </div>
        <div>
          <p>Product Image</p>
          <input
            type="file"
            className="p-1 border-2 w-full"
            onChange={(e) => handleFileChange(e)}
          />
        </div>
        <div>
          <p>Description</p>
          <input
            type="text"
            placeholder="write the description"
            name="description"
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

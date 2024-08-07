const CreateProductForm = () => {
  return (
    <div className="bg-white z-10 p-2 w-[400px] flex flex-col items-center shadow-lg border-2">
      <h2 className="font-semibold">Create New Product</h2>
      <form action="#" className="flex flex-col gap-4 w-full">
        <div>
          <p>Product Name</p>
          <input type="text" placeholder="name" id="name" className="p-1 border-2 w-full" />
        </div>
        <div>
          <p>Price</p>
          <input type="text" placeholder="0" id="price" className="p-1 border-2 w-full" />
        </div>
        <div>
          <p>Stock Quantity</p>
          <input type="text" placeholder="0" id="name" className="p-1 border-2 w-full" />
        </div>
        <div>
          <p>Rating</p>
          <input type="text" placeholder="0" id="name" className="p-1 border-2 w-full" />
        </div>
        <div className="flex gap-4">
            <button className="px-4 py-1 bg-blue-600 text-white rounded-md"> Create</button>
            <button className="px-4 py-1 bg-red-600 text-white rounded-md">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;

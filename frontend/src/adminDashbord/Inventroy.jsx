import { PopularProductData } from "../constant/data";
const Inventroy = () => {
  return (
    <div className="p-2 relative">
      <div className="top mb-3">
        <div className="flex justify-between">
          <h2 className="font-semibold mb-5">Inventors</h2>
        </div>
      </div>
      <div className="bottom">
        <table className="grid grid-cols-1 gap-5 md:grid-cols-1 xl:grid-cols-1">
          <tr className="flex justify-between items-center border-2 p-2">
            <th>ID</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Stock Quantity</th>
          </tr>
          {PopularProductData.map(({ id, image, name, price, sold }) => (
            <div key={id} className="shadow-md  gap-2 ">
              <tr className="flex justify-between items-center border-2 p-2">
                <td>{id}</td>
                <td>
                  <img
                    src={image}
                    alt="productImg"
                    className="w-12 bg-gray-400 rounded-md"
                  />
                </td>
                <td>
                  <p>{name}</p>
                </td>
                <td>
                  <p>{price}$</p>
                </td>
                <td>rating</td>
                <td>
                  <p>Stocks {sold}</p>
                </td>
              </tr>
            </div>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Inventroy;

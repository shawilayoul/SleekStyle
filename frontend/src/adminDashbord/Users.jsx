import { PopularProductData } from "../constant/data";
const Users = () => {
  return (
    <div className="p-2 relative w-[40%]">
      <div className="top mb-3">
        <div className="flex justify-between">
          <h2 className="font-semibold mb-5">Users</h2>
        </div>
      </div>
      <div className="bottom">
        <table className="grid grid-cols-1 gap-5 md:grid-cols-1 xl:grid-cols-1">
          <tr className="flex justify-between items-center border-2 p-2">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {PopularProductData.map(({ id}) => (
            <div key={id} className="shadow-md  gap-2 ">
              <tr className="flex justify-between items-center border-2 p-2">
                <td>{id}</td>
                <td>
                 <p>shawil</p>
                </td>
                <td>
                  <p>shawilayoul@gmail.com</p>
                </td>
               
              </tr>
            </div>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Users;

import { RxDashboard } from "react-icons/rx";
import { MdOutlineInventory2 } from "react-icons/md";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { SiExpensify } from "react-icons/si";
import { Link } from "react-router-dom";
const SidBar = () => {
  return (
    <div className="flex flex-col gap-5 w-[80%] m-auto p-2 mt-6">
      <Link to="/dashboard" className="flex gap-3 items-center cursor-pointer">
        <RxDashboard /> <h3>Dashboard</h3>
      </Link>

      <Link to="inventory" className="flex gap-3 items-center cursor-pointer">
        <MdOutlineInventory2 /> <h3>Inventory</h3>
      </Link>
      <Link to="products" className="flex gap-3 items-center cursor-pointer">
        <LiaShoppingBasketSolid /> <h3>Products</h3>
      </Link>
      <Link to="users" className="flex gap-3 items-center cursor-pointer">
        <FaRegUser /> <h3>Users</h3>
      </Link>
      <Link to="settings" className="flex gap-3 items-center cursor-pointer">
        <FiSettings /> <h3>Settings</h3>
      </Link>
      <Link to="expenses" className="flex gap-3 items-center cursor-pointer">
        <SiExpensify /> <h3>Expenses</h3>
      </Link>
    </div>
  );
};

export default SidBar;

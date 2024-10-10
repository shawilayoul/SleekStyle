import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegMoon ,FaRegUser } from "react-icons/fa";
import useAuthStore from "../store/authStore";
const NavBar = () => {
  const { user } = useAuthStore();

  return (
    <div className="bg-black text-white h-16 w-[100%]">
      <header>
        <nav className="flex items-center justify-between w-[100%]">
          <div className="left">
            <h2>STOCK</h2>
          </div>
          <div className="middle ">
            <input
              type="text"
              placeholder="Start type to search for  a product "
              className="p-1 rounded-lg"
            />
          </div>
          <div className="right">
            <div>
              <FaRegMoon />
            </div>
            <div>
              {" "}
              <IoNotificationsOutline />
            </div>
            <div className="flex items-center gap-2">
            <FaRegUser />
            <p>{user && user.username? (<span>Welcome {user.username}</span>):(<span>Welcome guest</span>)}</p>
            </div>
            <div>
              < IoSettingsOutline/>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;

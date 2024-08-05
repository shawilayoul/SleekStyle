import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegMoon ,FaRegUser } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className="bg-black text-white h-16 w-full">
      <header>
        <nav>
          <div className="left">
            <h2>STOCK</h2>
          </div>
          <div className="middle">
            <input
              type="text"
              placeholder="Start type to search for  a product "
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
            <p>shawil</p>
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

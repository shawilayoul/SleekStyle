import NavBar from "../adminDashbord/NavBar";
import { Outlet } from "react-router-dom";
import SidBar from "../adminDashbord/SidBar";

const AppLayOUtAdmin = () => {
  return (
    <div>
      <NavBar />
      <div className="flex bg-white ">
        <div className=" w-[20%]">
          <SidBar />
        </div>
        <div className=" w-full p-2 border-l-2">
          {" "}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayOUtAdmin;

import NavBar from "../adminDashbord/NavBar";
import { Outlet } from "react-router-dom";
import SidBar from "../adminDashbord/SidBar";

const AppLayOUtAdmin = () => {
  return (
    <div>
      <NavBar />
      <div className="flex bg-white ">
        <div className="  border-2 h-[100vh] w-[30%]">
          <SidBar />
        </div>
        <div className=" w-full h-[100vh] p-2">
          {" "}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayOUtAdmin;

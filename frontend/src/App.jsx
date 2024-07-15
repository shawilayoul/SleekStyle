import router from "./route/Route";
import { RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster
       position="top-right"
       reverseOrder={false}/>
    </div>
  );
};

export default App;

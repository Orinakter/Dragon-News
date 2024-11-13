import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";


const routers = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
    },

    
  ]);



export default routers;
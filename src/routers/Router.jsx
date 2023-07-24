
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import College from "../components/College/College";
import DetailsInformation from "../components/Details/DetailsInformation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/college",
        element: <College></College>
      },
      {
        path: "/detailsInformation/:id",
        element: <DetailsInformation></DetailsInformation>,
        loader: ({params}) => fetch(`http://localhost:4000/college/${params.id}`)
      }
    ]
  },
]);

export default router;
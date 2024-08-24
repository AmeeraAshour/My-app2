import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Comments from "./components/Comments/Comments";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";

let routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "users", element: <Users /> },
      { path: "comments", element: <Comments /> },
      {path: '*',element:<NotFound/>}
    ],  
  },
]);
function App() {
  return (
  <div className="container">
    <RouterProvider router={routes}>
    </RouterProvider>
  </div>
  )
}

export default App;

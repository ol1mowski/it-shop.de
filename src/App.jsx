import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: '/it-shop.de/',
    element: <Home />,
    errorElement: <Error />
  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

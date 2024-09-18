import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import App1 from "./components/App1.jsx"; // make sure the import path is correct
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import List from "./components/List.jsx";
import store from "./Redux/store.jsx";
import { Provider } from "react-redux";
import Cart from "./components/Cart.jsx";
import Register from "./components/Register";
import Profile from "./components/Profile.jsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <App1 /> },
      { path: "/List", element: <List /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/About", element: <About /> },
      { path: "/Login", element: <Register /> },
      { path: "/Cart", element: <Cart/> },
      { path: "/profile", element: <Profile/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);

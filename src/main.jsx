import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Store from "./store";
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import List from './components/List.jsx';

const route=createBrowserRouter([
  {path:"/",element:<App/>,children:[
    {path:"/",element:<Store/>},
    {path:"/Blog",element:<List/>},
    {path:"/Contact",element:<Contact/>},
    {path:"/About",element:<About/>}
  ]},
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
)

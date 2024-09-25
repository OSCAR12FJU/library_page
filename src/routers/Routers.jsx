import React from "react";
import App from "../App";
import ContactPage from "../pages/ContactPage";
import CreateBook from "../pages/CreateBook";
import { Route, Routes } from "react-router-dom";


const Routers = () =>{
  return(
  <Routes>
    <Route path="/" element={App} >
      <Route path="Inicio" element={App} /> 
      <Route path="Soporte" element={ContactPage} /> 
      <Route path="añadir-Libro" element={CreateBook}/>
    </Route>
  </Routes>
  )


}
export default Routers;
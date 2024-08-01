import { Route,Routes } from "react-router-dom";
import ProductPage from "./pages/productPage";
import "./index.css"
import CreateBook from "./pages/create-book";
import ContactPage from "./pages/contact-page";
import PageHome from "./pages/page-home";
import Login from "./pages/pages-login/login"
import Contact from "./pages/pages-login/contact"
import Register from "./pages/pages-login/register"
import PrivateRoute from "./utils/privateRoute";




function App() {
  return (
    <>
      <Routes>
         <Route path="/Iniciar-Sesion" element={<Login />} />
         <Route path="/Contactanos" element={<Contact />} />
         <Route path="/Registrarse" element={<Register />} />

         <Route path="/" element={<PrivateRoute element={PageHome}/>} >
            <Route path="Inicio" element={<PrivateRoute element={PageHome} />} /> 
            <Route path="Soporte" element={<PrivateRoute element={ContactPage} />} /> 
            <Route path="/libros/:bookName" element={<PrivateRoute element={ProductPage} />}/>
            <Route path="añadir-Libro" element={<PrivateRoute element={CreateBook} />}/>
         </Route>
      </Routes>    
    </>
  );
}

export default App;

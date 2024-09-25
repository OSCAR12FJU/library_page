import Header from "./header/Header";
import SideBar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import "./styles/dashboard.css";
import Routers from "./routers/Routers";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {getDataBooks } from "./api/api";
import {useLocation } from "react-router-dom";
import SectionBook from "./components/SectionBook";
import CreateBook from "./pages/CreateBook";




function App() {
  const [style, setStyle] = useState("navbar-nav  sidebar sidebar-dark accordion");
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const location = useLocation();
  const isInicio = location.pathname === '/Inicio';


  const changeStyle = () => {
      if (style === "navbar-nav  sidebar sidebar-dark accordion") {
          setStyle("navbar-nav  sidebar sidebar-dark accordion toggled");
      }
      else {
          setStyle("navbar-nav  sidebar sidebar-dark accordion")
      }
  };
  const changeStyle1 = () => {
      if (style === "navbar-nav  sidebar sidebar-dark accordion") {
          setStyle("navbar-nav  sidebar sidebar-dark accordion toggled1");
      }
      else {
          setStyle("navbar-nav  sidebar sidebar-dark accordion")
      }
  };

  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await getDataBooks();
        setBooks(data);
        console.log(data)
      } catch (error) {
        console.error('Error al cargar los datos', error);
      }
    };

    fetchData();
  }, []);

  const filterData = books.filter((book) =>
    book.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
    <Routers />

      <body id="page-top">
        <div id="wrapper">
          <SideBar style={style} changeStyle={changeStyle} />
        <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header search={search} setSearch={setSearch} changeStyle1={changeStyle1} />
        
          {isInicio ? (<SectionBook books={filterData} />) : <CreateBook />}

          </div>
        </div>
       </div>
       <Footer/>
       <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </body>

    </>
  );
}

export default App;

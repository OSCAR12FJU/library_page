import React, {useState, useEffect} from "react";
import TemplateCards from "./card-books"
import { useNavigate } from "react-router-dom";


function SearchBar({changeStyle1}){
    
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/get-books');
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error('Error al solicitar la información', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    const filterData = books.filter((book) => 
        book.name.toLowerCase().includes(search.toLowerCase()))
   
    const searcher = (e) =>{
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    console.log('books:', books);
    console.log('search:', search);

    const navigate = useNavigate();


    const handleLogout = async () => {
        const response = await fetch('http://localhost:8080/logout', {
            method: 'GET'
        });

        if (response.ok) {
            localStorage.removeItem('authToken');
            console.log('Cierre de sesión exitoso');
            navigate("/Iniciar-Sesion")
        } else {
            console.error('Error al cerrar sesión');
        }
    };


    return(
        <>
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
    <i className="fa fa-bars"></i>
</button>

{/*  <!-- Buscador en la barra de navegación. --> */}
<form
    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
    <div className="input-group">
        <div className="input-group-append">
            <button className="btn btn-search" type="button">
                <i className="fas fa-search fa-sm"></i>
            </button>
        </div>
        <input type="text" className="nav-search  small" style={{fontSize:'16px'}} placeholder="Buscar libro..."
            aria-label="Search" aria-describedby="basic-addon2" value={search} onChange={searcher} />
    </div>
</form>
{/*  <!-- Topbar Navbar --> */}
<ul className="navbar-nav ml-auto">

    {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
    <li className="nav-item dropdown no-arrow d-sm-none">
        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-search fa-fw"></i>
        </a>
        {/*   <!-- Dropdown - Messages --> */}
        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown">
            <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="nav-search border-0 small"
                        placeholder="Buscar libro..." aria-label="Search"
                        aria-describedby="basic-addon2" value={search} onChange={searcher}/>
                    <div className="input-group-append">
                        <button className="btn btn-search" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </li>


    <div className="topbar-divider d-none d-sm-block"></div>
    <li className="nav-item dropdown no-arrow">
        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {/* <span className="mr-2 d-none d-lg-inline text-gray-600 small">Oscar</span> */}
            <img className="img-profile rounded-circle"
                src="img/undraw_profile.svg" />
        </a>
        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown" style={{border:'none'}}>
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 " style={{color:'#03151E!important'}}></i>
                Cerrar Sesion
            </a>
        </div>
    </li>

</ul>

</nav>
        <TemplateCards books={filterData} />

        {/*  <!-- Logout Modal--> */}
        <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Cerrar Sesion</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Seleccione "Cerrar sesión" a continuación si está listo para finalizar su sesión actual.</div>
                            <div className="modal-footer">

                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                                <button className="btn btn-primary" type="button" onClick={handleLogout} data-dismiss="modal">Cerrar Sesion</button>
                            </div>
                        </div>
                    </div>

                </div>
        </>

    )


}

export default SearchBar;
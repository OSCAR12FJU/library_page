import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({style, changeStyle}) =>{

    return(
    <>
    {/*  <!-- Sidebar - Brand --> */}
    <ul className={style} id="accordionSidebar">
        <div className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-regular fa-book"></i>
            </div>

            <div className="sidebar-brand-text mx-2">BS System <sup>2.0</sup></div>
              <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle} />
              </div>
            </div>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link to="http://localhost:3000/Inicio#" className="nav-link" style={{paddingBottom: 0}}>
                    <i className="fas fa-regular fa-house-user"></i> 
                    <span>Biblioteca</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link to="http://localhost:3000/añadir-Libro" className="nav-link" style={{paddingBottom: 0}}>
                    <i className="fas fa-regular fa-folder-plus"></i>
                    <span>Añadir Libro</span>
                </Link> 
            </li>
            {/* <li className="nav-item active">
                <Link to="#" className="nav-link" style={{paddingBottom: 0}}>
                    <i className="fas fa-regular fa-calendar-check"></i>
                    <span>Prestamos</span>
                </Link>
            </li> */}

            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />
            <hr className="sidebar-divider" />
            <hr className="sidebar-divider" />

            <li className="nav-item active">
                <Link to="http://localhost:3000/soporte" className="nav-link" style={{paddingBottom: 0}}>
                    <i className="fas fa-regular fa-id-badge"></i> 
                    <span>Contactanos</span>
                </Link>
            </li>
            <li className="nav-item active" >
                <Link to="#" className="nav-link" style={{paddingBottom: 0}} data-toggle="modal" data-target="#logoutModal">
                    <i className="fas fa-regular fa-door-open"></i>  
                    <span>Salir</span>
                </Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />

    </ul>
    </>
    )

}

export default SideBar;
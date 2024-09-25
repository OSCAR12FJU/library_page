// import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";


// // const NavBar = ({searcher,handleLogout, search = ""}) =>{
// //     return(
// //     <>
// //         <SearchBar search ={search} searcher ={searcher}/>

// //         {/*  <!-- Buscador en la barra de navegación. --> */}

// //         <ul className="ml-auto d-flex align-items-center no-bullets">
// //         {/* <!-- Nav en repsonsive (Visible Only XS) --> */}
// //             <li className="nav-item dropdown no-arrow d-sm-none">
// //             <Link to={"#"} className="nav-link dropdown-toggle" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
// //                 <i className="fas fa-search fa-fw"></i>
// //             </Link>

// //             {/* <!-- Mensaje de buscador en el responsive --> */}
// //             <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
// //                 aria-labelledby="searchDropdown">
// //                 <form className="form-inline mr-auto w-100 navbar-search">
// //                     <div className="input-group">
// //                         <input type="text" className="nav-search border-0 small"
// //                             placeholder="Buscar libro..." aria-label="Search"
// //                             aria-describedby="basic-addon2" value={search} onChange={searcher}/>
// //                         <div className="input-group-append">
// //                             <button className="btn btn-search" type="button">
// //                                 <i className="fas fa-search fa-sm"></i>
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </form>
// //             </div>
// //             </li>

// //             <div className="topbar-divider d-none d-sm-block"></div>

// //             <li className="nav-item dropdown no-arrow">
// //               <Link to={'#'} className="nav-link dropdown-toggle" id="userDropdown" role="button"
// //               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// //               <img className="img-profile rounded-circle"
// //                 src="img/undraw_profile.svg" alt="img-profile" />            
// //               </Link>
// //             {/* <span className="mr-2 d-none d-lg-inline text-gray-600 small">Oscar</span> */}
// //              <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
// //             aria-labelledby="userDropdown" style={{border:'none'}}>
            
// //             <Link to={"#"} className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
// //                 <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 " style={{color:'#03151E!important'}}></i>
// //                 Cerrar Sesion
// //             </Link>
// //           </div>
// //         </li>
// //       </ul> 

// //       <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
// //                     aria-hidden="true">
// //                     <div className="modal-dialog" role="document">
// //                         <div className="modal-content">
// //                             <div className="modal-header">
// //                                 <h5 className="modal-title" id="exampleModalLabel">Cerrar Sesion</h5>
// //                                 <button className="close" type="button" data-dismiss="modal" aria-label="Close">
// //                                     <span aria-hidden="true">×</span>
// //                                 </button>
// //                             </div>
// //                             <div className="modal-body">Seleccione "Cerrar sesión" a continuación si está listo para finalizar su sesión actual.</div>
// //                             <div className="modal-footer">

// //                                 <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
// //                                 <button className="btn btn-primary" type="button" onClick={handleLogout} data-dismiss="modal">Cerrar Sesion</button>
// //                             </div>
// //                         </div>
// //                     </div>

// //                 </div>
// //     </>)}


// const NavBar = ({ search, searcher, handleLogout }) => {
//     return (
//       <ul className="navbar-nav ml-auto">
//         {/* Nav en responsive (Visible Only XS) */}
//         <li className="nav-item dropdown no-arrow d-sm-none">
//           <Link
//             to={"#"}
//             className="nav-link dropdown-toggle"
//             id="searchDropdown"
//             role="button"
//             data-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="fas fa-search fa-fw"></i>
//           </Link>
  
//           {/* Mensaje de buscador en el responsive */}
//           <div
//             className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
//             aria-labelledby="searchDropdown"
//           >
//             <form className="form-inline mr-auto w-100 navbar-search">
//               <div className="input-group">
//                 <input
//                   type="text"
//                   className="nav-search border-0 small"
//                   placeholder="Buscar libro..."
//                   aria-label="Search"
//                   aria-describedby="basic-addon2"
//                   value={search}
//                   onChange={searcher}
//                 />
//                 <div className="input-group-append">
//                   <button className="btn btn-search" type="button">
//                     <i className="fas fa-search fa-sm"></i>
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </li>
  
//         <div className="topbar-divider d-none d-sm-block"></div>
  
//         {/* Ícono del usuario */}
//         <li className="nav-item dropdown no-arrow">
//           <Link
//             to={"#"}
//             className="nav-link dropdown-toggle"
//             id="userDropdown"
//             role="button"
//             data-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <img
//               className="img-profile rounded-circle"
//               src="img/undraw_profile.svg"
//               alt="User profile"
//             />
//           </Link>
  
//           <div
//             className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
//             aria-labelledby="userDropdown"
//             style={{ border: "none" }}
//           >
//             <Link
//               to={"#"}
//               className="dropdown-item"
//               data-toggle="modal"
//               data-target="#logoutModal"
//             >
//               <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2"></i>
//               Cerrar Sesión
//             </Link>
//           </div>
//         </li>
  
//         {/* Modal de logout */}
//         <div
//           className="modal fade"
//           id="logoutModal"
//           tabIndex="-1"
//           role="dialog"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLabel">
//                   Cerrar Sesión
//                 </h5>
//                 <button
//                   className="close"
//                   type="button"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">×</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 Seleccione "Cerrar sesión" a continuación si está listo para
//                 finalizar su sesión actual.
//               </div>
//               <div className="modal-footer">
//                 <button
//                   className="btn btn-secondary"
//                   type="button"
//                   data-dismiss="modal"
//                 >
//                   Cancelar
//                 </button>
//                 <button
//                   className="btn btn-primary"
//                   type="button"
//                   onClick={handleLogout}
//                   data-dismiss="modal"
//                 >
//                   Cerrar Sesión
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </ul>
//     );
//   };
  







// // const NavBar = ({ searcher, handleLogout, search = "" }) => {
// //     return (
// //         <>
// //             <SearchBar search={search} searcher={searcher} />

// //             {/*  Buscador en la barra de navegación */}
// //             <ul className="navbar-nav ml-auto">
// //                 {/* Nav en responsive (Visible Only XS) */}
// //                 <li className="nav-item dropdown no-arrow d-sm-none">
// //                     {/* Cambiado de Link a un button o span */}
// //                     <span className="nav-link dropdown-toggle" id="searchDropdown" role="button">
// //                         <i className="fas fa-search fa-fw"></i>
// //                     </span>

// //                     {/* Mensaje de buscador en el responsive */}
// //                     <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
// //                         aria-labelledby="searchDropdown">
// //                         <form className="form-inline mr-auto w-100 navbar-search">
// //                             <div className="input-group">
// //                                 <input type="text" className="nav-search border-0 small"
// //                                     placeholder="Buscar libro..." aria-label="Search"
// //                                     aria-describedby="basic-addon2" value={search} onChange={searcher} />
// //                                 <div className="input-group-append">
// //                                     <button className="btn btn-search" type="button">
// //                                         <i className="fas fa-search fa-sm"></i>
// //                                     </button>
// //                                 </div>
// //                             </div>
// //                         </form>
// //                     </div>
// //                 </li>
// //                 <div className="topbar-divider d-none d-sm-block"></div>

// //                 {/* Dropdown para el usuario */}
// //                 <li className="nav-item dropdown no-arrow">
// //                     <span className="nav-link dropdown-toggle" id="userDropdown" role="button">
// //                         <img className="img-profile rounded-circle"
// //                             src="img/undraw_profile.svg" alt="img-profile" />
// //                     </span>

// //                     <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
// //                         aria-labelledby="userDropdown" style={{ border: 'none' }}>

// //                         <span className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
// //                             <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2" style={{ color: '#03151E!important' }}></i>
// //                             Cerrar Sesion
// //                         </span>
// //                     </div>
// //                 </li>
// //             </ul>

// //             {/* Modal para cerrar sesión */}
// //             <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
// //                 aria-hidden="true">
// //                 <div className="modal-dialog" role="document">
// //                     <div className="modal-content">
// //                         <div className="modal-header">
// //                             <h5 className="modal-title" id="exampleModalLabel">Cerrar Sesión</h5>
// //                             <button className="close" type="button" data-dismiss="modal" aria-label="Close">
// //                                 <span aria-hidden="true">×</span>
// //                             </button>
// //                         </div>
// //                         <div className="modal-body">Seleccione "Cerrar sesión" a continuación si está listo para finalizar su sesión actual.</div>
// //                         <div className="modal-footer">
// //                             <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
// //                             {/* Aquí puedes manejar el cierre de sesión */}
// //                             <button className="btn btn-primary" type="button" onClick={handleLogout}>Cerrar Sesión</button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // };



// export default NavBar;
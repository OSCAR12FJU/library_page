import React  from "react";

const SearchBar = ({searcher, search = ""}) =>{
  return (
    <>
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

</>
  )
}
export default SearchBar
import { Link } from "react-router-dom";
import "../styles/style-components/nav-bar.css"

const Header = ({ search, setSearch, changeStyle1 }) => {
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
          onClick={changeStyle1}
        >
          <i className="fa fa-bars"></i>
        </button>

        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <div className="input-group-append">
              <button className="btn btn-search" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
            <input
              type="text"
              className="nav-search small"
              style={{ fontSize: '16px' }}
              placeholder="Buscar libro..."
              aria-label="Search"
              aria-describedby="basic-addon2"
              value={search}
              onChange={searcher}
            />
          </div>
        </form>

      
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow d-sm-none">
        <Link className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > 
           <i className="fas fa-search fa-fw"></i>
        </Link>
        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown">
            <form className="form-inline mr-auto w-100 navbar-search">  
              <div className="input-group">
                <input 
                type="text" 
                className="nav-search border-0 small" 
                placeholder="Buscar libro..." 
                aria-label="Search"
                aria-describedby="basic-addon2" 
                value={search} 
                onChange={searcher}/>
              <div className="input-group-append">
              <button className="btn btn-search" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>
    </ul>

      </nav>
    </>
  );
};

export default Header;
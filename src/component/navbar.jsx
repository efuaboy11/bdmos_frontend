import { Link, useLocation} from "react-router-dom"


export const  Navbar = () =>{

  const location = useLocation();
  const isActive = (path) =>{
    return location.pathname === path

  }
  return(
    <nav className="navbar navbar-expand-md navbar-light primary-background position-sticky top-0">
      <div className="container-xxl">
        <a href="#" className="navbar-brand">

        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="#main-nav" aria-expanded="false" arial-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
          <ul className="navbar-nav flex-md-nowrap">
            <li className="nav-item home-nav">
              <Link to="/" className={`nav-link p-4 text-white ${isActive("/") ?"current": ""}`}>Home</Link>
              <div className="sub-menu-l">
                <ul className="navbar-nav px-3 pb-3">
                  <li className="nav-item"><a href="#goal" className="nav-link text-white px-2">School goals</a></li>
                  <li className="nav-item"><a href="#about" className="nav-link text-white ps-2">About</a></li>
                  <li className="nav-item"><a href="#extra-activity" className="nav-link text-white">Extra School work</a></li>
                  <li className="nav-item"><a href="#news" className="nav-link text-white">News</a></li>
                  <li className="nav-item"><a href="#gallery" className="nav-link text-white">Photos</a></li>

                </ul>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/event" className={`nav-link p-4 text-white ${isActive("/event") ?"current": ""}`}>EVENTS</Link>
            </li>

            <li className="nav-item">
              <Link to="/gallery" className={`nav-link p-4 text-white ${isActive("/gallery") ?"current": ""}`}>GALLERY</Link> 
            </li>

            <li className="nav-item">
              <Link to="/portal" target="_blank" rel="noopener noreferrer" className={`nav-link p-4 text-white ${isActive("/portal") ?"current": ""}`}>SCHOOL PORTAL</Link>
            </li>

            <li className="nav-item">
              <Link to="/application" className={`nav-link p-4 text-white ${isActive("/application") ?"current": ""}`}>TEACHER APPLICATION</Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className={`nav-link p-4 text-white ${isActive("/contact") ?"current": ""}`}>CONTACT US</Link>
            </li>
          </ul>

        </div>
      </div>

    </nav>
  )
}
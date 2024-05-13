import "aos/dist/aos.css"
import "../css/style.css"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navbar } from "../component/navbar"

export const Gallery = () =>{
  const location = useLocation();
  const isActive = (path) =>{
    return location.pathname === path

  }
  return(
    <div>
      <Navbar/>
      
      <footer>

        <div className="primary-background  pt-5 pb-3">
          <div className="container-lg text-center">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 text-start footer-text">
                <h5  data-aos="fade-right"  data-aos-duration="1000">Here at Baby's Day Out / Fredita Children We give Your Children nothing but the best. We try to ensure you child is well rounded both academically, socially and mentally.</h5>
              </div>
              <div className="col-lg-3"  data-aos="zoom-in"  data-aos-duration="1000">
                <div className="icon">
                  <a href="#"><FontAwesomeIcon className="g-3 l-text" icon="fa-brands fa-facebook" /></a>
                  <a href="#"><FontAwesomeIcon className="g-3 l-text" icon="fa-brands fa-whatsapp" /></a>
                  <a href="#"><FontAwesomeIcon className="g-3 l-text" icon="fa-brands fa-instagram" /></a>                 
                </div>
                <div className="py-3">
                  <p className="sm-text">Check our recent post and update on our social media platform</p> 
                </div>
              </div>

              <div className="col-lg-3 text-start ps-5 footer-link"  data-aos="fade-left"  data-aos-duration="1000">
                <div>
                  <h4>Quick links</h4>
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <Link to="/" className={`nav-link p-1 footer-link ${isActive("/") ?"current2": ""}`}>Home</Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/event" className={`nav-link p-1 footer-link ${isActive("/event") ?"current2": ""}`}>EVENTS</Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/gallery" className={`nav-link p-1 footer-link ${isActive("/gallery") ?"current2": ""}`}>GALLERY</Link> 
                    </li>

                    <li className="nav-item">
                      <Link to="/portal" className={`nav-link p-1 footer-link ${isActive("/portal") ?"current2": ""}`}>SCHOOL PORTAL</Link> 
                    </li>

                    <li className="nav-item">
                      <Link to="/application" className={`nav-link p-1 footer-link ${isActive("/application") ?"current2": ""}`}>TEACHER APPLICATION</Link> 
                    </li>

                    <li className="nav-item">
                      <Link to="/contact" className={`nav-link p-1 footer-link ${isActive("/contact") ?"current": ""}`}>CONTACT US</Link> 

                    </li>
                  </ul>
                </div>


              </div>
            </div>
            <hr/>

            <div className="text-center end-text">
              <p>Copyright &copy;2023, Baby's Day Out / Fredita Children Academy</p>
              <p>powered by: <a href="#">Ehiz</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
      
  )
}
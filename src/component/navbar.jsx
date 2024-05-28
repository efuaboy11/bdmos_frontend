import { faAngleDown, faArrowCircleLeft, faBars, faBurger } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pic from "../img/verified.jpg"
import { useState, useRef } from "react";
import "../css/style.css"



export const  Navbar = () =>{

  const location = useLocation();
  const [overlay, setOverlay] = useState(false)
  const sidebar = useRef(null)
  const isActive = (path) =>{
    return location.pathname === path

  }

  const showSidebar = () =>{
    if (sidebar.current) {
      sidebar.current.style.transform = `translateX(${0}px)`;
    }
    setOverlay(!overlay)
  };

  const closeSidebar = () =>{
    if (sidebar.current) {
      sidebar.current.style.transform = `translateX(${-350}px)`;
    }
    setOverlay(!overlay)
  }
  return(
    <div id="nav-frame">
      <nav className="primary-background">
        <div className="container-xxl">
          <div className="row">
            <div className="col-xxl-12">
              <div className="row">
                <div className="col-1">
                  <div className="d-flex align-items-center" width='100%'>
                    <div className="client-menu-bar">
                     <FontAwesomeIcon icon={faBars} onClick={showSidebar}/>
                    </div>

                    <img src={pic} alt="" />
                    <h5>BDOMS</h5>
                  </div>

                </div>
                <div className="col-11 nav-frame-list-conatiner"> 
                  
                  <ul className=" d-flex nav-frame-list">
                    <li className="nav-item home-nav">
                      <div className="d-flex p-4 ">
                        <Link to="/" >Home</Link>
                        <FontAwesomeIcon icon={faAngleDown} className="pt-1 ps-2"/>
                      </div>
  
                      <div className="sub-menu-l pt-5">
                        <ul className="navbar-nav px-3 pb-3">
                          <li className="nav-item"><a href="#goal" className="nav-link text-white">School goals</a></li>
                          <li className="nav-item"><a href="#about" className="nav-link text-white">About</a></li>
                          <li className="nav-item"><a href="#extra-activity" className="nav-link text-white">Extra School work</a></li>
                          <li className="nav-item"><a href="#news" className="nav-link text-white">News</a></li>
                          <li className="nav-item"><a href="#gallery" className="nav-link text-white">Photos</a></li>

                        </ul>
                      </div>
                    </li>

                      

                    <li className="nav-item home-nav">
                      <div className="d-flex p-4">
                        <Link to="/" >ABOUT</Link>
                        <FontAwesomeIcon icon={faAngleDown} className="pt-1 ps-2"/>
                      </div>
                      <div className="sub-menu-l">
                        <ul className="navbar-nav px-3 pb-3 pt-5">
                          <li className="nav-item"><a href="#goal" className="nav-link text-white">Our Story</a></li>
                          <li className="nav-item"><a href="#about" className="nav-link text-white">Vision / Mission</a></li>
                          <li className="nav-item"><a href="#extra-activity" className="nav-link text-white">Our core Values</a></li>
                          <li className="nav-item"><a href="#news" className="nav-link text-white">School anthem</a></li>
                          <li className="nav-item"><a href="#gallery" className="nav-link text-white">Rules and Regulation</a></li>

                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <Link to="/gallery" className={`nav-link p-4 text-white ${isActive("/gallery") ?"current": ""}`}>GALLERY</Link> 
                    </li>

                    <li className="nav-item home-nav">
                      <div className="d-flex p-4">
                        <Link to="/" >INFO</Link>
                        <FontAwesomeIcon icon={faAngleDown} className="pt-1 ps-2"/>
                      </div>
                      <div className="sub-menu-l">
                        <ul className="navbar-nav px-3 pb-3 pt-5">
                          <li className="nav-item"><a href="#goal" className="nav-link text-white">Uniforms</a></li>
                          <li className="nav-item"><a href="#about" className="nav-link text-white ">Admission Procedure</a></li>
                          <li className="nav-item"><a href="#extra-activity" className="nav-link text-white">BDOMS Fact Sheet</a></li>

                        </ul>
                      </div>
                    </li>

                    <li className="nav-item home-nav">
                      <div className="d-flex p-4">
                        <Link to="/" >CAMPUS</Link>
                        <FontAwesomeIcon icon={faAngleDown} className="pt-1 ps-2"/>
                      </div>
                      <div className="sub-menu-l">
                        <ul className="navbar-nav px-3 pb-3 pt-5">
                          <li className="nav-item"><a href="#goal" className="nav-link text-white">Uniforms</a></li>
                          <li className="nav-item"><a href="#about" className="nav-link text-white ">Admission Procedure</a></li>
                          <li className="nav-item"><a href="#extra-activity" className="nav-link text-white">BDOMS Fact Sheet</a></li>

                        </ul>
                      </div>
                    </li>

                    <li className="nav-item home-nav">
                    <div className="d-flex p-4">
                        <Link to="/" >CIRRICULUM</Link>
                        <FontAwesomeIcon icon={faAngleDown} className="pt-1 ps-2"/>
                      </div>
                      <div className="sub-menu-l">
                        <ul className="navbar-nav px-3 pb-3 pt-5">
                          <li className="nav-item"><a href="#goal" className="nav-link text-white px-2">Curriculum -Infant School</a></li>
                          <li className="nav-item"><a href="#about" className="nav-link text-white ps-2">Curriculum -Junior School</a></li>

                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <Link to="/event" className={`nav-link p-4 text-white ${isActive("/event") ?"current": ""}`}>EVENTS</Link>
                    </li>



                    <li className="nav-item">
                      <Link to="/portal" target="_blank" rel="noopener noreferrer" className={`nav-link p-4 text-white ${isActive("/portal") ?"current": ""}`}> PORTAL</Link>
                    </li>

                    <li className="nav-item home-nav">
                      <div className="d-flex p-4">
                        <Link to="/" >CONNECT US</Link>
                        <FontAwesomeIcon icon={faAngleDown} className="pt-1 ps-2"/>
                      </div>
                      <div className="sub-menu-l">
                        <ul className="navbar-nav px-3 pb-3 pt-5">
                          <li className="nav-item">
                            <Link to="/application" className={`nav-link  text-white ${isActive("/application") ?"current": ""}`}>Work with us</Link>
                          </li>     

                          <li className="nav-item">
                            <Link to="/contact" width='100%' className={`nav-link  text-white ${isActive("/contact") ?"current": ""}`}>Contact Us</Link>
                          </li>          

                          </ul>
                        </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>





        </div>

      </nav>

      <section>
        <div id="client">
          <div className="client-sidebar" ref={sidebar}>
            <div>
              <FontAwesomeIcon icon={faArrowCircleLeft} className="pt-1 ps-2" onClick={closeSidebar}/>
              
            </div>

          </div>
        </div>
      </section>
    </div>


    
  )
}
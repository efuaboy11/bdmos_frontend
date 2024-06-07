import { faAngleDown, faArrowCircleLeft, faArrowLeft, faBars, faBurger, faHouseCrack, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
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

  
  const [isAboutdropdown, setIsAboutdropdown] = useState(false);
  const [isInfodropdown, setIsInfoDropdown] = useState(false)
  const [campusDropdown, setCampusDropdown] = useState(false)
  const [currDropdown, setCurrDropdown] = useState(false)
  const [connectDropdown, setConnectDropdown] = useState(false)

  const toogleAboutDropdown = () =>{
    setIsAboutdropdown(!isAboutdropdown)
  }

  const toogleInfoDropdown = () =>{
    setIsInfoDropdown(!isInfodropdown)
  }
  const toogleCampusDropdown = () =>{
    setCampusDropdown(!campusDropdown)
  }

  const toogleCurrDropdown = () =>{
    setCurrDropdown(!currDropdown)
  }

  const toogleConnectDropdown = () =>{
    setConnectDropdown(!connectDropdown)
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
                      <div className="d-flex px-4 pt-4">
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
                      <div className="d-flex px-4 pt-4">
                        <p>ABOUT</p>
                        <FontAwesomeIcon icon={faAngleDown} className="pt-1 ps-2"/>
                      </div>
                      <div className="sub-menu-l">
                        <ul className="navbar-nav px-3 pb-3 pt-5">
                          <li className="nav-item"><Link to='/about/ourStory'>Our Story</Link></li>
                          <li className="nav-item"><Link to='/about/Vision'>Vision / Mission</Link></li>
                          <li className="nav-item"><Link to='/about/ourValues'>Our core Values</Link></li>
                          <li className="nav-item"><Link to='/about/ourAnthem'>School anthem</Link></li>
                          <li className="nav-item"><a href="#gallery" className="nav-link text-white">Rules and Regulation</a></li>

                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <Link to="/gallery" className={`nav-link p-4  ${isActive("/gallery") ?"current": ""}`}>GALLERY</Link> 
                    </li>

                    <li className="nav-item home-nav">
                      <div className="d-flex px-4 pt-4">
                      <p>INFO</p>
                        <FontAwesomeIcon icon={faAngleDown} className="pt-1 ps-2"/>
                      </div>
                      <div className="sub-menu-l">
                        <ul className="navbar-nav px-3 pb-3 pt-5">
                          <li className="nav-item"><Link to='/info/uniform' >Uniforms</Link></li>
                          <li className="nav-item"><Link to='/info/admission'>Admission Procedure</Link></li>
                          <li className="nav-item"><a href="#extra-activity" className="nav-link text-white">BDOMS Fact Sheet</a></li>

                        </ul>
                      </div>
                    </li>

                    <li className="nav-item home-nav">
                      <div className="d-flex px-4 pt-4">
                      <p>CAMPUS</p>
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
                    <div className="d-flex px-4 pt-4">
                      <p>CURICULUNM</p>
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
                      <div className="d-flex px-4 pt-4">
                      <p>CONNECT US</p>
                        <FontAwesomeIcon icon={faAngleDown} className="pt-1 ps-2"/>
                      </div>
                      <div className="sub-menu-l ms-3">
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

      <section className={`${overlay ? "overlay-background" :""}`}>
        <div id="client">
          <div className="client-sidebar" ref={sidebar}>
            <div>
              <div className="d-flex justify-content-between">
                <div></div>
                <div className="m-3">
                  <FontAwesomeIcon className='sm-text cursor-pointer' icon={faArrowLeft} onClick={closeSidebar}/>
                </div>

              </div>
             
              <div className="client-sidebar-list">
                <ul className="mt-5 pt-4">
                  <li className=" px-4 py-3">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <FontAwesomeIcon icon={faHouseCrack} className="pe-4" />
                        <Link>HOME</Link>
                      </div>
                    </div>

                  </li>
                  <li className={`px-4 py-3 ${isAboutdropdown ? "client-sidebar-list-bg": ""}`}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <FontAwesomeIcon icon={faHouseCrack} className="pe-4" />
                        <p>ABOUT</p>
                      </div>
                      <div>
                        <FontAwesomeIcon className="cursor-pointer"  icon={isAboutdropdown ? faMinus :faPlus } onClick={toogleAboutDropdown}/>
                      </div>
                    </div>


                    <div style={{ display: isAboutdropdown ? 'block' : 'none' }}>
                      <ul className="ps-4">
                        <li className={` ps-4 py-2`}>
                          <Link to="">Our Story</Link> 
                        </li>

                        <li className={` ps-4 py-2`}>
                          <Link to="">Vison/ mission</Link> 
                        </li>

                        <li className={` ps-4 py-2`}>
                          <Link to="">Our Core Values</Link> 
                        </li>

                        <li className={` ps-4 py-2`}>
                          <Link to="">School Anthem</Link> 
                        </li>

                        <li className={` ps-4 py-2`}>
                          <Link to="">Rules and Regulation</Link> 
                        </li>
                      </ul>
                    </div>



                  </li>

                  <li className=" px-4 py-3">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <FontAwesomeIcon icon={faHouseCrack} className="pe-4" />
                        <Link>GALLERY</Link>
                      </div>
                    </div>

                  </li>

                  <li className={`px-4 py-3 ${isInfodropdown ? "client-sidebar-list-bg": ""}`}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <FontAwesomeIcon icon={faHouseCrack} className="pe-4" />
                        <p>INFO</p>
                      </div>
                      <div>
                        <FontAwesomeIcon className="cursor-pointer"  icon={isInfodropdown ? faMinus :faPlus } onClick={toogleInfoDropdown}/>
                      </div>
                    </div>


                    <div style={{ display: isInfodropdown ? 'block' : 'none' }}>
                      <ul className="ps-4">
                        <li className={` ps-4 py-2`}>
                          <Link to="">Uniform</Link> 
                        </li>

                        <li className={` ps-4 py-2`}>
                          <Link to="">Admission Procedure</Link> 
                        </li>

                        <li className={` ps-4 py-2`}>
                          <Link to="">BDOMS Fact Sheet</Link> 
                        </li>
                      </ul>
                    </div>



                  </li>

                  <li className={`px-4 py-3 ${campusDropdown ? "client-sidebar-list-bg": ""}`}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <FontAwesomeIcon icon={faHouseCrack} className="pe-4" />
                        <p>CAMPUS</p>
                      </div>
                      <div>
                        <FontAwesomeIcon className="cursor-pointer" icon={campusDropdown ? faMinus :faPlus } onClick={toogleCampusDropdown}/>
                      </div>
                    </div>


                    <div style={{ display: campusDropdown ? 'block' : 'none' }}>
                      <ul className="ps-4">
                        <li className={` ps-4 py-2`}>
                          <Link to="">Add Parent</Link> 
                        </li>

                        <li className={` ps-4 py-2`}>
                          <Link to="">Delete Parent</Link> 
                        </li>

                        <li className={` ps-4 py-2`}>
                          <Link to="">Edit Parent</Link> 
                        </li>
                      </ul>
                    </div>



                  </li>

                  <li className={`px-4 py-3 ${currDropdown ? "client-sidebar-list-bg": ""}`}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <FontAwesomeIcon icon={faHouseCrack} className="pe-4" />
                        <p>CURICULUNM</p>
                      </div>
                      <div>
                        <FontAwesomeIcon className="cursor-pointer" icon={currDropdown ? faMinus :faPlus } onClick={toogleCurrDropdown}/>
                      </div>
                    </div>


                    <div style={{ display: currDropdown ? 'block' : 'none' }}>
                      <ul className="ps-4">
                        <li className={` ps-4 py-2`}>
                          <Link to="">Curriculunm -Infant</Link> 
                        </li>

                        <li className={` ps-4 py-2`}>
                          <Link to="">Cirriculunm -Junior</Link> 
                        </li>
                      </ul>
                    </div>



                  </li>

                  <li className=" px-4 py-3">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <FontAwesomeIcon icon={faHouseCrack} className="pe-4" />
                        <Link>EVENT</Link>
                      </div>
                    </div>

                  </li>

                  <li className=" px-4 py-3">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <FontAwesomeIcon icon={faHouseCrack} className="pe-4" />
                        <Link>PORTAL</Link>
                      </div>
                    </div>

                  </li>

                  <li className={`px-4 py-3 ${connectDropdown ? "client-sidebar-list-bg": ""}`}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <FontAwesomeIcon icon={faHouseCrack} className="pe-4" />
                        <p>CONNECT US</p>
                      </div>
                      <div>
                        <FontAwesomeIcon className="cursor-pointer" icon={connectDropdown ? faMinus :faPlus } onClick={toogleConnectDropdown}/>
                      </div>
                    </div>


                    <div style={{ display: connectDropdown ? 'block' : 'none' }}>
                      <ul className="ps-4">
                        <li className={` ps-4 py-2`}>
                          <Link to="">Curriculunm -Infant</Link> 
                        </li>

                        <li className={` ps-4 py-2`}>
                          <Link to="">Cirriculunm -Junior</Link> 
                        </li>
                      </ul>
                    </div>



                  </li>

                   
                </ul>
              </div>

              
            </div>

          </div>
        </div>
      </section>
    </div>


    
  )
}
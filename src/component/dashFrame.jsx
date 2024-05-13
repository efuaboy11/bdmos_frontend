import "../css/dashboard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCircleUser, faHouse, faMoneyBills, faChartSimple, faCartShopping, faAngleDown, faChartLine, faBookOpenReader, faBookOpen, faBell,faArrowLeft, faBars, faXmark} from "@fortawesome/free-solid-svg-icons"
import { useContext, useEffect,  useRef, useState} from "react"
import { Link, useLocation} from "react-router-dom"
import AuthContext from "../context/AuthContext"

export const DashFrame = () =>{
  const [overlay, setOverlay] = useState(false)
  const sidebar = useRef(null)
  const studentInfo = useRef(null)
  const location = useLocation();
  const isActiveDashLink = (path) =>{
    return location.pathname === path

  }
  useEffect(() =>{
    document.body.style.backgroundColor = "#03051E"

    return() =>{
      document.body.style.backgroundColor = "#f4f4f4"
    }
  }) 
  const showSidebar = () =>{
    if (sidebar.current) {
      sidebar.current.style.transform = `translateX(${0}px)`;
    }
    setOverlay(!overlay)
  };

  const closeSidebar = () =>{
    if (sidebar.current) {
      sidebar.current.style.transform = `translateX(${-250}px)`;
    }  
    setOverlay(!overlay)
  }

  const showStudentInfo = () =>{
    if(studentInfo.current){
      studentInfo.current.style.transform = `translate(${-50}%, ${-45}%)`
      studentInfo.current.style.transition = `all ${2}s ease `
    }
  }

  const closeStudentInfo = () =>{
    if(studentInfo.current){
      studentInfo.current.style.transform = `translateY(${-250}%)`
      studentInfo.current.style.transition = `all ${4}s ease `
    }
  }

  const {logoutUser} = useContext(AuthContext)

  return(
    <div>
      <div className="student-info-modal py-3 boxing-shadow" ref={studentInfo}>
        <div className="d-flex justify-content-end">
          <button onClick={closeStudentInfo} className="button-dashboard  student-info-modal-close-button">Close<FontAwesomeIcon icon={faXmark} className="px-1" /></button>
  
        </div>
        <div className="student-modal-user-icon">
          <FontAwesomeIcon icon={faCircleUser} className="xxl-text py-5 text-muted" />
        </div>

        <div className="student-info-modal-details">
          <div >
            <div className="d-flex pb-3">
              <strong className="pe-2">Student ID:</strong>
              <p>SBHSISE345</p>
              09156249677
            </div>
            <div className="d-flex pb-3">
              <strong className="pe-2">Name:</strong>
              <p>Iseghohimhen Ehizefua OgheneKevwe</p>
            </div>

            <div className="d-flex pb-3">
              <strong className="pe-2">Father Name:</strong>
              <p>Iseghohimhen Fred</p>
            </div>

            <div className="d-flex pb-3">
              <strong className="pe-2">Mother Name:</strong>
              <p>Iseghohimhen Rita</p>
            </div>

            <div className="d-flex pb-3">
              <strong className="pe-2">D.O.B:</strong>
              <p>1st April 2015</p>
            </div>

            <div className="d-flex pb-3">
              <strong className="pe-2">Parent/Gurdian:</strong>
              <p>08079022633</p>
            </div>

            <div className="d-flex pb-3">
              <strong className="pe-2">Class:</strong>
              <p>Primary 4</p>
            </div>







          </div>
        </div>













      </div>
      <div className="sidebar" ref={sidebar}>
        <div className="sidebar-head pt-3 mx-4 "><h4>DASHBOARD</h4><FontAwesomeIcon icon={faArrowLeft} onClick={closeSidebar} className="close-sidebar pt-1 sm-text cursor-pointer"/></div>
        <hr/>
        <div  className="user-icon text-light text-center py-1">
          <FontAwesomeIcon icon={faCircleUser} className="xl-text" />
          <h4 className="py-2">MICHEAL</h4>
        </div>
        <ul className="mb-5 sidebar-list">

          <li className={`nav-item ps-3 d-flex py-3 dash ${isActiveDashLink("/dashboard") ? "active-dash-link": ""} `}>
            <FontAwesomeIcon icon={faHouse} className="pe-4"/>
            <Link to="/dashboard" className={`dashboard-link${isActiveDashLink("/dashboard") ?"active-dash-link": ""}`}>DASHBOARD</Link>
          </li>

          <li className={`nav-item ps-3 py-3 fee  ${isActiveDashLink("/paymentStep1") ?"active-dash-link": ""}`}>
            <FontAwesomeIcon icon={faMoneyBills} className="pe-4"/>    
            <Link to="/paymentStep1" className={`payments`}>PAYMENT OFF FESS</Link>    
          </li>

          <li className={`nav-item ps-3 py-3 hist ${isActiveDashLink("/paymentHistory") ?"active-dash-link": ""}`}>
            <FontAwesomeIcon icon={faChartSimple} className="pe-4"/>     
            <Link to="/paymentHistory" className={`payment-history-sidebar`}>PAYMENT HISTORY</Link>        
          </li>

 
          <li className={`nav-item ps-3 py-3 itm ${isActiveDashLink("/schoolItems") ?"active-dash-link": ""}`}>
            <FontAwesomeIcon icon={faCartShopping} className="pe-4"/> 
            <Link to="/schoolItems">SCHOOL ITEMS</Link>
            <FontAwesomeIcon icon={faAngleDown} className="pe-4"/> 
            <div className="dropdown-content" id="dropdown-content">
              <ul>
                <li className="nav-item ps-4 py-2">
                  <a href="#" className="uniform-1">Purchase school wears</a>
                </li>

                <li className="nav-item ps-4 py-2">
                  <a href="#" className="shoe-1">Purchase school shoe</a>
                </li>

                <li className="nav-item ps-4 py-2">
                  <a href="#" className=" ">Purchase books</a>
                </li>
              </ul>
            </div>
          </li>

          <li className={`nav-item ps-3 d-flex py-3 res ${isActiveDashLink("/resultStep1") ?"active-dash-link": ""}`}>
            <FontAwesomeIcon icon={faChartLine} className="pe-4"/> 
            <Link to="/resultStep1" >CHECK RESULT</Link>
          </li>

          <li className={`nav-item ps-3 d-flex py-3 sch ${isActiveDashLink("/schemeStep1") ?"active-dash-link": ""}`}>
            <FontAwesomeIcon icon={faBookOpenReader} className="pe-4"/> 
            <Link to="/schemeStep1" >SCHEME OFF WORK</Link>
          </li>

          <li className={`nav-item ps-3 d-flex py-3 ${isActiveDashLink("/timetable") ?"active-dash-link": ""}`}>
            <FontAwesomeIcon icon={faBookOpen} className="pe-4"/> 
            <Link to="/timetable" >TIMETABLE</Link>
          </li>
        </ul>
        <div className="sidebar-bottom d-flex justify-content-between px-4">
          <button>Sign out</button>
          <i className="bi bi-box-arrow-right"></i>
        </div>

      </div>


      <div className={`dashboard-content ${overlay ? "overlay-background" : ""}`}>
        <nav className="text-light d-flex align-items-center justify-content-between">
          <div className="menu-bar mx-3" onClick={showSidebar}><FontAwesomeIcon icon={faBars} className="sm-text dashboard-menu-bar"/> </div>
          <div className="d-flex align-items-center">
            <a href="#" className="text-light pe-5"><FontAwesomeIcon icon={faBell} className="pe-4 sm-text"/> </a>
            <a href="#" className="text-light"> <FontAwesomeIcon icon={faCartShopping} className="pe-4 sm-text"/></a>
            <a href="#" className="mx-3 text-light   text-center student-info-link">
            <FontAwesomeIcon icon={faCircleUser} onClick={showStudentInfo} className="sm-text"/> 
            </a>
            <div className="">
              <button className="me-3 button-sign-out" onClick={logoutUser}>Sign Out </button>
            </div>
          </div>
        </nav>  

            

      </div>
    </div>
      

  )
}
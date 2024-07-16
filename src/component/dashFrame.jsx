import "../css/dashboard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCircleUser, faHouse, faMoneyBills, faChartSimple, faCartShopping, faAngleDown, faChartLine, faBookOpenReader, faBookOpen, faBell,faArrowLeft, faBars, faXmark, faArrowRightFromBracket, faStore} from "@fortawesome/free-solid-svg-icons"
import { useContext, useEffect,  useRef, useState} from "react"
import { Link, useLocation} from "react-router-dom"
import AuthContext from "../context/AuthContext"

export const DashFrame = () =>{
  const [overlay, setOverlay] = useState(false)
  const sidebar = useRef(null)
  const studentInfo = useRef(null)
  const location = useLocation();

  const toUpperCase = (data) => {
    return typeof data === 'string' ? data.toUpperCase() : '';
  };
  
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

  const {logoutUser, authTokens, userProfile} = useContext(AuthContext)
  

  return(
    <div >
      <div className="student-info-modal py-3 boxing-shadow" ref={studentInfo}>
        <div className="d-flex justify-content-end">
          <button onClick={closeStudentInfo} className="button-dashboard  student-info-modal-close-button">Close<FontAwesomeIcon icon={faXmark} className="px-1" /></button>
  
        </div>

        <div className="row justify-content-center">
          <div className="col-md-3 col-8">
            <div className="student-modal-user-icon pb-5">
              <img className="border-radius-50" src={userProfile && userProfile.user_details[0].passport} alt="" width="100%" height="180px"/>
            </div>
          </div>
        </div>


        <div className="student-info-modal-details">
          <div >
            <div className="d-flex pb-3">
              <strong className="pe-2">Student ID:</strong>
              <p>{userProfile && userProfile.user_details[0].username}</p>
            </div>
            <div className="d-flex pb-3">
              <strong className="pe-2">Name:</strong>
              <p>{userProfile && userProfile.user_details[0].last_name} {userProfile && userProfile.user_details[0].middle_name} {userProfile && userProfile.user_details[0].first_name}</p>
            </div>

            <div className="d-flex pb-3">
              <strong className="pe-2">Father Name:</strong>
              <p>{userProfile && userProfile.user_details[0].father_name}</p>
            </div>

            <div className="d-flex pb-3">
              <strong className="pe-2">Mother Name:</strong>
              <p>{userProfile && userProfile.user_details[0].mother_name}</p>
            </div>

            <div className="d-flex pb-3">
              <strong className="pe-2">D.O.B:</strong>
              <p>{userProfile && userProfile.user_details[0].date_of_birth}</p>
            </div>

            <div className="d-flex pb-3">
              <strong className="pe-2">Parent/Gurdian:</strong>
              <p>{userProfile && userProfile.user_details[0].parents_phone_number}</p>
            </div>

            <div className="d-flex pb-3">
              <strong className="pe-2">Class:</strong>
              <p>{userProfile && userProfile.user_details[0].class_name.name}</p>
            </div>







          </div>
        </div>













      </div>
      <div className="sidebar" ref={sidebar}>
        <div className="sidebar-head pt-3 mx-4 "><h4>DASHBOARD</h4><FontAwesomeIcon icon={faArrowLeft} onClick={closeSidebar} className="close-sidebar pt-1 sm-text cursor-pointer"/></div>
        <hr/>
        <div  className="user-icon text-light text-center py-1">
          <img className="border-radius-50" src={userProfile && userProfile.user_details[0].passport} alt="" width="160px" height="160px"/>
          <h4 className="py-2">  {toUpperCase( userProfile && userProfile.user_details[0].first_name)}</h4>
        </div>
        <ul className="mb-5 sidebar-list dashboard-sidebar-height scroll-bar-y">

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
            <Link to="/schoolStore">SCHOOL STORE</Link>
          </li>

          <li className={`nav-item ps-3 py-3 itm ${isActiveDashLink("/schoolItems") ?"active-dash-link": ""}`}>
            <FontAwesomeIcon icon={faStore} className="pe-4"/> 
            <Link to="/storeAccount"> STORE ACCOUNT</Link>
          </li>

          <li className={`nav-item ps-3 d-flex py-3 res ${isActiveDashLink("/resultStep1") ?"active-dash-link": ""}`}>
            <FontAwesomeIcon icon={faChartLine} className="pe-4"/> 
            <Link to="/resultStep1" >CHECK RESULT</Link>
          </li>

          <li className={`nav-item ps-3 d-flex py-3 sch ${isActiveDashLink("/schemeStep1") ?"active-dash-link": ""}`}>
            <FontAwesomeIcon icon={faBookOpenReader} className="pe-4"/> 
            <Link to="/schemeStep1" >SCHEME OFF WORK</Link>
          </li>
        </ul>
        <div onClick={logoutUser} className="cursor-pointer  sidebar-bottom d-flex justify-content-between py-1 px-4">
          <button>Sign out</button>
          <FontAwesomeIcon className="icon" icon={faArrowRightFromBracket}/>
        </div> 

      </div>


      <div className={`dashboard-content ${overlay ? "overlay-background" : ""}`}>
        <nav className="text-light d-flex align-items-center justify-content-between">
          <div className="menu-bar mx-3" onClick={showSidebar}><FontAwesomeIcon icon={faBars} className="sm-text dashboard-menu-bar"/> </div>
          <div className="d-flex align-items-center">
            <Link to="/noticeBoard" className="text-light"><FontAwesomeIcon icon={faBell} className="pe-4 sm-text"/> </Link>
            <Link to='/schoolStore/cartPage' className="text-light"> <FontAwesomeIcon icon={faCartShopping} className="pe-4 sm-text"/></Link>
            <img onClick={showStudentInfo}  className="mx-3 border-radius-50  cursor-pointer" src={userProfile && userProfile.user_details[0].passport} alt="" width="30px" height="30px"/>
            <div className="me-3">
              <button className=" button-sign-out" onClick={logoutUser}>Sign Out </button>
            </div>
          </div>
        </nav>  

            

      </div>
    </div>
      

  )
}
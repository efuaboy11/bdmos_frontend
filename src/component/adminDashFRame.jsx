import "../css/dashboard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCircleUser, faHouse, faMoneyBills, faChartSimple, faCartShopping, faAngleDown, faChartLine, faBookOpenReader, faBookOpen, faBell,faArrowLeft, faBars, faXmark, faL} from "@fortawesome/free-solid-svg-icons"
import { useContext, useEffect,  useRef, useState} from "react"
import { Link, useLocation} from "react-router-dom"
import AuthContext from "../context/AuthContext"


export const AdminDashFrame = () =>{
  const [overlay, setOverlay] = useState(false)
  const sidebar = useRef(null)
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

    const [isOpen, setIsOpen] = useState(false);
    const [isStudentDropdownOpen, setIsStudentDropdownOpen] = useState(false)
    const [isTeacherDropdownOpen, setIsTeacherDropdownOpen] = useState(false)
    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false)
    const [isSchoolItemDropdownOpen, setIsSchoolItemDropdownOpen] = useState(false)
    const [isSchoolResultDropdownOpen, setIsSchoolResultDropdownOpen] = useState(false)
    const [isUploadItemsDropdownOpen, setIsUploadItemsDropdownOpen] = useState(false)
    const [isViewUploadDropdownOpen, setIsViewUploadDropdownOpen] = useState(false)
    const [isUpdateStatusDropdownOpen, setIsUpdateStatusDropdownOpen] = useState(false)
    const [isViewStatusDropdownOpen, setIsViewStatusDropdownOpen] = useState(false)
    const [isEmailDropdownOpen, setIsEmailDropdownOpen] = useState(false)


  


    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const toggleStudentDropdown = () =>{
      setIsStudentDropdownOpen(!isStudentDropdownOpen)
    }

    const toogleTeacherDropdown = () =>{
      setIsTeacherDropdownOpen(!isTeacherDropdownOpen)
    }
    
    const tooAccountDropdown = () =>{
      setIsAccountDropdownOpen(!isAccountDropdownOpen)
    }

    const toogleSchoolItemDropdownOpen = () =>{
      setIsSchoolItemDropdownOpen(!isSchoolItemDropdownOpen)
    }
    const toogleSchoolResultDropdownOpen = () =>{
      setIsSchoolResultDropdownOpen(!isSchoolResultDropdownOpen)
    }
    const toogleUploadItemDropdownOpen = () =>{
      setIsUploadItemsDropdownOpen(!isUploadItemsDropdownOpen)
    }
    const toogleViewUploadDRopdownOpen = () =>{
      setIsViewUploadDropdownOpen(!isViewUploadDropdownOpen)
    }
    const toogleUpdateStatusDropdownOpen = () =>{
      setIsUpdateStatusDropdownOpen(!isUpdateStatusDropdownOpen)
    }

    const toogleViewStatusDropdownOpen = () =>{
      setIsViewStatusDropdownOpen(!isViewStatusDropdownOpen)
    }
    
    const toogleEmailDropdownOpen = () =>{
      setIsEmailDropdownOpen(!isEmailDropdownOpen)
    }

    const {logoutUser} = useContext(AuthContext)



  return(
    <div>
      <div className="sidebar admin-sidebar" ref={sidebar}>
        <div className="sidebar-head pt-3 mx-4 "><h4>ADMIN PANEL</h4><FontAwesomeIcon icon={faArrowLeft} onClick={closeSidebar} className="close-sidebar pt-1 sm-text cursor-pointer"/></div>
        <hr/>
        <ul className=" sidebar-list scroll-bar-y admin-sidebar-height">
          <li className={`nav-item ps-3 py-3 fee  ${isActiveDashLink("/admin") ?"active-dash-link": ""}`}>
            <FontAwesomeIcon icon={faMoneyBills} className="pe-4"/>    
            <Link to="/admin" className={`payments`}>DASHBOARD</Link>             
          
          </li>

         <li className={`nav-item ps-3 py-3 fee  ${isActiveDashLink("/admin/viewAllStudent") ?"active-dash-link": ""} dropdown-position`}>
            <FontAwesomeIcon icon={faMoneyBills} className="pe-4"/>    
            <Link to="/admin/viewAllStudent">All STUDENTS</Link>    
            <FontAwesomeIcon icon={faAngleDown} className={`${isStudentDropdownOpen ? "rotate-180deg": ""}  dropdown-position-min`} onClick={toggleStudentDropdown}/> 
            <div style={{ display: isStudentDropdownOpen ? 'block' : 'none' }}>
              <ul className="ps-4">
                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/addStudent") ?"active-dash-link": ""}`}>
                  <Link to="/admin/addStudent">Add Student</Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/deleteStudent") ?"active-dash-link": ""}`}>
                  <Link to="/admin/deleteStudent">Delete Student</Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/editStudent") ?"active-dash-link": ""}`}>
                  <Link to="/admin/editStudent">Edit Student</Link> 
                </li>


              </ul>
            </div>
         </li>

          <li className={`nav-item ps-3 py-3 fee  ${isActiveDashLink("/admin/viewAllTeacher") ?"active-dash-link": ""} dropdown-position`}>
            <FontAwesomeIcon icon={faMoneyBills} className="pe-4"/>    
            <Link to="/admin/viewAllTeacher" className={`payments`}>All TEACHERS</Link>    
            <FontAwesomeIcon icon={faAngleDown} className={`${isTeacherDropdownOpen ? "rotate-180deg": ""}  dropdown-position-min`} onClick={toogleTeacherDropdown}/> 
            <div style={{ display: isTeacherDropdownOpen ? 'block' : 'none' }}>
              <ul className="ps-4">
                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/addTeacher") ?"active-dash-link": ""}`}>
                  <Link to="/admin/addTeacher">Add Teacher</Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/deleteTeacher") ?"active-dash-link": ""}`}>
                  <Link to="/admin/deleteTeacher">Delete Teacher</Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/editTeacher") ?"active-dash-link": ""}`}>
                  <Link to="/admin/editTeacher">Edit Teacher</Link> 
                </li>
              </ul>
            </div>
          </li>

          <li className={`nav-item ps-3 py-3 hist ${isActiveDashLink("/paymentHistory") ?"active-dash-link": ""} dropdown-position`}>
            <FontAwesomeIcon icon={faChartSimple} className="pe-4"/>     
            <Link to="/paymentHistory" className={`payment-history-sidebar `}>ACCOUNT</Link>  
            <FontAwesomeIcon icon={faAngleDown} className={`${isAccountDropdownOpen ? "rotate-180deg": ""}  dropdown-position-min`} onClick={tooAccountDropdown}/> 
            <div style={{ display: isAccountDropdownOpen ? 'block' : 'none' }}>
              <ul >
              <li className="nav-item ps-4 py-2">
                  <a href="#" className="uniform-1">Add payment</a>
                </li>
               <li className="nav-item ps-4 py-2">
                  <a href="#" className="uniform-1">All payment</a>
                </li>
                <li className="nav-item ps-4 py-2">
                  <a href="#" className="uniform-1">Approved payment</a>
                </li>

                <li className="nav-item ps-4 py-2">
                  <a href="#" className="shoe-1">Declined payment</a>
                </li>

                <li className="nav-item ps-4 py-2">
                  <a href="#" className=" ">Pending payment</a>
                </li>
              </ul>
            </div>      
          </li>

 
          <li className={`nav-item ps-3 py-3 itm ${isActiveDashLink("/admin/viewSchooltItem") ?"active-dash-link": ""} dropdown-position`}>
            <FontAwesomeIcon icon={faCartShopping} className="pe-4"/> 
            <Link to="/admin/viewSchooltItem">SCHOOL ITEMS</Link>
            <FontAwesomeIcon icon={faAngleDown} className={`${isSchoolItemDropdownOpen ? "rotate-180deg": ""}  dropdown-position-min`} onClick={toogleSchoolItemDropdownOpen}/> 
            <div style={{ display: isSchoolItemDropdownOpen ? 'block' : 'none' }}>
              <ul className="ps-4">
                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/uploadSchoolItems") ?"active-dash-link": ""}`}>
                  <Link to="/admin/uploadSchoolItems">Upload School Items</Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/deleteSchoolItem") ?"active-dash-link": ""}`}>
                  <Link to="/admin/deleteSchoolItem">Delete School Item</Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/EditSchoolItem") ?"active-dash-link": ""}`}>
                  <Link to="/admin/EditSchoolItem">Edit School Item</Link> 
                </li>
              </ul>
            </div>            
          </li>
          <li className={`nav-item ps-3 py-3 itm ${isActiveDashLink("/admin/ViewStudentResult") ?"active-dash-link": ""} dropdown-position`}>
            <FontAwesomeIcon icon={faCartShopping} className="pe-4"/> 
            <Link to="/admin/ViewStudentResult">STUDENT RESULT</Link>
            <FontAwesomeIcon icon={faAngleDown} className={`${isSchoolResultDropdownOpen ? "rotate-180deg": ""}  dropdown-position-min`} onClick={toogleSchoolResultDropdownOpen}/> 
            <div style={{ display: isSchoolResultDropdownOpen ? 'block' : 'none' }}>
              <ul className="ps-4">
                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/UploadResult") ?"active-dash-link": ""}`}>
                  <Link to="/admin/UploadResult">Upload Result</Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/deleteResult") ?"active-dash-link": ""}`}>
                  <Link to="/admin/deleteResult">Delete Result</Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/editResult") ?"active-dash-link": ""}`}>
                  <Link to="/admin/editResult">Edit Result</Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/generateScratchNumber") ?"active-dash-link": ""}`}>
                  <Link to="/admin/generateScratchNumber">Generate Scratch</Link> 
                </li>

                
                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/viewGeneratedScratchNumber") ?"active-dash-link": ""}`}>
                  <Link to="/admin/viewGeneratedScratchNumber">View Scratch</Link> 
                </li>
              </ul>
            </div>            
          </li>

          <li className={`nav-item ps-3 py-3 itm ${isActiveDashLink("/schoolItems") ?"active-dash-link": ""} dropdown-position`}>
            <FontAwesomeIcon icon={faCartShopping} className="pe-4"/> 
            <Link to="/schoolItems">UPLOAD ITEMS</Link>
            <FontAwesomeIcon icon={faAngleDown} className={`${isUploadItemsDropdownOpen ? "rotate-180deg": ""}  dropdown-position-min`} onClick={toogleUploadItemDropdownOpen}/> 
            <div style={{ display: isUploadItemsDropdownOpen ? 'block' : 'none' }}>
              <ul className="ps-4">
                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/uploadEvent") ?"active-dash-link": ""}`}>
                  <Link to="/admin/uploadEvent">Upload Event</Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/uploadNotification") ?"active-dash-link": ""}`}>
                  <Link to="/admin/uploadNotification">Upload Notification</Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/uploadPicture") ?"active-dash-link": ""}`}>
                  <Link to="/admin/uploadPicture">Upload Picture</Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/uploadScheme") ?"active-dash-link": ""}`}>
                  <Link to="/admin/uploadScheme">Upload Scheme</Link> 
                </li>
              </ul>
            </div>            
          </li>

          <li className={`nav-item ps-3 py-3 itm ${isActiveDashLink("/schoolItems") ?"active-dash-link": ""} dropdown-position`}>
            <FontAwesomeIcon icon={faCartShopping} className="pe-4"/> 
            <Link to="/schoolItems">VIEW UPLOADS</Link>
            <FontAwesomeIcon icon={faAngleDown} className={`${isViewUploadDropdownOpen ? "rotate-180deg": ""}  dropdown-position-min`} onClick={toogleViewUploadDRopdownOpen}/> 
            <div style={{ display: isViewUploadDropdownOpen ? 'block' : 'none' }}>
              <ul className="ps-4">
                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/ViewEventUploads") ?"active-dash-link": ""}`}>
                  <Link to="/admin/ViewEventUploads">Event Upload </Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/ViewNotificationUploads") ?"active-dash-link": ""}`}>
                  <Link to="/admin/ViewNotificationUploads">Notification Upload </Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/ViewPictureUploads") ?"active-dash-link": ""}`}>
                  <Link to="/admin/ViewPictureUploads">Picture Upload </Link> 
                </li>
              </ul>
            </div>            
          </li>

          <li className={`nav-item ps-3 py-3 fee  ${isActiveDashLink("/admin/AddClass") ?"active-dash-link": ""} dropdown-position`}>
            <FontAwesomeIcon icon={faMoneyBills} className="pe-4"/>    
            <Link to="/admin/AddClass" >ADD CLASSES</Link>    
            <FontAwesomeIcon icon={faAngleDown} className={`${isUpdateStatusDropdownOpen? "rotate-180deg": ""}  dropdown-position-min`} onClick={toogleUpdateStatusDropdownOpen}/> 
            <div style={{ display: isUpdateStatusDropdownOpen ? 'block' : 'none' }}>
              <ul className="ps-4">
                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/AddSession") ?"active-dash-link": ""}`}>
                  <Link to="/admin/AddSession">Add Session</Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/addSubject") ?"active-dash-link": ""}`}>
                  <Link to="/admin/addSubject">Add Subject</Link> 
                </li>

                
              </ul>
            </div>
          </li>

          <li className={`nav-item ps-3 py-3 fee  ${isActiveDashLink("/admin/viewClass") ?"active-dash-link": ""} dropdown-position`}>
            <FontAwesomeIcon icon={faMoneyBills} className="pe-4"/>    
            <Link to="/admin/viewClass" >VIEW CLASSES</Link> 
            <FontAwesomeIcon icon={faAngleDown} className={`${isViewStatusDropdownOpen ? "rotate-180deg": ""}  dropdown-position-min`} onClick={toogleViewStatusDropdownOpen}/> 
            <div style={{ display: isViewStatusDropdownOpen ? 'block' : 'none' }}>
              <ul className="ps-4">

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/viewSession") ?"active-dash-link": ""}`}>
                  <Link to="/admin/viewSession">View Session</Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/viewSubject") ?"active-dash-link": ""}`}>
                  <Link to="/admin/viewSubject">View Subject</Link> 
                </li>

                
              </ul>
            </div>
          </li>
          
          <li className={`nav-item ps-3 py-3 fee  ${isActiveDashLink("/admin/viewEmail") ?"active-dash-link": ""} dropdown-position`}>
            <FontAwesomeIcon icon={faMoneyBills} className="pe-4"/>    
            <Link to="/admin/viewEmail" className={`payments`}>EMAIL</Link>    
            <FontAwesomeIcon icon={faAngleDown} className={`${isEmailDropdownOpen ? "rotate-180deg": ""}  dropdown-position-min`} onClick={toogleEmailDropdownOpen}/> 
            <div style={{ display: isEmailDropdownOpen ? 'block' : 'none' }}>
              <ul className="ps-4">
                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/sendEmail") ?"active-dash-link": ""}`}>
                  <Link to="/admin/sendEmail">Send Email</Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/sendBulkEmail") ?"active-dash-link": ""}`}>
                  <Link to="/admin/sendBulkEmail">Send Bulk Email</Link> 
                </li>

                <li className={`nav-item ps-4 py-2 ${isActiveDashLink("/admin/viewEmail") ?"active-dash-link": ""}`}>
                  <Link to="/admin/viewEmail">View  Email</Link> 
                </li>

                
              </ul>
            </div>
          </li>


          


          <li className={`nav-item ps-3 d-flex py-3 mb-5 sch ${isActiveDashLink("/schemeStep1") ?"active-dash-link": ""}`}>
            <FontAwesomeIcon icon={faBookOpenReader} className="pe-4"/> 
            <Link to="/schemeStep1" >Settings</Link>
          </li>




        </ul>

      </div>


      <div className={`dashboard-content ${overlay ? "overlay-background" : ""} `}>
        <nav className="text-light d-flex align-items-center justify-content-between">
          <div className="menu-bar mx-3" onClick={showSidebar}><FontAwesomeIcon icon={faBars} className="sm-text dashboard-menu-bar"/> </div>
          <div className="d-flex align-items-center">
            <a href="#" className="text-light pe-5"><FontAwesomeIcon icon={faBell} className="pe-4 sm-text"/> </a>
            <a href="#" className="text-light"> <FontAwesomeIcon icon={faCartShopping} className="pe-4 sm-text"/></a>
            <a href="#" className="mx-3 text-light   text-center student-info-link">
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
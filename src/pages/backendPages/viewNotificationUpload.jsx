import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faEye, faL, faTrashCan, faUser, faX} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect, useContext } from "react"
import AuthContext from "../../context/AuthContext"
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from "@mui/material"

export const ViewNotificationUploaded= () =>{
  const {authTokens} = useContext(AuthContext)

  const [date, setDate] = useState("")
  const [teacherName, setTeacherName] = useState("")
  const [datas, setDatas] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedNotificationID, setSelectedNotificationID] = useState(null)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationModal, setNotificationModal] = useState(false) 
  
  const [alerts, setAlerts] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)


  
  const filterAllNotification = async() => {
    let url;
    if (date.length !== 0) {
      url = `https://bdmos.onrender.com/api/notifications/?search=${date}`;
    } else if (teacherName.length !== 0) {
      url = `https://bdmos.onrender.com/api/notifications/?search=${teacherName}`;
    } else {
      getNotification();
      return;
    }

    let response = await fetch(url,{
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${authTokens.access}`
      }
    })

    const data = await response.json()

    if(response.ok){
      setDatas(data)
    }else{
      console.error("Failed to fetch students")
    }
  }


  const getNotification = async() => {
    let response = await fetch("https://bdmos.onrender.com/api/notifications/",{
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
    });

    const data = await response.json()

    if(response.ok){
      const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setDatas(sortedData)
    }else{
      console.error("Failed to fetch students", response.statusText)
    }
  }

  const showDeleteModal = (id) =>{
    setSelectedNotificationID(id)
    setShowModal(true)
  }

  const hideDeleteModal = () => {
    setShowModal(false)
    setSelectedNotificationID(null)
  }

  const deleteNotification = async () =>{
    setdisablebutton(true)

    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    let response = await fetch(`https://bdmos.onrender.com/api/notifications/${selectedNotificationID}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authTokens.access}`
      }
    })

    if (response.ok) {
      setShowAlert(true)
      setAlerts("Notification deleted Sucessfully")
      setAlertSeverity('success')
      setLoader(false)
      setdisablebutton(false)
      console.log('sucess')
      setSelectedNotificationID(datas.filter(dat => dat.id !== selectedNotificationID))
      setShowModal(false)
    } else {
      let errorData = await response.json();
      const errorMessage = errorData.error
      setShowAlert(true)
      setAlerts('There is an error in processing your data')
      setAlertSeverity('error')
      setLoader(false)
      setdisablebutton(false)
      console.log(errorMessage)
    }
  }


  useEffect(() =>{
    if(!date && !teacherName){
      getNotification()
    }else if(date){
      filterAllNotification()
    }else if(teacherName){
      filterAllNotification()
    }else{
      getNotification()
    }

  },[datas])


  const notificationContext = (text) =>{
    setNotificationMessage(text)
    console.log(text)
    setNotificationModal(true)



  }
  const closeModal = () => {
    setNotificationModal(false)
  }

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  
	return(
		<div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
			<section>
        <div className="main-content">
          <div className="alert-container">
            <div className="alert-position">
              {showAlert && (
                <Alert
                  severity={alertSeverity}
                  onClose={() => setShowAlert(false)}
                >
                  {alerts}
                </Alert>
              )}
            </div>
          </div>
          {showModal &&
            <section className="overlay-background">
              <div className="admin-modal-container">
                <div className="admin-modal-content">
                  <h5>Delete Event?</h5>
                  <hr />
                  <p>This will delete the Notification.</p>
                  <div className="d-flex justify-content-between py-3">
                    <div></div>
                    <div>
                      <button className="admin-modal-close mx-3"  onClick={hideDeleteModal}>Cancel</button>
                      <button className="admin-modal-delete" disabled={disablebutton} onClick={deleteNotification}>{loader ? <CircularProgress color="inherit"/> : "Delete"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
          
          {notificationModal && 
            <section className="overlay-background">
             <div className="admin-notification-modal-conatiner">
               <div className="admin-notifiction-modal-content">
                 {notificationMessage !== '' &&
                  <div>
                    <div className="d-flex justify-content-end">
                     <p><FontAwesomeIcon className="cursor-pointer" onClick={closeModal}  icon={faX}/></p>                  
                    </div>
                    <p>{notificationMessage}</p>               
                  </div>


 
 
              
                 }
 
               </div>
 
             </div>
           </section>       
          }

          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>View Notification</h5>
                <p>List Off Notifications</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin/uploadNotification" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>Upload Notification</Link>
						  </div>
            </div>

            <form action="">
              <div className="row add-student g-2">
                <div className="col-sm-4 mb-4">
                  <input  className=" p-2 form-dark border-radius admin-input " placeholder="Search by Date..." value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>

                <div className="col-sm-4 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius admin-input" placeholder="Search by Teacher Name..." value={teacherName} onChange={(e) => setTeacherName(e.target.value)}/>
                </div>
              </div>            
            </form> 



            <section className="container-lg navyblue-blackground-dash">
              <div className="view-content-height scroll-bar">
                <div className="non-wrap-text">
                  <p className=" ps-3 py-2">Notification Uploads</p>
                  <table className="table1 ">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Text</th>
												<th>Date</th>
                        <th>Teacher Responsible</th>
                        <th>Actions</th>


                      </tr>
                    </thead>
                    

                    <tbody className="admin-home-table view-schoolitems-table ">
                      {datas.map((data) =>(
                        <tr>
                          <td> {data.id} </td>
                          <td>{truncateText(data.message, 5)}</td>
                          <td>{data.date}</td>
                          <td>{data.teachers_name.first_name}</td>
                          <td>
                          <FontAwesomeIcon onClick={() => notificationContext(data.message)} className="text-center cursor-pointer" icon={faEye} />
                          <FontAwesomeIcon onClick={() => showDeleteModal(data.id)} className="text-center cursor-pointer ps-3" icon={faTrashCan}/>
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </div>
              </div>


            </section>
          </div>
        </div>
      </section>

      
		</div>
	)
}
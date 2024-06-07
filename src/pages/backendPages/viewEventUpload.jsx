import { AdminDashFrame } from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import { faTrashCan, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect, useContext } from "react"
import AuthContext from "../../context/AuthContext"
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from "@mui/material"

export const ViewEventUploaded = () => {
  const { authTokens } = useContext(AuthContext)
  const [eventDate, seteventDate] = useState("")
  const [eventDatas, setEventDatas] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedEventID, setSelectedEventID] = useState(null)



  const [alerts, setAlerts] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)

  const filterAllEvent = async() => {
    let url;
    if (eventDate.length !== 0) {
      url = `https://bdmos.onrender.com/api/events/?search=${eventDate}`;
    } else {
      getEvent();
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
      setEventDatas(data)
    }else{
      console.error("Failed to fetch students")
    }
  }

  const getEvent = async () => {
    let response = await fetch("https://bdmos.onrender.com/api/events/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
    });

    const data = await response.json()

    if (response.ok) {
      const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setEventDatas(sortedData)
    } else {
      console.error("Failed to fetch events", response.statusText)
    }
  }

  const showDeleteModal = (id) => {
    setSelectedEventID(id)
    setShowModal(true)
  }

  const hideDeleteModal = () => {
    setShowModal(false)
    setSelectedEventID(null)
  }

  const deleteEvent = async () => {
    setdisablebutton(true)

    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }
    let response = await fetch(`https://bdmos.onrender.com/api/events/${selectedEventID}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authTokens.access}`
      }
    })

    if (response.ok) {
      setShowAlert(true)
      setAlerts("Event deleted Sucessfully")
      setAlertSeverity('success')
      setLoader(false)
      setdisablebutton(false)
      console.log('sucess')
      setEventDatas(eventDatas.filter(event => event.id !== selectedEventID))
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

  useEffect(() => {
    if(!eventDate){
      getEvent()
    }else if(eventDate){
      filterAllEvent()
    }else{
      getEvent()
    }

  }, [eventDatas])

  return (
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
                  <p>This will delete the event.</p>
                  <div className="d-flex justify-content-between py-3">
                    <div></div>
                    <div>
                      <button className="admin-modal-close mx-3"  onClick={hideDeleteModal}>Cancel</button>
                      <button className="admin-modal-delete" disabled={disablebutton} onClick={deleteEvent}>{loader ? <CircularProgress color="inherit"/> : "Delete"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }

          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>View Event</h5>
                <p>List Of Events uploaded</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
                <Link to="/admin/uploadEvent" className="light-navyblue-background p-3 border-radius">
                  <FontAwesomeIcon icon={faUser} className="px-2" />Upload Event
                </Link>
              </div>
            </div>

            <form>
              <div className="row add-student g-2">

                <div className="col-sm-3 mb-4">
                  <input type="text" className="p-2 form-dark border-radius admin-input" placeholder="Search by Date.." value={eventDate} onChange={(e) => seteventDate(e.target.value)} />
                </div>

              </div>
            </form>

            <section className="container-lg navyblue-blackground-dash">
              <div className="view-content-height scroll-bar">
                <div className="non-wrap-text">
                  <p className="ps-3 py-2">Event Upload</p>
                  <table className="table1">
                    <thead>
                      <tr>
                        <th>img</th>
                        <th>ID</th>
                        <th>Text</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="admin-home-table view-schoolitems-table">
                      {eventDatas.map((eventData) => (
                        <tr key={eventData.id}>
                          <td><img src={eventData.image} alt="Event" /></td>
                          <td>{eventData.id}</td>
                          <td>{eventData.description}</td>
                          <td>{eventData.date}</td>
                          <td onClick={() => showDeleteModal(eventData.id)}>
                            <FontAwesomeIcon className="text-center cursor-pointer" icon={faTrashCan} />
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

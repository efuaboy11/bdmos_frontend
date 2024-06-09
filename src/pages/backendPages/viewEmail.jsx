import { AdminDashFrame } from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import { faEye, faStarOfLife, faTrashCan, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"

export const ViewEmail = () => {
  const [email, setEmail] = useState("") 
  const [selectedEmailID, setSelectedEmailID] = useState("")
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [emailDetails, setEmailDetails] = useState([])  // Corrected typo
  const [showModal, setShowModal] = useState(false)

  const { authTokens } = useContext(AuthContext)
  const [datas, setDatas] = useState([])

  const [alerts, setAlerts] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const [loader, setLoader] = useState("")
  const [disableButton, setDisableButton] = useState(false)

  
  const filterAllEmail = async() => {
    let url;
    if (email.length !== 0) {
      url = `https://bdmos.onrender.com/api/send-email/?search=${email}`;
    } else {
      getEmails();
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


  const getEmails = async () => {
    let response = await fetch("https://bdmos.onrender.com/api/send-email/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
    });

    const data = await response.json()

    if (response.ok) {
      const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

      setDatas(sortedData)
    } else {
      console.error("Failed to fetch emails", response.statusText)
    }
  }

  const showDeleteModal = (id) => {
    setSelectedEmailID(id)
    console.log(selectedEmailID)
    setShowModal(true)
  }

  const hideDeleteModal = () => {
    setShowModal(false)
    setSelectedEmailID(null)
  }

  const deleteEmail = async () => {
    setDisableButton(true)

    if (loader) {
      setLoader(false)
    } else {
      setLoader(true)
    }
    let response = await fetch(`https://bdmos.onrender.com/api/send-email/${selectedEmailID}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authTokens.access}`
      }
    })

    if (response.ok) {
      setShowAlert(true)
      setAlerts("Email deleted successfully")
      setAlertSeverity('success')
      setLoader(false)
      setDisableButton(false)
      console.log('success')
      setDatas(datas.filter(dat => dat.id !== selectedEmailID))
      setShowModal(false)
      setShowEmailModal(false)
    } else {
      let errorData = await response.json();
      const errorMessage = errorData.error
      setShowAlert(true)
      setAlerts('There is an error in processing your data')
      setAlertSeverity('error')
      setLoader(false)
      setDisableButton(false)
      console.log(errorMessage)
    }
  }

  useEffect(() => {
    if(!email){
      getEmails()
    }else if(email){
      filterAllEmail()
    }

  }, [datas])

  const emailContext = (id, to, subject, body, date) => {
    setEmailDetails([{ id, to, subject, body, date }]); // Corrected to set an array with a single object
    console.log([{ id, to, subject, body, date }]); // Log the new state object
    setShowEmailModal(true); // Show the email modal
    setSelectedEmailID(id)
    // setShowEmailModal(false)
  }

  const closeModal = () => {
    setShowEmailModal(false)
  }

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

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
                  <h5>Delete Email?</h5>
                  <hr />
                  <p>This will delete the email.</p>
                  <div className="d-flex justify-content-between py-3">
                    <div></div>
                    <div>
                      <button className="admin-modal-close mx-3" onClick={hideDeleteModal}>Cancel</button>
                      <button className="admin-modal-delete" disabled={disableButton} onClick={deleteEmail}>
                        {loader ? <CircularProgress color="inherit" /> : "Delete"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }

          {showEmailModal &&
            <section className="overlay-background">
              <div className="admin-email-modal-container">
                <div className="admin-email-modal-content">
                  {emailDetails.length > 0 && (
                    <>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <div className="p-1">
                            <FontAwesomeIcon icon={faStarOfLife} />
                          </div>
                          <h4>Email outbox</h4>
                        </div>

                        <div className="admin-email-modal-content-status">
                          <p>Delivered</p>
                        </div>
                      </div>

                      <hr />

                      <div className="row pb-3">
                        <p className="col-1 pt-1">To:</p>
                        <p className="col-8 admin-email-modal-content-input ms-4">{emailDetails[0].to}</p>
                      </div>

                      <div className="row">
                        <p className="col-1 pt-1">Subject:</p>
                        <p className="col-8 admin-email-modal-content-input ms-4">{emailDetails[0].subject}</p>
                      </div>

                      <div className="admin-email-modal-content-message scroll-bar-black">
                        <h6>Message:</h6>
                        <p>{emailDetails[0].body}</p>
                      </div>

                      <div className="mt-3 admin-email-modal-content-date">
                        <p>Date: {emailDetails[0].date}</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <div></div>
                        <div>
                          <button onClick={closeModal} className="admin-email-modal-content-btn2">Cancel</button>
                          <button className="admin-email-modal-content-btn" disabled={disableButton} onClick={deleteEmail}>
                            {loader ? <CircularProgress color="inherit" /> : "Delete"}
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </section>
          }

          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>View Email</h5>
                <p>Email History</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
                <Link to="/admin/sendEmail" className="light-navyblue-background p-3 border-radius">
                  <FontAwesomeIcon icon={faUser} className="px-2" />Send Email
                </Link>
              </div>
            </div>

            <form action="">
              <div className="row add-student">
                <div className="col-sm-4 mb-4">
                  <input
                    type="text"
                    className="p-2 form-dark border-radius admin-input"
                    placeholder="Search Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
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
                        <th>ID</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody className="admin-home-table view-schoolitems-table">
                      {datas.map((data) => (
                        <tr key={data.id}>
                          <td>{data.id}</td>
                          <td>{data.to}</td>
                          <td>{truncateText(data.body, 5)}</td>
                          <td>{data.date}</td>
                          <td>
                            <FontAwesomeIcon
                              className="pe-3 cursor-pointer"
                              icon={faEye}
                              onClick={() => emailContext(data.id, data.to, data.subject, data.body, data.date)}
                            />
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              className="cursor-pointer"
                              onClick={() => showDeleteModal(data.id)}
                            />
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

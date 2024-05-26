import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faTrashCan, faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect, useContext } from "react"
import AuthContext from "../../context/AuthContext"
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from "@mui/material"

export const ViewSubject = () =>{
  const {authTokens, details} = useContext(AuthContext)


  const [className, setClassName] = useState("")
  const [subject, setSubject] = useState("")


  const [datas, setdatas] = useState([])

  const [showModal, setShowModal] = useState(false)
  const [selectedSubjectID, setSelectedSubjectID] = useState(null)

  const [alerts, setAlerts] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)


  const getSubject = async() => {
    let response = await fetch("https://bdmos.onrender.com/api/subjects/",{
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
    });

    const data = await response.json()

    if(response.ok){
      setdatas(data)
    }else{
      console.error("Failed to fetch students", response.statusText)
    }
  }

  const showDeleteModal = (id) => {
    setSelectedSubjectID(id)
    setShowModal(true)
  }

  const hideDeleteModal = () => {
    setShowModal(false)
    setSelectedSubjectID(null)
  }

  const deleteSubject = async () => {
    setdisablebutton(true)

    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }
    let response = await fetch(`https://bdmos.onrender.com/api/subjects/${selectedSubjectID}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authTokens.access}`
      }
    })

    if (response.ok) {
      setShowAlert(true)
      setAlerts("Subject deleted Sucessfully")
      setAlertSeverity('success')
      setLoader(false)
      setdisablebutton(false)
      console.log('sucess')
      setdatas(datas.filter(dat => dat.id !== selectedSubjectID))
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
    getSubject()
  },[datas])



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
            <section>
              <div className="admin-modal-container">
                <div className="admin-modal-content">
                  <h5>Delete Subjects?</h5>
                  <hr />
                  <p>This will delete the Subject.</p>
                  <div className="d-flex justify-content-between py-3">
                    <div></div>
                    <div>
                      <button className="admin-modal-close mx-3"  onClick={hideDeleteModal}>Cancel</button>
                      <button className="admin-modal-delete" disabled={disablebutton} onClick={deleteSubject}>{loader ? <CircularProgress color="inherit"/> : "Delete"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>View Subject</h5>
                <p>List Off Subject uploaded</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin/addSubject" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>Upload Subject</Link>
						  </div>
            </div>

            <form action="">
              <div className="row add-student">

                <div className="col-md-4 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius admin-input" placeholder="Search by Subject..." value={subject} onChange={(e) => setSubject(e.target.value)}/>
                </div>

              </div>            
            </form> 



            <section className="container-lg navyblue-blackground-dash">
              <div className="view-content-height scroll-bar">
                <div className="non-wrap-text">
                  <p className=" ps-3 py-2">Event Upload</p>
                  <table className="table1 ">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Subjects</th>
                        <th>description</th>
                        <th>Actions</th>

                      </tr>
                    </thead>
                    

                    <tbody className="admin-home-table view-schoolitems-table ">
                      {datas.map((data) =>(
                        <tr>
                          <td>{data.id}</td>
                          <td>{data.name}</td>
                          <td>{data.description}</td>
                          <td onClick={() => showDeleteModal(data.id)}>
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
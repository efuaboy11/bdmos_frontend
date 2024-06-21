import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faTrashCan, faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"


export const ViewScheme = () =>{

  const [parentName, setParentName] = useState('')

  const {authTokens, details} = useContext(AuthContext)

  const [datas, setdatas] = useState([])

  const [showModal, setShowModal] = useState(false)
  const [selectedSchemeID, setSelectedSchemeID] = useState(null)

  const [alerts, setAlerts] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)

  const getScheme = async() => {
    let response = await fetch("https://bdmos.onrender.com/api/scheme/",{
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
    selectedSchemeID(id)
    setShowModal(true)
  }

  const hideDeleteModal = () => {
    setShowModal(false)
    selectedSchemeID(null)
  }

  const deleteScheme = async () => {
    setdisablebutton(true)

    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }
    let response = await fetch(`https://bdmos.onrender.com/api/scheme/${selectedSchemeID}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authTokens.access}`
      }
    })

    if (response.ok) {
      setShowAlert(true)
      setAlerts("Scheme off Work deleted Sucessfully")
      setAlertSeverity('success')
      setLoader(false)
      setdisablebutton(false)
      console.log('sucess')
      setdatas(datas.filter(dat => dat.id !== selectedSchemeID))
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
    getScheme()
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
            <section className="overlay-background">
              <div className="admin-modal-container">
                <div className="admin-modal-content">
                  <h5>Delete Scheme off work?</h5>
                  <hr />
                  <p>This will delete the Scheme off work.</p>
                  <div className="d-flex justify-content-between py-3">
                    <div></div>
                    <div>
                      <button className="admin-modal-close mx-3"  onClick={hideDeleteModal}>Cancel</button>
                      <button className="admin-modal-delete" disabled={disablebutton} onClick={deleteScheme}>{loader ? <CircularProgress color="inherit"/> : "Delete"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>View Scheme Off Work</h5>
                <p>List Off Scheme Uploaded</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin/uploadScheme" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>Add Scheme</Link>
						  </div>
            </div>

            <form>
              <div className="row add-student">
                <div className="col-sm-4 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius admin-input " placeholder="Search by class" value={parentName} onChange={(e) => setParentName(e.target.value)}/>
                </div>

                <div className="col-sm-4 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius admin-input " placeholder="Search by Session" value={parentName} onChange={(e) => setParentName(e.target.value)}/>
                </div>

                <div className="col-sm-4 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius admin-input " placeholder="Search by Term" value={parentName} onChange={(e) => setParentName(e.target.value)}/>
                </div>
                
              </div>            
            </form> 



            <section className="container-lg navyblue-blackground-dash">
              <div className="view-content-height scroll-bar">
                <div className="non-wrap-text">
                  <p className=" ps-3 py-2">Scheme Upload</p>
                  <table className="table1 ">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Class</th>
                        <th>Session</th>
                        <th>Term</th>
                        <th>Date</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    

                    <tbody className="admin-home-table view-schoolitems-table ">
                      {datas.map((data) =>(
                        <tr>
                          <td>{data.id}</td>
                          <td>Primary 4</td>
                          <td>2021/2022</td>
                          <td>First Term</td>
                          <td>{data.date}</td>
                          <td><FontAwesomeIcon className="text-center cursor-pointer" icon={faTrashCan} /></td>

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
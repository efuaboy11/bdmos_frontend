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


export const ViewAllParent = () =>{

  const [parentName, setParentName] = useState('')

  const {authTokens, details} = useContext(AuthContext)

  const [datas, setdatas] = useState([])

  const [showModal, setShowModal] = useState(false)
  const [selectedParentID, setSelectedParentID] = useState(null)

  const [alerts, setAlerts] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)


  const filterAllParent = async() => {
    let url;
    if (parentName.length !== 0) {
      url = `https://bdmos.onrender.com/api/parents/?search=${parentName}`;
    } else {
      getParents();
      return;
    }

    let response = await fetch(url,{
      method: "GET",
      headers: {
        "Content-Type":"application/json"
      }
    })

    const data = await response.json()

    if(response.ok){
      setdatas(data)
    }else{
      console.error("Failed to fetch students")
    }
  }

  const getParents = async() => {
    let response = await fetch("https://bdmos.onrender.com/api/parents/",{
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
    setSelectedParentID(id)
    setShowModal(true)
  }

  const hideDeleteModal = () => {
    setShowModal(false)
    setSelectedParentID(null)
  }

  const deleteParent = async () => {
    setdisablebutton(true)

    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }
    let response = await fetch(`https://bdmos.onrender.com/api/parents/${selectedParentID}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authTokens.access}`
      }
    })

    if (response.ok) {
      setShowAlert(true)
      setAlerts("Parent details deleted Sucessfully")
      setAlertSeverity('success')
      setLoader(false)
      setdisablebutton(false)
      console.log('sucess')
      setdatas(datas.filter(dat => dat.id !== selectedParentID))
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
    if(!parentName){
      getParents()
    }else if(parentName){
      filterAllParent()
    }else{
      getParents()
    }


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
                  <h5>Delete Parent Details?</h5>
                  <hr />
                  <p>This will delete the Parent Details.</p>
                  <div className="d-flex justify-content-between py-3">
                    <div></div>
                    <div>
                      <button className="admin-modal-close mx-3"  onClick={hideDeleteModal}>Cancel</button>
                      <button className="admin-modal-delete" disabled={disablebutton} onClick={deleteParent}>{loader ? <CircularProgress color="inherit"/> : "Delete"}</button>

                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>View Parents</h5>
                <p>List Off All Parents</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin/addParent" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>Add Parent</Link>
						  </div>
            </div>

            <form>
              <div className="row add-student">
                <div className="col-sm-4 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius admin-input " placeholder="Search by Parent Name" value={parentName} onChange={(e) => setParentName(e.target.value)}/>
                </div>
              </div>            
            </form> 



            <section className="container-lg navyblue-blackground-dash">
              <div className="view-content-height scroll-bar">
                <div>
                  <p className=" ps-3 py-2">Parent Upload</p>
                  <table className="table1 ">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Parent Name</th>
                        <th>Children</th>
                        <th>Home Address</th>
                        <th>Phone Number</th>
                        <th>Email Address</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    

                    <tbody className="admin-home-table view-schoolitems-table ">
                        {datas.map((data) =>(
                          <tr>
                            <td>{data.id}</td>
                            <td><img src={data.image} alt="" /></td>
                            <td>{data.name}</td>
                            <td>mike</td>
                            <td>{data.address}</td>
                            <td>{data.phone_number}</td>
                            <td>{data.email}</td>
                            <td><FontAwesomeIcon onClick={() => showDeleteModal(data.id)}  className="text-center cursor-pointer" icon={faTrashCan} /></td>
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
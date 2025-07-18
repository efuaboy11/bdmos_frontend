import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"
import { LoadingSpiner } from "../../component/spin"


export const DeleteParent = () =>{
  const [parentName, setParentName] = useState('')
  const {authTokens} = useContext(AuthContext)


  const [alerts, setAlerts] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)

  const onSubmit = (data, e) =>{
    e.preventDefault()
    setdisablebutton(true)
    if(isValid){
    
      console.log(data)
      deleteParent(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

  const deleteParent = async (e) => {
    e.preventDefault();
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    try {
      let response = await fetch(`https://bdmos.onrender.com/api/parents/${parentName}/`, {
        method: "DELETE",
        headers: {
          Authorization:`Bearer ${authTokens.access}`
        }
      });

      if (response.ok) {
        setShowAlert(true)
        setAlerts("Parent deleted Sucessfully")
        setAlertSeverity('success')
        setLoader(false)
        setdisablebutton(false)
        console.log('sucess')
        setParentName('')
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
    }catch (error) {
      console.error("Error occurred while deleting user:", error);
      alert("An error occurred while trying to delete the user. Please try again.");
    }
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

          {loader &&
          < LoadingSpiner/>
        }
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>delete Parent</h5>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to='/admin/viewAllParent'>  View Parent</Link>
						  </div>
            </div>


            <section>
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE ENTER THE STUDENT ID YOU WANT TO DELETE</p>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row justify-content-center mx-2">
                    <div className="col-md-10 mt-5">
                      <input className={`form-control delete-student-input form-dark ${errors.deleteParent ? 'error-input' : ''}`} {...register('deleteParent', {required: true})} value={parentName} onChange={(e) => setParentName(e.target.value)}type="text" placeholder="Mary Mark"/>
                      {errors.deleteParent && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>
                    <div className="col-md-10 pt-3 pb-5 mb-4">
                      <button type="submit" className="admin-btn py-2 px-5" disabled={disablebutton}>Submit</button>
                    </div>
                  </div>
                </form>



              </div>
            </section>

        
          </div>
        </div>

      </section>
		</div>
	)
  

 


}
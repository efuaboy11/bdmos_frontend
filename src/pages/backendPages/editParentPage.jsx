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


export const EditParentPage = () =>{
  const {authTokens, details} = useContext(AuthContext)

  const [parentName, setParentName] = useState(details ? details.first_name : "")
  const [parentPhoneNumber, setParetNumber] = useState(details ? details.middle_name : "")
  const [childName, setChildName] = useState(details ? details.last_name : "")
  const [parentEmail, setParentEmail] = useState(details ? details.date_of_birth : "")


  const [alert, setAlert] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const [loader, setLoader] = useState("")
  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [disablebutton, setdisablebutton] = useState(false)


  const onSubmit = (data, e) =>{
    e.preventDefault()
    setdisablebutton(true)
    if(isValid){
    
      console.log(data)
      updateParent(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

  const updateParent = async(e) => {
    e.preventDefault()
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    const formData = new FormData()
    formData.append("first_name", parentName);
    formData.append("middle_name", parentPhoneNumber);
    formData.append("last_name", parentEmail);
    formData.append("date_of_birth", childName);

    console.log(formData)

    try {
      const response = await fetch(`https://bdmos.onrender.com/api/students/${details.name}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${authTokens.access}`
        },
        body: formData
      })
      if (response.status === 200 || response.status === 200){
        setShowAlert(true)
        setAlert("Parent Details Updated Successfully")
        console.log('sucess')
        setAlertSeverity("success")
        setLoader(false)
        setdisablebutton(false)
      }else{
        const errorData = await response.json()
        const errorMessage = errorData.error
        setShowAlert(true)
        setAlert('There an error in processing your data')
        setAlertSeverity("error")
        console.log(errorMessage)
        setLoader(false)
        setdisablebutton(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return(
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <div className="main-content ">
        <div className="alert-container">
          <div className="alert-position">
            {showAlert && (
              <Alert
                severity={alertSeverity}
                onClose={() => setShowAlert(false)}
              >
                {alert}
              </Alert>
            )}
          </div>
        </div>
        <section className="mt-3 container">
          <div className="row my-3 pb-4">
            <div className="col-md-8 col-sm-6 col-6">
              <h4 >Update Parent Proile</h4>
              <p>Make Changes</p>
            </div>
          </div>
        </section>

        <section className="container-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row justify-content-center mx-2">
              <div className="col-md-5 mt-5">
                <label htmlFor="" className="form-label">Parent/Gudian Name</label>
                <input className={`form-control delete-student-input form-dark ${errors.parentName ? 'error-input' : ''}`} {...register('parentName', {required: true})} value={parentName} onChange={(e) => setParentName(e.target.value)}type="text" placeholder="Mr John Doe"/>
                {errors.parentName && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-md-5 mt-5">
                <label htmlFor="" className="form-label">Phone Number</label>
                <input className={`form-control delete-student-input form-dark ${errors.parentPhoneNumber ? 'error-input' : ''}`} {...register('parentPhoneNumber', {required: true})} value={parentPhoneNumber} onChange={(e) => setParetNumber(e.target.value)}type="text" placeholder="08079022633"/>
                {errors.parentPhoneNumber && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-md-5 mt-5">
                <label htmlFor="" className="form-label">Email Addresss</label>
                <input className={`form-control delete-student-input form-dark ${errors.parentEmail ? 'error-input' : ''}`} {...register('parentEmail', {required: true})} value={parentEmail} onChange={(e) => setParentEmail(e.target.value)}type="text" placeholder="parent@gmail.com"/>
                {errors.parentEmail && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-md-10 mt-5">
                <label htmlFor="" className="form-label">Children Name </label>
                <input className={`form-control delete-student-input form-dark ${errors.childName ? 'error-input' : ''}`} {...register('childName', {required: true})} value={childName} onChange={(e) => setChildName(e.target.value)}type="text" placeholder="Mary, john, happy"/>
                {errors.childName && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-md-10 pt-3 pb-5 mb-4">
                <button type="submit" className="admin-btn py-2 px-5" disabled={disablebutton}>{loader ? <CircularProgress color="inherit"/> : "Submit"}</button>
              </div>
            </div>
          </form>

        </section>
        


      </div>
    </div>
  )  

 


}
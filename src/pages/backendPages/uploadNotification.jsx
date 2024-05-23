import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useContext } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"


export const UploadNotification = () =>{
  const {authTokens} = useContext(AuthContext)


  const [teacherName, setTeacherName] = useState("")
  const [date, setDate] = useState("")
  const [text, setText] = useState("")

  const [alert, setAlert] = useState("")
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
      addNotification(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

  const addNotification = async(e) =>{
    e.preventDefault()
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    const formData = new FormData()
    formData.append('teacher_name', teacherName);
    formData.append('date', date);
    formData.append('message', text);
    console.log(formData)

    try{
      const response = await fetch('https://bdmos.onrender.com/api/notifications/',{
        method: 'POST',
        body: formData,
        headers:{
          Authorization: `Bearer ${authTokens.access}`
        }
      })
      if(response.status === 201){
        setShowAlert(true)
        setAlert("Notification Created Successfully")
        console.log('sucess')
        setAlertSeverity("success")
        setLoader(false)
        setdisablebutton(false)
        setTeacherName('')
        setDate('')
        setText('')

      }else{
        const errorData = await response.json()
        const errorMessage = errorData.error
        setShowAlert(true)
        setAlert('There is an error processing your data')
        setAlertSeverity("error")
        console.log(errorMessage)
        setLoader(false)
        setdisablebutton(false)

      }
    }catch (error){
      console.log(error)
    }

  }



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
                  {alert}
                </Alert>
              )}
            </div>
          </div>
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>Upload Notification</h5>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to='/admin/ViewNotificationUploads'>View Notification</Link>
						  </div>
            </div>


            <section>
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE FILL IN THE REQUIRED DETAILS</p>
                </div>

               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row  mx-2">
                      <div className="col-md-6 mt-3">
                        <label htmlFor="" className="p-2">Teachers Name</label>
                        <input className={`form-control  form-dark ${errors.teacherName ? 'error-input' : ''}`} {...register('teacherName', {required: true})} type="text" placeholder="Enter name..."  value={teacherName} onChange={(e) => setTeacherName(e.target.value)}/>
                        {errors.teacherName && <span style={{color: 'red'}}>This Feild is required</span>} 
                      </div>
                      <div className="col-md-6 mt-3">
                        <label htmlFor="" className="p-2">Date</label>
                        <input className={`form-control  form-dark ${errors.date ? 'error-input' : ''}`} {...register('date', {required: true})} type="date" placeholder="e.g Mr John" value={date} onChange={(e) => setDate(e.target.value)} />
                        {errors.date && <span style={{color: 'red'}}>This Feild is required</span>} 
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="" className="p-2">Text</label>
                        <textarea className={`form-control  form-dark ${errors.text ? 'error-input' : ''}`} {...register('text', {required: true})}  value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        {errors.img && <span style={{color: 'red'}}>This Feild is required</span>} 
                      </div>
                      <div className="col-md-10 pt-3 pb-5 mb-4">
                      <button className="admin-btn py-2 px-5" type="submit" disabled={disablebutton}>{loader ? <CircularProgress color="inherit"/> : "Submit"}</button>
                        
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
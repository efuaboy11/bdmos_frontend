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
export const UploadEvent = () =>{
  const {authTokens} = useContext(AuthContext)

  const [img, setImgFile] = useState(null)
  const [date, setdate ] = useState("")
  const [event, setEvent] = useState("")

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
      addEvent(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

  const addEvent = async(e) =>{
    e.preventDefault()
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    const formData = new FormData()
    formData.append('image', img);
    formData.append('date', date);
    formData.append('description', event);
    console.log(formData)

    try{
      const response = await fetch('https://bdmos.onrender.com/api/events/',{
        method: 'POST',
        body: formData,
        headers:{
          Authorization: `Bearer ${authTokens.access}`
        }
      })
      if(response.status === 201){
        setShowAlert(true)
        setAlert("Event Created Successfully")
        console.log('sucess')
        setAlertSeverity("success")
        setLoader(false)
        setdisablebutton(false)
        setImgFile(null)
        setdate('')
        setEvent('')

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
  const handleImgFile = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setImgFile(file); 
    } else {
      setImgFile(null); 
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
                  {alert}
                </Alert>
              )}
            </div>
          </div>
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>Upload Events</h5>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to='/admin/ViewEventUploads'>View Event Uploaded</Link>
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
                        <label htmlFor="" className="p-2">Image</label>
                        <input className={`form-control  form-dark ${errors.img ? 'error-input' : ''}`} {...register('img', {required: true})} type="file" onChange={handleImgFile}/>
                        {errors.img && <span style={{color: 'red'}}>This Feild is required</span>} 
                      </div>
                      <div className="col-md-6 mt-3">
                        <label htmlFor="" className="p-2">Date</label>
                        <input className={`form-control  form-dark ${errors.date ? 'error-input' : ''}`} {...register('date', {required: true})} type="date"  value={date} onChange={(e) => setdate(e.target.value)}/>
                        {errors.date && <span style={{color: 'red'}}>This Feild is required</span>}

                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="" className="p-2">Event description</label>
                        <textarea className={`form-control  form-dark ${errors.event ? 'error-input' : ''}`} {...register('event', {required: true})}  value={event} onChange={(e) => setEvent(e.target.value)}></textarea>
                        {errors.event && <span style={{color: 'red'}}>This Feild is required</span>}
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
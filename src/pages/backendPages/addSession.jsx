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

export const AddSession = () =>{
  const {authTokens} = useContext(AuthContext)
  const [session, setSession] = useState("")

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
      AddSession(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

  const AddSession = async(e) =>{
    e.preventDefault()
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }



    try{
      const response = await fetch('https://bdmos.onrender.com/api/sessions/',{
        method: 'POST',
        body: JSON.stringify({
          name: session,
          term : [
            1,2,3
          ]

        }),
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`
        }
      })
      if(response.status === 201){
        setShowAlert(true)
        setAlert("Session Created Successfully")
        console.log('sucess')
        setAlertSeverity("success")
        setLoader(false)
        setdisablebutton(false)
        setSession('')
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
                <h5>Add Session</h5>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to="/admin/viewSession">  View Sessions</Link>
						  </div>
            </div>


            <section>
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE ENTER THE SESSION ID YOU WANT TO ADD</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row justify-content-center mx-2">
                    <div className="col-md-10 mt-5">
                      <label htmlFor="" className="form-label">Enter Session</label>
                      <input className={`form-control  form-dark ${errors.session ? 'error-input' : ''}`} {...register('session', {required: true})} type="text" placeholder="2021/2022" value={session} onChange={(e) => setSession(e.target.value)}/>
                      {errors.session && <span style={{color: 'red'}}>This Feild is required</span>}
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
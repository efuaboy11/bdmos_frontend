import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useContext, useEffect } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"
import { LoadingSpiner } from "../../component/spin"


export const AddPayment = () => {
  const [paymentName, setPaymentName] = useState("")
  const {authTokens} = useContext(AuthContext)


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
      addPayment(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

  const addPayment = async(e) =>{
    e.preventDefault()
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    const formData = new FormData()
    formData.append('name', paymentName);
    console.log(formData)

    try{
      const response = await fetch("https://bdmos.onrender.com/api/bills/",{
        method: 'POST',
        body: formData,
        headers:{
          Authorization: `Bearer ${authTokens.access}`
        }
      })
      if(response.status === 201){
        setShowAlert(true)
        setAlert("Payment Name Created Successfully")
        console.log('sucess')
        setAlertSeverity("success")
        setLoader(false)
        setdisablebutton(false)
        setPaymentName('')

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
        {loader &&
          < LoadingSpiner/>
        }

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
                <h5>Add Payment</h5>
                <p>Add Payment Method</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to="/admin/accountPage">Account Page</Link>
						  </div>
            </div>
        
          </div>


            <section className="container-lg">
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE ENTER THE PAYMENT NAME YOU WANT TO ADD</p>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row justify-content-center mx-2">
                    <div className="col-md-10 mt-5">
                      <input className={`form-control delete-student-input form-dark ${errors.paymentName ? 'error-input' : ''}`} {...register('paymentName', {required: true})} value={paymentName} onChange={(e) => setPaymentName(e.target.value)}type="text" placeholder="School fees"/>
                      {errors.paymentName && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>
                    <div className="col-md-10 pt-3 pb-5 mb-4">
                      <button type="submit" className="admin-btn py-2 px-5" disabled={disablebutton}>Submit</button>
                    </div>
                  </div>
                </form>



              </div>
            </section>
        </div>

      </section>
		</div>
	)
}
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
import { LoadingSpiner } from "../../component/spin"

export const SendEmail = () =>{
  const {authTokens} = useContext(AuthContext)


  const [emailInput, setEmailInput] = useState("")
  const [subjectInput, setSubjectInput] = useState("")
  const [textInput, setTextInput] = useState("")

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
      sendMail(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

    const sendMail = async(e) =>{
      e.preventDefault()
      if(loader){
        setLoader(false)
      }else{
        setLoader(true)
      }



      try{
        const response = await fetch('https://bdmos.onrender.com/api/send-email/',{
          method: 'POST',
          headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${authTokens.access}`
          },
          body: JSON.stringify({
            to: emailInput,
            subject: subjectInput,
            body: textInput,
          })
        })
        if(response.status === 200){
          setShowAlert(true)
          setAlert("Email sent Successfully")
          console.log('sucess')
          setAlertSeverity("success")
          setLoader(false)
          setdisablebutton(false)
          setEmailInput('')
          setSubjectInput('')
          setTextInput('')

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
                <h5>Email</h5>
                <p>Send A Messaage Across</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to='/admin/sendBulkEmail'>Bulk Email</Link>
						  </div>
            </div>


            <section>
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE FILL THE DETAILS</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row  mx-2">
                    <div className="col-md-11 mt-5 d-flex align-items-center">
                      <label htmlFor="" className="pe-4"> To: </label>
                      <input className={`form-control  form-dark py-2 px-3 ${errors.emailInput ? 'error-input' : ''}`} {...register('emailInput', {required: true})} type="email" placeholder="jerryMark@gmail.com"   value={emailInput} onChange={(e) => setEmailInput(e.target.value)}/>
                      {errors.emailInput && <span style={{color: 'red'}}>This Feild is required</span>} 
                    </div>

                    <div className="col-md-11 mt-4 d-flex align-items-center">
                      <label htmlFor="" className="pe-4">Subject: </label>
                      <input className={`form-control  form-dark py-2 px-3 ${errors.subjectInput ? 'error-input' : ''}`} {...register('subjectInput', {required: true})} type="text"  value={subjectInput} onChange={(e) => setSubjectInput(e.target.value)}/>
                      {errors.subjectInput && <span style={{color: 'red'}}>This Feild is required</span>} 
                    </div>
                    
                    
                    <div className="col-md-11 mt-4">
                      <textarea className={`form-control  form-dark ${errors.textInput ? 'error-input' : ''}`} {...register('textInput', {required: true})}  rows="6" placeholder="text..."   value={textInput} onChange={(e) => setTextInput(e.target.value)}></textarea>
                      {errors.textInput && <span style={{color: 'red'}}>This Feild is required</span>}

                    </div>



                    <div className="col-md-10 pt-3 pb-5 mb-4 mt-3">
                      <button className="admin-btn py-2 px-5"  type="submit" disabled={disablebutton}>Submit</button>
                      
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
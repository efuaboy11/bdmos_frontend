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


export const AddSubject = () =>{
  const {authTokens} = useContext(AuthContext)

  const [subjectName, setSubjectName] = useState("")
  const [subjectDescription, setSubjectDescription] = useState('')

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
      addSubject(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

  const addSubject = async(e) =>{
    e.preventDefault()
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    const formData = new FormData()
    formData.append('name', subjectName);
    formData.append('description', subjectDescription);
    console.log(formData)

    try{
      const response = await fetch('https://bdmos.onrender.com/api/subjects/',{
        method: 'POST',
        body: formData,
        headers:{
          Authorization: `Bearer ${authTokens.access}`
        }
      })
      if(response.status === 201){
        setShowAlert(true)
        setAlert("Subject Created Successfully")
        console.log('sucess')
        setAlertSeverity("success")
        setLoader(false)
        setdisablebutton(false)
        setSubjectName('')
        setSubjectDescription('')

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
                <h5>Add Subject</h5>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to="/admin/viewSubject">  View Subject</Link>
						  </div>
            </div>


            <section>
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE ENTER THE SUBJECT NAME YOU WANT TO ADD</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row mx-2 g-3">
                    <div className="col-md-6 mt-5">
                      <label htmlFor="" className="form-label">Subject Name</label>
                      <input className={`form-control  form-dark ${errors.subjectName ? 'error-input' : ''}`} {...register('subjectName', {required: true})}  type="text" placeholder="Mathmatics" value={subjectName} onChange={(e) => setSubjectName(e.target.value)}/>
                      {errors.subjectName && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>

                    <div className="col-md-6 mt-5">
                      <label htmlFor="" className="form-label">Subject Description</label>
                      <input className={`form-control  form-dark ${errors.subjectDescription ? 'error-input' : ''}`} {...register('subjectDescription', {required: true})}        type="text" placeholder="Nursery Section, Primary section" value={subjectDescription} onChange={(e) => setSubjectDescription(e.target.value)}/>
                      {errors.subjectDescription && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>

                    <div className="col-md-10 pt-3 pb-5 mb-4">
            
                      <button className="admin-btn py-2 px-5" type="submit" disabled={disablebutton}>Submit</button>   
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
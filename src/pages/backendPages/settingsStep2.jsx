import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link, useNavigate } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useContext } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"
import { LoadingSpiner } from "../../component/spin"

export const SettingsStep2 = () =>{
  const [OTP, setOTP] = useState("")
  const [usernames, setUsernames] = useState("")
  const [passwords, setPasswords] = useState("")

  const navigate = useNavigate()
  const { authTokens, setDetails } = useContext(AuthContext)
  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)

  const onSubmit = (data, e) =>{
    e.preventDefault()
    setdisablebutton(true)
    if(isValid){
      verifyOTP(e)

    
      console.log(data)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }
  const verifyOTP = async(e) =>{
    e.preventDefault()
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    const formData = new FormData()
    formData.append('username', usernames);
    formData.append('new_password', passwords);
    formData.append('otp', OTP);
    console.log(formData)

    try{
      const response = await fetch('https://bdmos.onrender.com/api/verify-otp/',{
        method: 'POST',
        body: formData,
        headers:{
          Authorization: `Bearer ${authTokens.access}`
        }
      })
      if(response.status === 200){
        navigate("/admin/settings-3")
        console.log('sucess')
        setLoader(false)
        setdisablebutton(false)
        setUsernames("")
        setPasswords("")
        setOTP("")

      }else{
        const errorData = await response.json()
        const errorMessage = errorData.error
        console.log(errorMessage)
        alert(errorMessage)
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

      <div className="main-content">
        <div className="container-lg">
         <div className="row my-3">
              <div className="col-12">
                <h4>Settings</h4>
                <p>Make changes to your settings </p>
              </div>
         </div>



          <div className="row justify-content-center ">
            <div className="col-md-6">

              <div class="form-progress">
                <div class="step">
                    <div class="bullet active">
                      <span>1</span>
                    </div>
                </div>
                <div class="step">
                    <div class="bullet">
                      <span>2</span>
                    </div>


                </div>
                <div class="step">
                    <div class="bullet">
                      <span class="">3</span>
                    </div>
                </div>
              </div>
              <section className="">
                <div className="settings-container">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-4 mx-2 mt-3">
                      <div className="col-md-12 mt-3">
                        <div>
                          <label className="form-label">OTP Code</label>
                          <input className={`form-control  ${errors.otp ? 'error-input' : ''}`} {...register('otp', {required: true})}  type="text" placeholder="203432" value={OTP} onChange={(e) => setOTP(e.target.value)} autoComplete="off"/>
                          {errors.otp && <span style={{color: 'red'}}>This Feild is required</span>} 
                        </div>                 
                      </div>

                      <div className="col-md-12 mt-3">
                        <div>
                          <label className="form-label">Username</label>
                          <input className={`form-control  ${errors.username ? 'error-input' : ''}`} {...register('username', {required: true})}  type="text" placeholder="Enter username" value={usernames} onChange={(e) => setUsernames(e.target.value)} autoComplete="off"/>
                          {errors.username && <span style={{color: 'red'}}>This Feild is required</span>} 
                        </div>                 
                      </div>

                      <div className="col-md-12 mt-3">
                        <div>
                          <label className="form-label">Password</label>
                          <input className={`form-control  ${errors.password ? 'error-input' : ''}`} {...register('password', {required: true})}  type="text" placeholder="Enter New password"value={passwords} onChange={(e) => setPasswords(e.target.value)}/>
                          {errors.password && <span style={{color: 'red'}}>This Feild is required</span>} 
                        </div>                 
                      </div>

                      <div className="col-md-10  pb-5 mb-4">
                        <Link to='/admin/settings' className="admin-btn me-3 mb-2 py-2 px-5" type="submit" disabled={disablebutton}>previous</Link>
                        <button className="admin-btn py-2 px-5" type="submit" disabled={disablebutton}>{loader ? <CircularProgress color="inherit"/> : "Next"}</button>
                      </div>
                      
                    </div>



                  
                  </form>
                </div>
              </section>
            </div>
          </div>

        </div>
        
      </div>


		</div>
	)
}
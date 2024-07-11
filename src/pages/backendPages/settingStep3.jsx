import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link, useNavigate } from "react-router-dom"
import {faArrowLeft, faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useContext } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"
import { LoadingSpiner } from "../../component/spin"
import pic from "../../img/good-mark.png"

export const SettingStep3 = () =>{
  const [usernames, setUsernames] = useState("")
  const [confirmUsername, setConfirmUsername] = useState("")
  const [passwords, setPasswords] = useState("")
  const [confirmPassword, setConfirmPassowrd] = useState("")

  const [alert, setAlert] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)

  const navigate = useNavigate()

  const onSubmit = (data, e) =>{
    e.preventDefault()
    setdisablebutton(true)
    if(isValid){
      navigate("/admin/settings-2")
    
      console.log(data)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }




	return(
		<div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>

      <div className="main-content">
        <div className="container-lg">
         <div className="row my-3 ">
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
                    <div class="bullet active">
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
                  <div className="row justify-content-center pt-5">
                    <div className="col-4">
                      <img src={pic} alt="" width="100%"/>
                    </div>

                    <div className="col-12 text-center">
                      <h1>SUCCESSFUL</h1>
                      <p>Your password has been successfully been updated.</p>

                    </div>

                    <div className="col-12 pt-5 ps-5">
                      <Link to="/admin/settings" className="admin-btn py-2 px-3"><FontAwesomeIcon icon={faArrowLeft}/> Back</Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

        </div>
        
      </div>


		</div>
	)
}
import { DashFrame } from "../../component/dashFrame"
import "../../css/dashboard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useContext } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"
import { Link } from "react-router-dom";

export const Scheme1 = () =>{

  const [alert, setAlert] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)
  return(
    <div>
      <DashFrame />
      <div className="main-content">
      <section className="payment-form container-lg">
        <section className="boxing-shadow">
          <div>
            <div className="navyblue-blackground-dash py-4">
              <p className="text-center">PLEASE FILL IN THE REQUIRED DETAILS</p>
            </div>
          </div>

          <form>
            <div className="row mx-2">
              <div className="col-md-6">
                <label for="name" className="form-label">Session</label>
                <select id="inputState" className="form-select form-dark">
                  <option selected></option>

                </select>
                

              </div>
      
              <div className="col-md-6">
                <label for="name" className="form-label">class</label>
                <select id="inputState" className="form-select form-dark">
                  <option selected>...</option>
                  <option>LDC</option>
                  <option>Nusery 1</option>
                  <option>Nusery 2</option>
                  <option>Nusery 3</option>
                  <option>Primary 1</option>
                  <option>primary 2</option>
                  <option>primary 3</option>
                  <option>primary 4</option>
                  <option>primary 5</option>

                </select>
                

              </div>
      
              <div className="col-md-6">
                <label for="name" className="form-label">Select term</label>
                <select id="inputState" className="form-select form-dark">
                  <option selected>...</option>
                  <option>First term</option>
                  <option>Second term</option>
                  <option>Third term</option>
                </select>
              </div>

              <div className="col-md-10 pt-3 pb-5 mb-4">
                <Link to='/schemePage' className="admin-btn py-2 px-5" type="submit" disabled={disablebutton}>{loader ? <CircularProgress color="inherit"/> : "Submit"}</Link>             
              </div>
            </div>

  
          </form>
        </section>

  
      </section>    
    </div>
    </div>
  )
}
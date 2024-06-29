import { AdminDashFrame } from "../../component/adminDashFRame";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"
import { LoadingSpiner } from "../../component/spin";

export const SendBulkEmail = () => {
  const [emailList, setEmailList] = useState([]);
  const [teachers, setTeachers] = useState();
  const [parents, setParents] = useState()
  const [emailSubject, setEmailSubject] = useState("")
  const [emailBody, setEmailBody] = useState("")

  const [alert, setAlert] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)
  

  console.log(emailList, teachers, parents);

  const getAllTeacherEmail = async () => {
    try {
      let response = await fetch("https://bdmos.onrender.com/api/list-emails/teachers/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setEmailList(data.email_addresses);
        console.log("Got Email Successfully");
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllParentEmail = async () => {
    try {
      let response = await fetch("https://bdmos.onrender.com/api/list-emails/parents/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setEmailList(data.email_addresses);
        console.log("Got Parents Email Successfully");
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTeacherCheckboxChange = (event) => {
    setTeachers(event.target.checked);
    if (event.target.checked) {
      getAllTeacherEmail();
    }
  };

  const handleParentCheckboxChange = (event) => {
    setParents(event.target.checked);
    if (event.target.checked) {
      getAllParentEmail();
    }
  };

  const sendBulkEmail = async (e) => {
    e.preventDefault()
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    try {
      let response = await fetch("https://bdmos.onrender.com/api/send-email/",{
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          to: emailList,
          subject: emailSubject,
          body: emailBody,
          is_bulk: "true"
        })
      })
  
      const data = await response.json()
  
      if(response.ok){
        console.log(data)
        setShowAlert(true)
        setAlert("Bulk mail sent successfully")
        console.log('sucess')
        setAlertSeverity("success")
        setLoader(false)
        setdisablebutton(false)
      }else{
        console.log(data)
        setShowAlert(true)
        setAlert('There is an error processing your data')
        setAlertSeverity("error")
        setLoader(false)
        setdisablebutton(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = (data, e) =>{
    e.preventDefault()
    console.log("clicked")
    setdisablebutton(true)
    if(isValid){
    
      console.log(data)
      sendBulkEmail(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

  return (
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
                <h5>Bulk Email</h5>
                <p>Broadcast Your message</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
                <Link to="/admin">Dashboard / </Link>
                <Link to='/admin/viewEmailem'> View Email</Link>
              </div>
            </div>

            <section>
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE FILL THE DETAILS</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row mx-2">
                    <div className="col-md-11 mt-5 d-flex align-items-center">
                      <label htmlFor="" className="pe-4">To: </label>

                      <input className="" type="checkbox" value={teachers} onChange={(e) => handleTeacherCheckboxChange(e)} />
                      <label htmlFor="" className="px-3">All Teachers</label>

                      <input className="" type="checkbox" value={parents} onChange={(e) => handleParentCheckboxChange(e)}/>
                      <label htmlFor="" className="px-3">All Parent</label>
                    </div>

                    <div className="col-md-11 mt-4 d-flex align-items-center">
                      <label htmlFor="" className="pe-4">Subject: </label>
                      <input className={`form-control py-2 px-3 form-dark ${errors.subject ? 'error-input' : ''}`} {...register('subject', {required: true})} type="text" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)}/>
                      {errors.subject && <span style={{color: 'red'}}>This Feild is required</span>} 
                    </div>

                    <div className="col-md-11 mt-4">
                      <textarea className={`form-control  form-dark ${errors.text ? 'error-input' : ''}`} {...register('text', {required: true})}  rows="6" placeholder="text..." value={emailBody} onChange={(e) => setEmailBody(e.target.value)}></textarea>
                      {errors.text && <span style={{color: 'red'}}>This Feild is required</span>} 
                    </div>

                    <div className="col-md-10 pt-3 pb-5 mb-4 mt-3">
                      <button disabled={disablebutton} className="admin-btn py-2 px-5" type="submit">Submit </button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

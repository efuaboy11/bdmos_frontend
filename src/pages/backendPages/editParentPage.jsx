import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"


export const EditParentPage = () =>{
  const {authTokens, details} = useContext(AuthContext) 

  const [students, setStudents] = useState([])

  
  const [parentName, setParentName] = useState(details ? details.name : "")
  const [homeAddress, setHomeAddress] = useState(details ? details.address : "")
  const [parentPhoneNumber, setparentPhoneNumber] = useState(details ? details.phone_number: "")
  const [childName, setChildName] = useState([])
  const [parentEmail, setParentEmail] = useState(details ? details.email : "")


  const [alert, setAlert] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const [loader, setLoader] = useState("")
  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [disablebutton, setdisablebutton] = useState(false)
  

  const handleSelectChange = (event) => {
    const options = event.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setChildName(selectedValues);
  };

  const onSubmit = (data, e) =>{
    e.preventDefault()
    setdisablebutton(true)
    if(isValid){
    
      console.log(data)
      updateParent(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

  const updateParent = async(e) => {
    e.preventDefault()
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    const formData = new FormData()
    formData.append("name", parentName);
    formData.append("phone_number", parentPhoneNumber);
    formData.append("email", parentEmail);
    formData.append("address", homeAddress);
    formData.append("children_name", childName);

    console.log(formData)

    try {
      const response = await fetch(`https://bdmos.onrender.com/api/parents/${details.id}/`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${authTokens.access}`
        },
        body: formData
      })
      if (response.status === 200 || response.status === 200){
        setShowAlert(true)
        setAlert("Parent Details Updated Successfully")
        console.log('sucess')
        setAlertSeverity("success")
        setLoader(false)
        setdisablebutton(false)
      }else{
        const errorData = await response.json()
        const errorMessage = errorData.error
        setShowAlert(true)
        setAlert('There an error in processing your data')
        setAlertSeverity("error")
        console.log(errorMessage)
        setLoader(false)
        setdisablebutton(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getStudent = async() => {
    try {
      const response = await fetch("https://bdmos.onrender.com/api/students/", {
        method: "GET",
        headers:{
          "Content-Type":"application/json",
          Authorization: `Bearer ${authTokens.access}`
        }
      })
      const data = await response.json()

      if(response.status === 200){
        const sortedData = data.sort((a, b) => a.first_name.localeCompare(b.first_name));
        setStudents(sortedData)
      }else{
        console.error("Failed to fetch user details:", response.statusText)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getStudent()
  }, [students])
  return(
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <div className="main-content ">
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
        <section className="mt-3 container">
          <div className="row my-3 pb-4">
            <div className="col-md-8 col-sm-6 col-6">
              <h4 >Update Parent Proile</h4>
              <p>Make Changes</p>
            </div>
          </div>
        </section>

        <section className="container-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row g-2 mx-2">
                <div className="col-md-6 mt-5">
                  <label htmlFor="" className="">Parent/Gudian Name</label>
                  <input className={`form-control delete-student-input form-dark ${errors.parentName ? 'error-input' : ''}`} {...register('parentName', {required: true})} value={parentName} onChange={(e) => setParentName(e.target.value)}type="text" placeholder="Mr John Doe"/>
                  {errors.parentName && <span style={{color: 'red'}}>This Feild is required</span>}
                </div>
                <div className="col-md-6 mt-5">
                  <label htmlFor="" className="">Home Address</label>
                  <input className={`form-control delete-student-input form-dark ${errors.homeAddress ? 'error-input' : ''}`} {...register('homeAddress', {required: true})} value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)}type="text" placeholder="adolo college Road"/>
                  {errors.homeAddress && <span style={{color: 'red'}}>This Feild is required</span>}
                </div>

                <div className="col-md-6 mt-5">
                  <label htmlFor="" className="">Phone Number</label>
                  <input className={`form-control delete-student-input form-dark ${errors.parentPhoneNumber ? 'error-input' : ''}`} {...register('parentPhoneNumber', {required: true})} value={parentPhoneNumber} onChange={(e) => setparentPhoneNumber(e.target.value)}type="text" placeholder="08079022633"/>
                  {errors.parentPhoneNumber && <span style={{color: 'red'}}>This Feild is required</span>}
                </div>

                <div className="col-md-6 mt-5">
                  <label htmlFor="" className="">Email Addresss</label>
                  <input className={`form-control delete-student-input form-dark ${errors.parentEmail ? 'error-input' : ''}`} {...register('parentEmail', {required: true})} value={parentEmail} onChange={(e) => setParentEmail(e.target.value)}type="text" placeholder="parent@gmail.com"/>
                  {errors.parentEmail && <span style={{color: 'red'}}>This Feild is required</span>}
                </div>

                <div className="col-md-12 mt-5">
                  <label htmlFor="" className="">Children Name </label>
                  <select   className={`form-control form-select delete-student-input form-dark ${errors.childName ? 'error-input' : ''}`} {...register('childName', {required: false})} onChange={handleSelectChange}type="text" placeholder="Mary, john, happy" multiple>
                    {students && students.map((student) =>(
                      <option value={student.id} key={student.id}>{student.first_name} {student.last_name}</option>
                    ))}
                  </select>
                  {errors.childName && <span style={{color: 'red'}}>This Feild is required</span>}
                </div>


                <div className="col-md-10 pt-3 pb-5 mb-4">
                  <button type="submit" className="admin-btn py-2 px-5" disabled={disablebutton}>{loader ? <CircularProgress color="inherit"/> : "Submit"}</button>
                </div>
              </div>
            </form>

        </section>
        


      </div>
    </div>
  )  

 


}
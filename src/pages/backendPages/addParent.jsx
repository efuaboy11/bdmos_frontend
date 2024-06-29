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
import { LoadingSpiner } from "../../component/spin"


export const AddParent = () =>{

  const {authTokens} = useContext(AuthContext)

  const [students, setStudents] = useState([])
  


  const [parentName, setParentName] = useState("")
  const [parentPhoneNumber, setparentPhoneNumber] = useState('')
  const [parentEmail, setParentEmail] = useState('')
  const [homeAddress, setHomeAddress] = useState('')
  const [ParentImg, setParentImg] = useState('')
  const [childName, setChildName] = useState()
  const [alert, setAlert] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)

  console.log(childName)

  const handlePassportFile = (event) => {
    // Check if any file is selected
    if (event.target.files.length > 0) {
      // Access the selected file (first file in the array)
      const file = event.target.files[0];
      setParentImg(file); // Update selectedFile state with the selected file
    } else {
      setParentImg(null); // Reset selectedFile if no file is selected
    }
  };

  const onSubmit = (data, e) =>{
    e.preventDefault()
    setdisablebutton(true)
    if(isValid){
    
      console.log(data)
      addParent(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

  const addParent = async(e) => {
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
    formData.append("image", ParentImg);

    console.log(formData)

    try {
      const response = await fetch("https://bdmos.onrender.com/api/parents/", {
        method: "POST",
        body: formData
      })
      if (response.status === 201){
        setShowAlert(true)
        setAlert("Student Created Successfully")
        console.log('sucess')
        setAlertSeverity("success")
        setLoader(false)
        setdisablebutton(false)
        setParentEmail("")
        setParentName("")
        setparentPhoneNumber("")
        setParentImg("")
        setChildName([])
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



  return(
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <div className="main-content ">
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


        <section className="mt-3 container-lg">
          <div className="row my-3 pb-4">
            <div className="col-md-8 col-sm-6 col-6">
              <h4 >Add Parent</h4>
              <p>Parent Information</p>
            </div>

            <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
              <Link to="/admin/viewAllParent">View All Parent / </Link>
              <Link to="/admin">Dashboard</Link>
            </div>
          </div>
        </section>

        <section className="container-lg">
          <div className="boxing-shadow">
            <div className="navyblue-blackground-dash py-4">
              <p className="text-center">PLEASE ENTER THE PARENT INFORMATION</p>
            </div>
            
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
                  <input className={`form-control delete-student-input form-dark ${errors.parentEmail ? 'error-input' : ''}`} {...register('parentEmail', {required: true})} value={parentEmail} onChange={(e) => setParentEmail(e.target.value)}   type="text" placeholder="parent@gmail.com"/>
                  {errors.parentEmail && <span style={{color: 'red'}}>This Feild is required</span>}
                </div>

                <div className="col-md-12 mt-5">
                  <label htmlFor="" className="">Children Name </label>
                  <textarea   className={`form-control  delete-student-input form-dark ${errors.childName ? 'error-input' : ''}`} {...register('childName', {required: false})} type="text" placeholder="Mary, john, happy" rows="3" value={childName} onChange={(e) => setChildName(e.target.value)}></textarea>
                  {errors.childName && <span style={{color: 'red'}}>This Feild is required</span>}
                </div>

                <div className="col-md-6 mt-5">
                  <label htmlFor="" className="">Image</label>
                  <input className={`form-control delete-student-input form-dark ${errors.ParentImg ? 'error-input' : ''}`} {...register('ParentImg', {required: true})} onChange={handlePassportFile}type="file"/>
                  {errors.ParentImg && <span style={{color: 'red'}}>This Feild is required</span>}
                </div>

                <div className="col-md-10 pt-3 pb-5 mb-4">
                  <button type="submit" className="admin-btn py-2 px-5" disabled={disablebutton}>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )  
  

 


}
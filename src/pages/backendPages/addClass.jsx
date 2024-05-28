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


export const AddClass = () => {

  
  const [className, setClassName] = useState("")
  const[selectedSubjects, setSelectedSubjects] = useState([])
  const [subjects, setSubjects] = useState([])

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
      handleCreate(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

  // console.log(selectedSubjects)

  const handlecheckboxChange = (id) => {
    
    setSelectedSubjects((prevSelectedSubjects) => {
      if(prevSelectedSubjects.includes(id)){
        return prevSelectedSubjects.filter((subjectID) => subjectID !== id)
      }else{
        return [...prevSelectedSubjects, id]
      }
    })
  }

  const getSubjects = async() => {
    let response = await fetch("https://bdmos.onrender.com/api/subjects/",{
      method: "GET",
      headers: {
        "Content-Type":"application/json"
      }
    })
    const data = await response.json()

    if(response.ok){
      setSubjects(data)
    }else{
      console.log("Subjects could not be called", response.statusText)
    }
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    let response = await fetch("https://bdmos.onrender.com/api/class/",{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
      body: JSON.stringify({
        name: className,
        subjects: selectedSubjects
      })
    })

      if(response.status === 201){
        setShowAlert(true)
        setAlert("Class Created Successfully")
        console.log('sucess')
        setAlertSeverity("success")
        setLoader(false)
        setdisablebutton(false)

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
  }

  useEffect(() => {
    getSubjects()
  },[subjects])

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
                <h5>Add Class</h5>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to="/admin/viewClass">  View Classes</Link>
						  </div>
            </div>


            <section>
              <div className="boxing-shadow ">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE ENTER THE CLASS NAME YOU WANT TO ADD AND SELECT THE SUBJECT</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row mx-2">
                    <div className="col-md-11 mt-5">
                      <input className={`form-control  form-dark ${errors.className ? 'error-input' : ''}`}   {...register('className', {required: true})} type="text" placeholder="Enter class Name..." value={className} onChange={(e) => setClassName(e.target.value)}/>
                      {errors.className && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>


                  </div>

                  <div className="m-4 p-3 add-class-nursery non-wrap-text">
                    <p className="pb-4">Nursery Subject</p>
                    <div className="row">
                      {subjects && subjects.map((subject) => (
                        <div className="col-12 col-sm-6 col-md-2" key={subject.id}>
                          <div className="d-flex">
                            <input 
                              type="checkbox" 
                              id={`subject-${subject.id}`} 
                              value={subject.id} 
                              checked={selectedSubjects.includes(subject.id)}
                              onChange={() => handlecheckboxChange(subject.id)}
                            />
                            <p className="px-4">{subject.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>


                  <div className=" ps-4 pt-3 pb-5 mb-4">
                    <button className="admin-btn py-2 px-5" type="submit" disabled={disablebutton}>{loader ? <CircularProgress color="inherit"/> : "Submit"}</button>                     
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
import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pic from "../../img/pexels-andrea-piacquadio-762041 (2).jpg"
import { useState, useContext, useEffect } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"
import { LoadingSpiner } from "../../component/spin"


export const UploadSchemePage = () =>{
  const [formValues, setFormValues] = useState([])
  const [subjects, setSubjects] = useState([])

  // const [alert, setAlert] = useState("")
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
      uploadScheme(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

  const {
    classe,
    terms,
    sessions,
    date} = useContext(AuthContext)

  useEffect(() => {
    const fetchSubjects = async () => {
      const response = await fetch(`https://bdmos.onrender.com/api/class/${classe}/`)
      const data = await response.json()
      setSubjects(data.all_subjects)
    }

    fetchSubjects()
  }, [])

  const handleChange = (index, e) => {
    const values = [...formValues]
    if (e.target.name === 'scheme'){
      values[index][e.target.name] = e.target.files[0]
    } else {
      values[index][e.target.name] = e.target.value
    }
    setFormValues(values)
  }

  const uploadScheme = async (e) => {
    e.preventDefault()
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    const formDataArray = formValues.map((value) => {
      const formData = new FormData()
      Object.keys(value).forEach((key) => {
        formData.append(key, value[key])
      })
      return formData
    })

    const promises = formDataArray.map(async (formData) => {
      const response = await fetch('https://bdmos.onrender.com/api/scheme/', {
        method: "POST",
        body: formData
      })
      return response.json()
    })

    Promise.all(promises).then((results) => {
      setLoader(false)
      console.log(results)
      alert(results[0].non_field_errors)
    }).catch((error) => {
      console.error("Error uploading schemes:", error)
    })
  }

  useEffect(() => {
    setFormValues(subjects.map(subject => ({
      student_class: classe,
      term: terms,
      session: sessions,
      date: date,
      subject: subject.id,
      scheme: null
    })))
  }, [subjects])

  console.log(subjects)
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
                <h5>Upload Scheme</h5>
                <p>Select the File you want to Upload</p>
              </div>
            </div>

            <form action="">
              <div className="row add-student">
                <div className="col-sm-10 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius admin-input" placeholder="Search by Subject..."/>
                </div>

                <div className="col-sm-1 mb-3">
                  <input type="submit" className=" p-2 form-dark border-radius"/>
                </div>
              </div>            
            </form> 



            <section className="container-lg navyblue-blackground-dash">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="view-content-height scroll-bar">
                  <div className="non-wrap-text">
                    <table className="table1 ">
                      <thead>
                        <tr>
                          <th>Subjects</th>
                          <th>File</th>
                        </tr>
                      </thead>
                      <tbody className="admin-home-table view-schoolitems-table ">
                        {formValues.map((formValue, index) => {
                          const subject = subjects.find(subject => subject.id === formValue.subject);
                          return (
                            <tr key={index}>
                              <td>{subject ? subject.name : 'Loading...'}</td>
                              <td>
                                <input type="file" name="scheme" onChange={(e) => handleChange(index, e)}/>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <button className="admin-btn py-2 px-5 my-5" type="submit">Upload</button>
              </form>
            </section>
          </div>
        </div>
      </section>

      
		</div>
	)
}
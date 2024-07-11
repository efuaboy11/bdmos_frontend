import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight, faX } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import { useContext, useEffect, useState } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';

export const Addmision = () =>{
  


  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState("")
  const [lastName, setLastName] = useState("")
  const [DOB, setDOB] = useState("")
  const [sex, setSex] = useState("")
  const [fatherName, setFatherName] = useState("")
  const [motherName, setMotherName] = useState("")
  const [gurdianName, setGurdianName] = useState('')
  const [parentNumber, setParetNumber] = useState('')
  const [parentEmail, setParentEmail] = useState('')
  const [SOG, setSOG] = useState('')
  const [religion, setReligion] = useState('')
  const [disabilityOption, setDisabilityOption] = useState('')
  const [city, setCity] = useState('')
  const [previousSChool, setPreviousSchool] = useState('')
  const [className, setClassName] = useState("")
  const [disability, setDisability] = useState('')
  const [passportFile, setPassportFile] = useState(null);


  const [alert, setAlert] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)
  
	const location = useLocation();
  

  const [showApplicationModal, setShowApplicationModal] = useState(false)

  const DisplayApplicationModal = () =>{
    setShowApplicationModal(true)

  }

  const HideApplicationModal = () =>{
    setShowApplicationModal(false)
  }
  const handlePassportFile = (event) => {
    // Check if any file is selected
    if (event.target.files.length > 0) {
      // Access the selected file (first file in the array)
      const file = event.target.files[0];
      setPassportFile(file); // Update selectedFile state with the selected file
    } else {
      setPassportFile(null); // Reset selectedFile if no file is selected
    }
  };


	const isActive = (path) =>{
		return location.pathname === path

	}

  const onSubmit = (data,e) =>{
    e.preventDefault()
    setdisablebutton(true)
    if (isValid){
      try{
        console.log(data);
        sendApplication(e)

      }catch (error){
        console.error('Failed to submit', error)
        setdisablebutton(false)
      }
    }

  }

  const sendApplication = async(e) =>{
    e.preventDefault()
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    const formData = new FormData()
    formData.append("first_name", firstName);
    formData.append("middle_name", middleName);
    formData.append("last_name", lastName);
    formData.append("gurdian_name", gurdianName);
    formData.append( "username", "none")
    formData.append("father_name", fatherName);
    formData.append("mother_name", motherName);
    formData.append( "state_of_origin", SOG);
    formData.append("city_or_town", city);
    formData.append("sex", sex);
    formData.append("parents_phone_number", parentNumber);
    formData.append("parents_email", parentEmail);
    formData.append("date_of_birth", DOB);
    formData.append( "disability", disabilityOption);
    formData.append( "disability_note", disability);
    formData.append( "previous_school", disability);
    formData.append( "religion", religion);
    formData.append( "student_class", className);    
    formData.append( "passport", passportFile);

    console.log(formData)

    try{
      const response = await fetch('https://bdmos.onrender.com/api/send-student-application-email/',{
        method: 'POST',
        body: formData,
        // headers:{
        //   "Content-Type":"application",
          
        // }
      })
      if(response.status === 200){
        setShowAlert(true)
        setAlert("Student Application sent Successfully")
        console.log('sucess')
        setAlertSeverity("success")
        setLoader(false)
        setdisablebutton(false)
        setFirstName("")
        setLastName("")
        SOG("")
        city("")
        setParentEmail("")
        setParentEmail("")
        DOB("")
        disabilityOption("")
        religion("")
        disability("")



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
      {showApplicationModal &&
        <section className="overlay-background">
          <div className="student-application-modal-conatiner">
            <div className="student-application-modal-content">
              <div className="p-3 d-flex justify-content-between">
                <div>
                  <h3>Application Form</h3>
                  <p>Please fill all the details</p>
                </div>
                <div>
                  <FontAwesomeIcon onClick={HideApplicationModal} className="m-text cursor-pointer" icon={faX}/>
                </div>

              </div>


              <section className="student-application-form scroll-bar-black-y">
                <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row g-3 add-student">
                    <div className="col-lg-4 col-xxl-3 col-md-6">
                      <label htmlFor="" className="form-label">First Name <span className="red-text">*</span></label>
                      <input type="text" className={`form-control  ${errors.firstName ? 'error-input' : ''}`} {...register('firstName', {required: true})}   value={firstName} onChange={(e) => setFirstName(e.target.value.toLowerCase())}/>
                      {errors.firstName && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>

                    <div className="col-lg-4 col-xxl-3 col-md-6">
                      <label htmlFor="" className="form-label">Middle Name</label>
                      <input type="text" className="form-control" id="student-first-name" value={middleName} onChange={(e) => setMiddleName(e.target.value)}/>
                    </div>

                    <div className="col-lg-4 col-xxl-3 col-md-6">
                      <label htmlFor="" className="form-label">Last Name <span className="red-text">*</span></label>
                      <input type="text" className={`form-control  ${errors.lastName ? 'error-input' : ''}`} {...register('lastName', {required: true})} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                      {errors.lastName && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>

                    <div className="col-lg-4 col-xxl-3 col-md-6">
                      <label htmlFor="" className="form-label">DOB <span className="red-text">*</span></label>
                      <input type="date" className={`form-control  ${errors.DOB ? 'error-input' : ''}`} {...register('DOB', {required: true})} value={DOB} onChange={(e) => setDOB(e.target.value)}/>
                      {errors.DOB && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>

                    <div className="col-lg-4 col-xxl-3 col-md-6">
                      <label htmlFor="" className="form-label">Sex <span className="red-text">*</span></label>
                      <select  className={`form-control form-select ${errors.sex ? 'error-input' : ''}`} {...register('sex', {required: true})} value={sex} onChange={(e) => setSex(e.target.value)}>
                        <option></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      {errors.sex && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>

                    <div className="col-lg-4 col-xxl-3 col-md-6">
                      <label htmlFor="" className="form-label">Father Name <span className="red-text">*</span></label>
                      <input type="text" className={`form-control  ${errors.fatherName ? 'error-input' : ''}`} {...register('fatherName', {required: true})} value={fatherName} onChange={(e) => setFatherName(e.target.value)}/>
                      {errors.fatherName && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>

                    <div className="col-lg-4 col-xxl-3 col-md-6">
                      <label htmlFor="" className="form-label">Mother Name <span className="red-text">*</span></label>
                      <input type="text" className={`form-control  ${errors.motherName ? 'error-input' : ''}`} {...register('motherName', {required: true})} value={motherName} onChange={(e) => setMotherName(e.target.value)}/>
                      {errors.motherName && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>


                    <div className="col-lg-4 col-xxl-3 col-md-6">
                      <label htmlFor="" className="form-label">Gurdian Name</label>
                      <input type="text" className="form-control " id="student-first-name" value={gurdianName} onChange={(e) => setGurdianName(e.target.value)}/>
                    </div>

                    <div className="col-lg-4 col-xxl-3 col-md-6">
                      <label htmlFor="" className="form-label">Parent Phone Number <span className="red-text">*</span></label>
                      <input type="text" className={`form-control  ${errors.phoneNumber ? 'error-input' : ''}`} {...register('phoneNumber', {required: true})} value={parentNumber} onChange={(e) => setParetNumber(e.target.value)}/>
                      {errors.phoneNumber && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>

                    <div className="col-lg-4 col-xxl-3 col-md-6">
                      <label htmlFor="" className="form-label">Parent Email <span className="red-text">*</span></label>
                      <input type="text" className={`form-control  ${errors.parentEmail ? 'error-input' : ''}`} {...register('parentEmail', {required: true})} value={parentEmail} onChange={(e) => setParentEmail(e.target.value)}/>
                      {errors.parentEmail && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>

                    <div className="col-lg-4 col-xxl-3 col-md-6">
                        <label for="inputState" className="form-label">State of origin <span className="red-text">*</span></label>
                        <select id="inputState" className={`form-control  ${errors.SOG ? 'error-input' : ''}`} {...register('SOG', {required: true})} value={SOG} onChange={(e) => setSOG(e.target.value)}>
                          <option></option>
                          <option>Abia</option>
                          <option value="adamawa">Adamawa</option>
                          <option value="akwa ibom">Akwa ibom</option>
                          <option value="anambra">Anambra</option>
                          <option value="bauchi">Bauchi</option>
                          <option value="bayelsa">Bayelsa</option>
                          <option value="benue">Benue</option>
                          <option value="borno">Borno</option>
                          <option value="cross river">Crossriver</option>
                          <option value="delta">Delta</option>
                          <option value="ebonyi">Ebonyi</option>
                          <option value="edo">Edo</option>
                          <option value="ekiti">Ekiti</option>
                          <option value="enugu">Enugu</option>
                          <option value="imo">Imo</option>
                          <option value="jigawa">Jigawa</option>
                          <option value="kaduna">Kaduna</option>
                          <option value="kano">Kano</option>
                          <option value="kastina">Kastina</option>
                          <option value="kebbi">Kebbi</option>
                          <option value="kogi">Kogi</option>
                          <option value="kwara">Kwara</option>
                          <option value="lagos">Lagos</option>
                          <option value="nasarawa">Nasarawa</option>
                          <option value="niger">Niger</option>
                          <option value="ogun">Ogun</option>
                          <option value="ondo">Ondo</option>
                          <option value="osun">Osun</option>
                          <option value="oyo">Oyo</option>
                          <option value="plateau">plateau</option>
                          <option value="rivers">Rivers</option>
                          <option value="sokoto">Sokoto</option>
                          <option value="taraba">Taraba</option>
                          <option value="yobe">Yobe</option>
                        </select>
                        {errors.SOG && <span style={{color: 'red'}}>This Feild is required</span>}
                      </div>

                    <div className="col-lg-4 col-xxl-3 col-md-6">
                      <label htmlFor="" className="form-label">Religion <span className="red-text">*</span></label>
                      <select className={`form-control form-select  ${errors.religion ? 'error-input' : ''}`} {...register('religion', {required: true})} value={religion} onChange={(e) => setReligion(e.target.value)}>
                        <option></option>
                        <option value="christian">Christian</option>
                        <option value="muslim">Muslim</option>
                        <option value="others">others</option>
                        </select>
                        {errors.religion && <span style={{color: 'red'}}>This Feild is required</span>}  
                    </div>

                    <div className="col-lg-4 col-xxl-3 col-md-6">
                      <label for="inputDisability" className="form-label">Disabily <span className="red-text">*</span></label>
                      <select className={`form-control form-select ${errors.disabilityOption ? 'error-input' : ''}`} {...register('disabilityOption', {required: true})} value={disabilityOption} onChange={(e) => setDisabilityOption(e.target.value)}>
                        <option></option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                      {errors.disabilityOption && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>

                    <div className="col-lg-4 col-xxl-3 col-md-6">
                      <label htmlFor="" className="form-label">City/Town</label>
                      <input type="text" className={`form-control  ${errors.city ? 'error-input' : ''}`} {...register('city', {required: true})} value={city} onChange={(e) => setCity(e.target.value)}/>
                      {errors.city && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>

                    <div className="col-lg-4 col-xxl-3 col-md-6">
                      <label htmlFor="" className="form-label">Previous School</label>
                      <input type="text" className="form-control " id="student-first-name" value={previousSChool} onChange={(e) => setPreviousSchool(e.target.value)}/>
                    </div>

                    <div className="col-lg-4 col-xxl-3 col-md-6">
                      <label htmlFor="" className="form-label">Present Class</label>
                      <input type="text" className="form-control " id="student-first-name" value={className} onChange={(e) => setClassName(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                      <label for="diabilityYes" className="form-label">If you have any disability please state below</label>
                      <textarea className="form-control" id="diabilityYes" rows="3"  value={disability} onChange={(e) => setDisability(e.target.value)}></textarea>
                    </div>

                    <div className="col-lg-4 col-xxl-3 col-md-6">
                      <label for="formFileLg" className="form-label">(Passpot)</label>
                      <input className={`form-control  ${errors.passportFile ? 'error-input' : ''}`} {...register('passportFile', {required: true})} type="file" onChange={handlePassportFile} />
                      {errors.passportFile && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>
                  </div>

                  <div className="py-4">
                    <button className="admin-btn py-2 px-5" type="submit" disabled={disablebutton}>{loader ? <CircularProgress color="inherit"/> : "Submit"}</button>
                  </div>
                
                </form>
              </section>


            </div>

          </div>

        </section>
      }
			<Navbar />
      <section>
        <section id="heading" className="light-background2 mt-5 mb-5">
          <div className="container-lg">
            <div className="d-md-flex d-inline justify-content-between">
              <div>
                <h1 className="ml-text fw-bold dark-font">Addmission <span className="text-secondary1">Procedure</span></h1>
              </div>

              <div className="d-lg-flex justify-content-between texts">
                <a href="./index.html" className="px-4">Home</a>
                <FontAwesomeIcon className="d-none d-md-block pt-2" icon={faAngleRight} color="black"/>
                <p className="text-secondary1 px-4 d-none d-md-block">Info</p>
                
              </div>
            </div>      
          </div>
        </section>

        <section className="container-lg py-5 my-5">
          <div>
            <div className="row">
              <div className="col-xxl-12">
                <div className="row g-3">
                  <div className="col-md-4 col-sm-6">
                    <div className="d-flex">
                      <div className="px-4 pt-3 light-background2 text-primary1 font-bold">
                        <h3>01</h3>
                      </div>

                      <div className="ps-3">
                        <p className="pb-3">Registration Fee</p>
                        <p>NGN5, 000</p>
                      </div>

                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="d-flex">
                      <div className="text-primary1 font-bold">
                        <div className="light-background2 px-4 pt-3 pb-2">
                          <h3>02</h3>
                        </div>

                      </div>

                      <div className="ps-3">
                        <p>Required Documents:</p>
                        <p>1. Passport Photographs</p>
                        <p>2. Birth Certificate</p>
                        <p>3. Transcript off any school the child has attedend</p>
                      </div>

                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="d-flex">
                      <div className="text-primary1 font-bold">
                        <div className="light-background2 px-4 pt-3 pb-2">
                          <h3>03</h3>
                        </div>

                      </div>

                      <div className="ps-3">
                        <p>Parent and ward and required to come to <br /> the school for further interview.</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <div>
                <button onClick={DisplayApplicationModal} className="admission-btn">CLICK HERE TO APPLY <span className="d-none d-sm-inline">ONLINE</span> </button>

                <div className="d-flex justify-content-center">
                  <div>
                    <div className="admission-h6 text-center">
                      <h6>ONLINE APPLICATION</h6>
                    </div>
                    <p>Your appliation will be processed.</p>
                  </div>

                 
                </div>
                <div className="text-center text-primary1 pt-3">
                  <h1>OR</h1>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xxl-12">
                <div className="row justify-content-between">
                  <div className="col-xxl-3 col-lg-5 col-sm-6 pb-5">
                    <div className="light-background2 p-2">
                    <p>Parents/gurdians are welcome to accompany their child/ward to the school for personalized registration and interview session. Please ensure you bring along the necessary documentation outlined in step two</p>
                    </div>
                    
                  </div>

                  <div className="col-xxl-3 col-lg-5 col-sm-6">
                    <div className="light-background2 p-2">
                    <p>NOTE: Parent can pay for the registration fee via banking or can come to the school premises to make payment <br />  Account Number: <span className="font-bold">1100057855</span>  <br />Bank: <span className="font-bold">Uniben micro finacnce </span> <br />Account Name:  <span className="font-bold"> Fredita Children Academy </span></p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <Footer />
      </section>

		</div>
			
  )
}
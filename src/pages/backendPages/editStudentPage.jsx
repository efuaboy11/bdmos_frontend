import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Alert, CircularProgress } from "@mui/material"
import { useForm } from "react-hook-form"

export const EditStudentPage = () =>{
  const {authTokens, details} = useContext(AuthContext)

  const [firstName, setFirstName] = useState(details ? details.first_name : "")
  const [middleName, setMiddleName] = useState(details ? details.middle_name : "")
  const [lastName, setLastName] = useState(details ? details.last_name : "")
  const [DOB, setDOB] = useState(details ? details.date_of_birth : "")
  const [sex, setSex] = useState(details ? details.sex : "")
  const [fatherName, setFatherName] = useState(details ? details.father_name : "")
  const [motherName, setMotherName] = useState(details ? details.mother_name : "")
  const [gurdianName, setGurdianName] = useState(details ? details.gurdian_name : "")
  const [parentNumber, setParetNumber] = useState(details ? details.parents_phone_number : "")
  const [parentEmail, setParentEmail] = useState(details ? details.parents_email : "")
  const [SOG, setSOG] = useState(details ? details.state_of_origin : "")
  const [religion, setReligion] = useState(details ? details.religion : "")
  const [disabilityOption, setDisabilityOption] = useState(details ? details.disability : "")
  const [classOption, setClassOption] = useState(details ? details.student_class : "")
  const [city, setCity] = useState(details ? details.city_or_town : "")
  const [previousSChool, setPreviousSchool] = useState(details ? details.previous_school : "")
  const [disability, setDisability] = useState(details ? details.disability_note : "")
  // const [passportFile, setPassportFile] = useState(details ? details.passport : null);

  const [alert, setAlert] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const [loader, setLoader] = useState("")
  const [classes, setClasses] = useState("")
  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [disablebutton, setdisablebutton] = useState(false)

  // Event handler for when file input value changes
  // const handlePassportFile = (event) => {
  //   // Check if any file is selected
  //   if (event.target.files.length > 0) {
  //     // Access the selected file (first file in the array)p6
  //     const file = event.target.files[0];
  //     setPassportFile(file); // Update selectedFile state with the selected file
  //   } else {
  //     setPassportFile(null); // Reset selectedFile if no file is selected
  //   }
  // };

  const onSubmit = (data, e) =>{
    e.preventDefault()
    setdisablebutton(true)
    if(isValid){
    
      console.log(data)
      updateStudent(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

  const getClasses = async() => {
    try {
      const response = await fetch("https://bdmos.onrender.com/api/class/", {
        method: "GET",
        headers:{
          "Content-Type":"application/json",
          Authorization: `Bearer ${authTokens.access}`
        }
      })
      const data = await response.json()

      if(response.status === 200){
        setClasses(data)
      }else{
        console.error("Failed to fetch user details:", response.statusText)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const updateStudent = async(e) => {
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
    formData.append("date_of_birth", DOB);
    formData.append("sex", sex);
    formData.append("father_name", fatherName);
    formData.append("mother_name", motherName);
    formData.append("gurdian_name", gurdianName);
    formData.append("parents_phone_number", parentNumber);
    formData.append("parents_email", parentEmail);
    formData.append("state_of_origin", SOG);
    formData.append("religion", religion);
    formData.append("disability", disabilityOption);
    formData.append("student_class", classOption);
    formData.append("city_or_town", city);
    formData.append("previous_school", previousSChool);
    formData.append("disability_note", disability);
    // formData.append("passport", passportFile);

    console.log(formData)

    try {
      const response = await fetch(`https://bdmos.onrender.com/api/students/${details.username}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${authTokens.access}`
        },
        body: formData
      })
      if (response.status === 200 || response.status === 200){
        setShowAlert(true)
        setAlert("Student Updated Successfully")
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

  useEffect(() => {
    getClasses()
  }, [classes])

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
              <h4 >Update Student Proile</h4>
              <p>Make Changes</p>
            </div>
          </div>
        </section>

        <section className="container-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-3 add-student">
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">First Name <span className="red-text">*</span></label>
                <input type="text" className={`form-control  form-dark ${errors.firstName ? 'error-input' : ''}`} {...register('firstName', {required: true})}   value={firstName} onChange={(e) => setFirstName(e.target.value.toLowerCase())}/>
                {errors.firstName && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Middle Name</label>
                <input type="text" className="form-control form-dark" id="student-first-name" value={middleName} onChange={(e) => setMiddleName(e.target.value)}/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Last Name <span className="red-text">*</span></label>
                <input type="text" className={`form-control  form-dark ${errors.lastName ? 'error-input' : ''}`} {...register('lastName', {required: true})} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                {errors.lastName && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">DOB <span className="red-text">*</span></label>
                <input type="date" className={`form-control  form-dark ${errors.DOB ? 'error-input' : ''}`} {...register('DOB', {required: true})} value={DOB} onChange={(e) => setDOB(e.target.value)}/>
                {errors.DOB && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Sex <span className="red-text">*</span></label>
                <select  className={`form-control form-select form-dark ${errors.sex ? 'error-input' : ''}`} {...register('sex', {required: true})} value={sex} onChange={(e) => setSex(e.target.value)}>
                  <option></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.sex && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Father Name <span className="red-text">*</span></label>
                <input type="text" className={`form-control  form-dark ${errors.fatherName ? 'error-input' : ''}`} {...register('fatherName', {required: true})} value={fatherName} onChange={(e) => setFatherName(e.target.value)}/>
                {errors.fatherName && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Mother Name <span className="red-text">*</span></label>
                <input type="text" className={`form-control  form-dark ${errors.motherName ? 'error-input' : ''}`} {...register('motherName', {required: true})} value={motherName} onChange={(e) => setMotherName(e.target.value)}/>
                {errors.motherName && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>


              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Gurdian Name</label>
                <input type="text" className="form-control  form-dark" id="student-first-name" value={gurdianName} onChange={(e) => setGurdianName(e.target.value)}/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Parent Phone Number <span className="red-text">*</span></label>
                <input type="text" className={`form-control  form-dark ${errors.phoneNumber ? 'error-input' : ''}`} {...register('phoneNumber', {required: true})} value={parentNumber} onChange={(e) => setParetNumber(e.target.value)}/>
                {errors.phoneNumber && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Parent Email <span className="red-text">*</span></label>
                <input type="text" className={`form-control  form-dark ${errors.parentEmail ? 'error-input' : ''}`} {...register('parentEmail', {required: true})} value={parentEmail} onChange={(e) => setParentEmail(e.target.value)}/>
                {errors.parentEmail && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                  <label for="inputState" className="form-label">State of origin <span className="red-text">*</span></label>
                  <select id="inputState" className={`form-control  form-dark ${errors.SOG ? 'error-input' : ''}`} {...register('SOG', {required: true})} value={SOG} onChange={(e) => setSOG(e.target.value)}>
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
                <select className={`form-control form-select  form-dark ${errors.religion ? 'error-input' : ''}`} {...register('religion', {required: true})} value={religion} onChange={(e) => setReligion(e.target.value)}>
                  <option></option>
                  <option value="christian">Christian</option>
                  <option value="muslim">Muslim</option>
                  <option value="others">others</option>
                  </select>
                  {errors.religion && <span style={{color: 'red'}}>This Feild is required</span>}  
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label for="inputDisability" className="form-label">Disabily <span className="red-text">*</span></label>
                <select className={`form-control form-select form-dark ${errors.disabilityOption ? 'error-input' : ''}`} {...register('disabilityOption', {required: true})} value={disabilityOption} onChange={(e) => setDisabilityOption(e.target.value)}>
                  <option></option>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
                {errors.disabilityOption && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label for="inputDisability" className="form-label">Class <span className="red-text">*</span></label>
                <select className={`form-control form-select form-dark ${errors.classOption ? 'error-input' : ''}`} {...register('classOption', {required: true})} value={classOption} onChange={(e) => setClassOption(e.target.value)}>
                  <option ></option>
                  {classes && classes.map((clas) => (
                    <option value={clas.id} key={clas.id}>{clas.name}</option>
                  ))}
                </select>
                {errors.classOption && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">City/Town</label>
                <input type="text" className={`form-control  form-dark ${errors.city ? 'error-input' : ''}`} {...register('city', {required: true})} value={city} onChange={(e) => setCity(e.target.value)}/>
                {errors.city && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Previous School</label>
                <input type="text" className="form-control  form-dark" id="student-first-name" value={previousSChool} onChange={(e) => setPreviousSchool(e.target.value)}/>
              </div>

              <div className="mb-3">
                <label for="diabilityYes" className="form-label">If you have any disability please state below</label>
                <textarea className="form-control form-dark" id="diabilityYes" rows="3"  value={disability} onChange={(e) => setDisability(e.target.value)}></textarea>
              </div>

              {/* <div className="col-lg-4 col-xxl-3 col-md-6">
                <label for="formFileLg" className="form-label">(Passpot)</label>
                <input className={`form-control  form-dark ${errors.passportFile ? 'error-input' : ''}`} {...register('passportFile')} type="file" onChange={handlePassportFile} />
                {errors.passportFile && <span style={{color: 'red'}}>This Feild is required</span>}
              </div> */}
            </div>

            <div className="py-4">
              <button className="admin-btn py-2 px-5" type="submit" disabled={disablebutton}>{loader ? <CircularProgress color="inherit"/> : "Submit"}</button>
            </div>
           
          </form>
        </section>
        


      </div>
    </div>
  )  
}
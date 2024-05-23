import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useContext, useEffect } from "react"
import AuthContext from "../../context/AuthContext"
import { Alert, CircularProgress } from "@mui/material"
import { useForm } from "react-hook-form"


export const EditTeacherPage = () =>{
  const {authTokens, details} = useContext(AuthContext)

  const [firstName, setFirstName] = useState(details ? details.first_name: '')
  const [middleName, setMiddleName] = useState(details ? details.middle_name: '')
  const [lastName, setLastName] = useState(details ? details.last_name: '')
  const [temporaryResident, setTempopraryResident] = useState(details ? details.temporary_residence: '')
  const [permanentResident, setPermanentResident] = useState(details ? details.permanent_residence: '')
  const [SOG, setSOG] = useState(details ? details.state_of_origin: '')
  const [city, setCity] = useState(details ? details.city_or_town: '')
  const [sex, setSex] = useState(details ? details.sex: '')
  const [phoneNumber, setPhoneNumber ] = useState(details ? details.phone_number: '')
  const [email, setEmail] = useState(details ? details.teacher_email: '')
  const [DOB, setDOB] = useState(details ? details.date_of_birth: '')
  const [religion, setReligion] = useState(details ? details.religion: '')
  const [disabilityOption, setDisabilityOption] = useState(details ? details.disability: '')
  const [martitalStatus, setMaritialStatus] = useState(details ? details.maritial_status: '')
  const [YOE, setYOE] = useState(details ? details.years_of_experience: '')
  const [computerSkills, setComputerSkills] = useState(details ? details.computer_skills: '')
  const [disability, setDisability] = useState(details ? details.disability_note: '')
  const [employmentReason, setEmploymentReason] = useState(details ? details.teacher_speech: '' )

  const [alert, setAlert] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const [loader, setLoader] = useState("")
  const [classes, setClasses] = useState("")
  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [disablebutton, setdisablebutton] = useState(false)



  const onSubmit = (data, e) =>{
    e.preventDefault()
    setdisablebutton(true)
    if(isValid){
    
      console.log(data)
      updateTeacher(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }


  const updateTeacher = async(e) => {
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
    formData.append("temporary_residence", temporaryResident);
    formData.append("permanent_residence", permanentResident);
    formData.append("state_of_origin", SOG);
    formData.append("city_or_town", city);
    formData.append("sex", sex);
    formData.append("teacher_email", email);
    formData.append("date_of_birth", DOB);
    formData.append("religion", religion);
    formData.append("disability", disabilityOption);
    formData.append("maritial_status", martitalStatus);
    formData.append("years_of_experience", YOE);
    formData.append("computer_skills", computerSkills);
    formData.append("disability_note", disability);
    formData.append("teacher_speech", employmentReason);
    console.log(formData)

    try {
      const response = await fetch(`https://bdmos.onrender.com/api/teachers/${details.username}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${authTokens.access}`
        },
        body: formData
      })
      if (response.status === 200 || response.status === 200){
        setShowAlert(true)
        setAlert("Teacher Updated Successfully")
        console.log('sucess')
        setAlertSeverity("success")
        setLoader(false)
        setdisablebutton(false)
      }else{
        const errorData = await response.json()
        const errorMessage = errorData.error
        setShowAlert(true)
        setAlert(errorMessage)
        setAlertSeverity("error")
        console.log(errorMessage)
        setLoader(false)
        setdisablebutton(false)
      }
    } catch (error) {
      console.log(error)
    }
  }



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
              <h4 >Edit Teacher Profile</h4>
              <p>Make Changes</p>
            </div>
          </div>
        </section>

        <section className="container-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-3 add-student">
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">First Name <span className="red-text">*</span></label>
                <input type="text" className={`form-control  form-dark ${errors.firstName ? 'error-input' : ''}`} {...register('firstName', {required: true})} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                {errors.firstName && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Middle Name</label>
                <input type="text" className={`form-control  form-dark ${errors.middleName ? 'error-input' : ''}`} {...register('middleName')} value={middleName} onChange={(e) => setMiddleName(e.target.value)}/>
                {errors.middleName && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Last Name <span className="red-text">*</span></label>
                <input type="text" className={`form-control  form-dark ${errors.lastName ? 'error-input' : ''}`} {...register('lastName', {required: true})} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                {errors.lastName && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Tempopary Residence <span className="red-text">*</span></label>
                <input type="text" className={`form-control  form-dark ${errors.tempResidence ? 'error-input' : ''}`} {...register('tempResidence', {required: true})} value={temporaryResident} onChange={(e) => setTempopraryResident(e.target.value)}/>
                {errors.tempResidence && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Permanent Residence <span className="red-text">*</span></label>
                <input type="text" className={`form-control  form-dark ${errors.permanentResident ? 'error-input' : ''}`} {...register('permanentResident', {required: true})} value={permanentResident} onChange={(e) => setPermanentResident(e.target.value)}/>
                {errors.permanentResident && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                  <label for="inputState" className="form-label">State of origin <span className="red-text">*</span></label>
                  <select id="inputState" className={`form-control form-select  form-dark ${errors.SOG ? 'error-input' : ''}`} {...register('SOG', {required: true})} value={SOG} onChange={(e) => setSOG(e.target.value)}>
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
                <label htmlFor="" className="form-label">City/Town</label>
                <input type="text" className={`form-control  form-dark ${errors.city ? 'error-input' : ''}`} {...register('city', {required: true})} value={city} onChange={(e) => setCity(e.target.value)}/>
                {errors.city && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Sex <span className="red-text">*</span></label>
                <select id="inputSex" className={`form-control form-select  form-dark ${errors.sex ? 'error-input' : ''}`} {...register('sex', {required: true})} value={sex} onChange={(e) => setSex(e.target.value)}>
                  <option></option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
                {errors.sex && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Phone Number <span className="red-text">*</span></label>
                <input type="text" className={`form-control  form-dark ${errors.phoneNumber ? 'error-input' : ''}`} {...register('phoneNumber', {required: true})} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                {errors.phoneNumber && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Email <span className="red-text">*</span></label>
                <input type="text" className={`form-control  form-dark ${errors.email ? 'error-input' : ''}`} {...register('email', {required: true})} value={email} onChange={(e) => setEmail(e.target.value)}/>
                {errors.email && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>


              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">DOB <span className="red-text">*</span></label>
                <input type="date" className={`form-control  form-dark ${errors.DOB ? 'error-input' : ''}`} {...register('DOB', {required: true})}  value={DOB} onChange={(e) => setDOB(e.target.value)}/>
                {errors.DOB && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Religion <span className="red-text">*</span></label>
                <select id="inputSex"className={`form-control  form-dark form-select ${errors.religion ? 'error-input' : ''}`} {...register('religion', {required: true})} value={religion} onChange={(e) => setReligion(e.target.value)}>
                  <option></option>
                  <option value='christian'>Christian</option>
                  <option value='muslim'>Muslim</option>
                  <option value='others'>others</option>
                  </select>
                  {errors.religion && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label for="inputDisability" className="form-label">Disability <span className="red-text">*</span></label>
                <select id="inputDisability" className={`form-control form-select  form-dark ${errors.disabilityOption ? 'error-input' : ''}`} {...register('disabilityOption', {required: true})} value={disabilityOption} onChange={(e) => setDisabilityOption(e.target.value)}>
                  <option></option>
                  <option value='no'>No</option>
                  <option value='yes'>Yes</option>
                </select>
                {errors.disabilityOption && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>


              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label for="inputDisability" className="form-label">Marital Status<span className="red-text">*</span></label>
                <select id="inputDisability" className={`form-control form-select  form-dark ${errors.martitalStatus ? 'error-input' : ''}`} {...register('martitalStatus', {required: true})} value={martitalStatus} onChange={(e) => setMaritialStatus(e.target.value)}>
                  <option></option>
                  <option value='single'>Single</option>
                  <option value='married'>Married</option>
                </select>
                {errors.martitalStatus && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Years Off experience <span className="red-text">*</span></label>
                <input type="text" className={`form-control  form-dark ${errors.YOE ? 'error-input' : ''}`} {...register('YOE', {required: true})} value={YOE} onChange={(e) => setYOE(e.target.value)}/>
                {errors.YOE && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label for="inputDisability" className="form-label">Computer Skills<span className="red-text">*</span></label>
                <select id="inputDisability" className={`form-control form-select form-dark ${errors.computerSkills ? 'error-input' : ''}`} {...register('computerSkills', {required: true})} onChange={(e) => setComputerSkills(e.target.value)}>
                  <option value=''></option>
                  <option value='yes'>Yes</option>
                  <option value='no'>No</option>
                </select>
              </div>

              <div className="mb-3">
                <label for="diabilityYes" className="form-label">Any disability</label>
                <textarea className={`form-control  form-dark ${errors.disability ? 'error-input' : ''}`} {...register('disability')} rows="3" value={disability} onChange={(e) => setDisability(e.target.value)}></textarea>
                {errors.disability && <span style={{color: 'red'}}>This Feild is required</span>}

              </div>


              <div className="mb-3">
                <label for="diabilityYes" className="form-label">Teacher Speech on Why they Should be Employed<span className="red-text">*</span></label>
                <textarea className={`form-control  form-dark ${errors.employmentReason ? 'error-input' : ''}`} {...register('employmentReason', {required: true})} rows="3" value={employmentReason} onChange={(e) => setEmploymentReason(e.target.value)}></textarea>
                {errors.employmentReason && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>
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
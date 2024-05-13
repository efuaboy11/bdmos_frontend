import "aos/dist/aos.css"
import "../css/style.css"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navbar } from "../component/navbar"
import { useState } from "react"
import React from "react"
import {useForm} from "react-hook-form"

export const Application = () =>{

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [TempoparyResidence, setTemporaryResidence] = useState("")
  const [permanentResidence, setpermanentResdience] = useState("")
  const [SOG, setSOG] = useState("")
  const [city, setCity] = useState("")
  const [sex, setSex] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [DOB, setDOB] = useState("")
  const [disabilityOption, setDisabilityOption] = useState("")
  const [religion, setReligion] = useState("")
  const [maritalStatus, setMartialStatus] = useState("")
  const [disability, setDisability] = useState("")
  const [YOE, setYOE] = useState("")
  const [computerSkills, setComputerSkills] = useState('')
  const [experience, setExperience] = useState("")
  const [passportFile, setPassportFile] = useState(null)
  const [firstCertFile, setFirstCertFile] = useState(null)
  const [WAECFile, setWAECFile] = useState(null)
  const [SSCETranscriptFile, setSSCETranscriptFile] = useState(null)
  const [universityFile, setUniversityFile] = useState(null)
  const [otherCertFile, setOtherCertFile] = useState(null)
  const [cv, setCv] = useState(null)
  const [employmentReason, setEmploymentReason] = useState("")


  const handlePassportFile = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setPassportFile(file); 
    } else {
      setPassportFile(null); 
    }
  };

  const handleFirstCertFile = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setFirstCertFile(file); 
    } else {
      setFirstCertFile(null); 
    }
  };

  const handleWACEFile = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setWAECFile(file); 
    } else {
      setWAECFile(null); 
    }
  };

  const handleSSCETranscriptFile = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setSSCETranscriptFile(file); 
    } else {
      setSSCETranscriptFile(null); 
    }
  };

  const handleUniversityFile = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setUniversityFile(file); 
    } else {
      setUniversityFile(null); 
    }
  };

  const handleOtherCertFile = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setOtherCertFile(file); 
    } else {
      setOtherCertFile(null); 
    }
  };

  const handleCv = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setCv(file); 
    } else {
      setCv(null); 
    }
  };





  const {handleSubmit, register, formState:{errors, isValid}} = useForm()

  const onSubmit = (data) =>{
    if (isValid){
      try{
        console.log(data);

      }catch (error){
        console.error('Failed to submit', error)
      }
    }

  }


 



  const location = useLocation();
  const isActive = (path) =>{
    return location.pathname === path

  }
  return(
    <div>
      <Navbar />
      <section id="heading" className="light-background">
        <div className="container-lg">
          <div className="d-md-flex d-inline justify-content-between">
            <div>
              <h1 className="l-text fw-bold dark-font">Teacher <span className="text-secondary1">  Application</span></h1>
            </div>

            <div className="d-lg-flex justify-content-between texts">
              <a href="./index.html" className="px-4">HOME</a>
              <i className="fa-solid fa-arrow-right d-none d-md-block"></i>
              <p className="text-secondary1 px-4 d-none d-md-block">Application</p>
              
            </div>
          </div>      
        </div>

      </section>


      <section id="form" class>


        <div className="container-lg py-5 boxing-shadow my-5">
          <p className="fw-bold">instruction: Please try to fill up the form</p>
          <div>
            <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="col-md-6">
                <label for="name" className="form-label">First Name</label>
                <input type="text" id="name" placeholder="e.g John"  className={`form-control compulsory ${errors.firstname ? 'error-input' : ''}`} {...register('firstname', {required: true})} value={firstName} onChange={(e) => setFirstName(e.target.value.toLowerCase())}/>
                {errors.firstname && <span style={{ color: 'red' }}>First Name is required</span>}

              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">last Name</label>
                <input type="text" className={`form-control compulsory ${errors.lastName ? 'error-input' : ''}`} {...register('lastName', {required: true})} value={lastName} onChange={(e) => setLastName(e.target.value.toLowerCase())} id="inputPassword4" placeholder="e.g Mike Smith"/>
                {errors.lastName && <span style={{ color: 'red' }}>Last Name is required</span>}
              </div>
              <div className="col-12">
                <label for="inputAddress" className="form-label"> Tempopary Residence</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={TempoparyResidence} onChange={(e)=> setTemporaryResidence(e.target.value.toLowerCase())}/>
              </div>
              <div className="col-12">
                <label for="inputAddress2" className="form-label ">Permanent Residence</label>
                <input type="text" className={`form-control compulsory ${errors.perResidence ? 'error-input' : ''}`} {...register('perResidence', {required: true})} value={permanentResidence} onChange={(e) => setpermanentResdience(e.target.value.toLowerCase())} id="inputAddress2" placeholder="Apartment, studio, or floor" />
                {errors.perResidence && <span style={{ color: 'red' }}>Permanent Residence is required</span>}
              </div>

              <div className="col-md-4">
                <label for="inputState" className="form-label">State of origin</label>
                <select id="inputState" className={`form-control form-select ${errors.SOG ? 'error-input' : ''}`} {...register('SOG', {required: true})} value={SOG} onChange={(e) => setSOG(e.target.value.toLowerCase())}>
                    <option selected value=""></option>
                    <option >Abia</option>
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
                {errors.SOG && <span style={{ color: 'red' }}>State Of Origin is required</span>}
              </div>
              <div className="col-md-6">
                <label for="inputCity" className="form-label">City/Town</label>
                <input type="text" className={`form-control compulsory ${errors.city ? 'error-input' : ''}`} {...register('city', {required: true})} value={city} onChange={(e) => setCity(e.target.value.toLowerCase())} id="inputCity" placeholder="Benin" />
                {errors.city && <span style={{ color: 'red' }}>city/ is required</span>}
              </div>
              <div className="col-md-2">
                <label for="inputSex" className="form-label">Sex</label>
                <select id="inputSex" className={`form-control form-select ${errors.sex ? 'error-input' : ''}`} {...register('sex', {required: true})} value={sex} onChange={(e) => setSex(e.target.value.toLowerCase())} >
                  <option></option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
                {errors.sex && <span style={{ color: 'red' }}>Sex required</span>}
              </div>
              <div className="col-md-5">
                <label for="inputNumber" className="form-label">Phone Number</label>
                <input type="tel" className={`form-control compulsory ${errors.number ? 'error-input' : ''}`} {...register('number', {required: true})} value={number} onChange={(e) => setNumber(e.target.value.toLowerCase())} placeholder="+234879022633"/>
                {errors.number && <span style={{ color: 'red' }}>phone Number is required</span>}
              </div>
              <div className="col-md-5">
                <label for="inputEmail" className="form-label">Email</label>
                <input type="email" className={`form-control compulsory ${errors.email ? 'error-input' : ''}`} {...register('email', {required:true, pattern:{value: /^\S+@\S+$/i, message: 'Invalid email address'}})} value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} id="inputEmail" placeholder="@marksmith.gmail.com"/>
                {errors.email && <span style={{ color: 'red' }}>Email is Required</span>}
              </div>
              <div className="col-md-2">
                <label for="inputDOB" className="form-label">D.O.B</label>
                <input type="date" className={`form-control compulsory ${errors.DOB ? 'error-input' : ''}`} {...register('DOB', {required: true})} value={DOB} onChange={(e) => setDOB(e.target.value.toLowerCase())} id="inputDOB"/>
                {errors.DOB && <span style={{ color: 'red' }}>Date of birth  is required</span>}
              </div>
              <div className="col-md-4">
                <label for="inputDisability" className="form-label">Disability</label>
                <select id="inputDisability" className={`form-control form-select ${errors.disabilityOption ? 'error-input' : ''}`} {...register('disabilityOption', {required: true})} value={disabilityOption} onChange={(e) => setDisabilityOption(e.target.value.toLowerCase())}>
                  <option></option>
                  <option value='no'>No</option>
                  <option value='yes'>Yes</option>
                </select>
                {errors.disabilityOption && <span style={{ color: 'red' }}>This field is required</span>}
              </div>
              <div className="col-md-4">
                <label for="inputReligion" className="form-label">Religion</label>
                <select id="inputReligion" className={`form-control compulsory form-select ${errors.religion ? 'error-input' : ''}`} {...register('religion', {required: true})} value={religion} onChange={(e) => setReligion(e.target.value.toLowerCase())}>
                  <option></option>
                  <option value='christian'>Christian</option>
                  <option value='muslim'>Muslim</option>
                  <option value='others'>others...</option>
                </select>
                {errors.religion && <span style={{ color: 'red' }}>Religion is required</span>}
              </div>
              <div className="col-md-4">
                <label for="inputMaritalStatus" className="form-label">Marital Status</label>
                <select id="inputMaritalStatus" className={`form-control form-select  ${errors.maritalStatus ? 'error-input' : ''}`} {...register('maritalStatus', {required: true})} value={maritalStatus} onChange={(e) => setMartialStatus(e.target.value.toLowerCase())} >
                  <option></option>
                  <option value='married'>Married</option>
                  <option value='single'>Single</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="diabilityYes" className="form-label">If you have any disability please state below*</label>
                <textarea className="form-control" id="diabilityYes" rows="3" value={disability} onChange={(e) => setDisability(e.target.value.toLowerCase)}></textarea>
              </div>
              <div className="col-md-4">
                <label for="" className="form-label">Have you taught in any school in the past</label>
                <select id="" className={`form-control form-select compulsory ${errors.YOE ? 'error-input' : ''}`} {...register('YOE', {required: true})} value={YOE} onChange={(e) => setYOE(e.target.value.toLowerCase())}>
                  <option></option>
                  <option value='no'>No</option>
                  <option value='yes'>Yes</option>
                </select>
                {errors.YOE && <span style={{ color: 'red' }}>This feild is required</span>}
              </div>
              <div className="col-md-4">
                <label for="" className="form-label">Do you have basic computer skills</label>
                <select id="" className={`form-control compulsory form-select ${errors.computerSkills ? 'error-input' : ''}`} {...register('computerSkills', {required: true})} value={computerSkills} onChange={(e) => setComputerSkills(e.target.value.toLowerCase())}>
                  <option></option>
                  <option value='no'>No</option>
                  <option value='yes'>Yes</option>
                </select>
                {errors.computerSkills && <span style={{ color: 'red' }}>This field is required</span>}
              </div>
              <div className="col-md-4">
                <label for="" className="form-label">How many years have you taught</label>
                <input type="text" className={`form-control compulsory ${errors.experience ? 'error-input' : ''}`} {...register('experience', {required: true})} value={experience} onChange={(e) => setExperience(e.target.value.toLowerCase())}/>
                {errors.experience && <span style={{ color: 'red' }}>This field is required</span>}
              </div>
              <div>
                <h5 className="text-secondary1">Upload your document below</h5>
              </div>
              <div className="col-md-4 ">
                <label for="formFileLg" className="form-label">Passpot photograph</label>
                <input className={`form-control compulsory ${errors.passportFile ? 'error-input' : ''}`} {...register('passportFile', {required: true})} type="file"  onChange={handlePassportFile}/>
                {errors.passportFile && <span style={{ color: 'red' }}>This field is required</span>}
              </div>
              <div className="col-md-4">
                <label for="formFileLg" className="form-label">First leaving school certificate</label>
                <input className={`form-control compulsory ${errors.firstCertFile ? 'error-input' : ''}`} {...register('firstCertFile', {required: true})} type="file" onChange={handleFirstCertFile}/>
              </div>
              <div className="col-md-4">
                <label for="formFileLg" className="form-label">(WASSEC/NECO/NABTEB/GCE)</label>
                <input className={`form-control compulsory ${errors.WAECFile ? 'error-input' : ''}`} {...register('WAECFile', {required: true})} type="file" onChange={handleWACEFile}/>
              </div>
              <div className="col-md-4">
                <label for="formFileLg" className="form-label">(WASSEC/NECO/NABTEB/GCE) transcript</label>
                <input className={`form-control compulsory ${errors.SSCETranscriptFile ? 'error-input' : ''}`} {...register('SSCETranscriptFile', {required: true})} type="file" onChange={handleSSCETranscriptFile}/>
              </div>
              <div className="col-md-4">
                <label for="formFileLg" className="form-label">Unversity/polytechnic/institution Certificate</label>
                <input className={`form-control compulsory ${errors.universityFile ? 'error-input' : ''}`} {...register('universityFile', {required: true})} type="file" onChange={handleUniversityFile}/>
              </div>
              <div className="col-md-4">
                <label for="formFileLg" className="form-label">Other certification</label>
                <input className={`form-control compulsory ${errors.otherCertFile ? 'error-input' : ''}`} {...register('otherCertFile', {required: true})} type="file" onChange={handleOtherCertFile}/>
              </div>
              <div className="col-md-4">
                <label for="formFileLg" className="form-label">CV</label>
                <input className={`form-control compulsory ${errors.cv ? 'error-input' : ''}`} {...register('cv', {required: true})} type="file" onChange={handleCv}/>
              </div>
              <div className="mb-3 mt-5">
                <label for="diabilityYes" className="form-label">Why should we employ you</label>
                <textarea rows='9' className={`form-control compulsory ${errors.employmentReason ? 'error-input' : ''}`} {...register('employmentReason', {required: true})} value={employmentReason} onChange={(e) => setEmploymentReason(e.target.value.toLowerCase())}></textarea>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-lg primary-background app-btn">Submit</button>
              </div>
            </form>


          </div>
        </div>
      </section>

  

      <footer>

        <div className="primary-background  pt-5 pb-3">
          <div className="container-lg text-center">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 text-start footer-text">
                <h5  data-aos="fade-right"  data-aos-duration="1000">Here at Baby's Day Out / Fredita Children We give Your Children nothing but the best. We try to ensure you child is well rounded both academically, socially and mentally.</h5>
              </div>
              <div className="col-lg-3"  data-aos="zoom-in"  data-aos-duration="1000">
                <div className="icon">
                  <a href="#"><FontAwesomeIcon className="g-3 l-text" icon="fa-brands fa-facebook" /></a>
                  <a href="#"><FontAwesomeIcon className="g-3 l-text" icon="fa-brands fa-whatsapp" /></a>
                  <a href="#"><FontAwesomeIcon className="g-3 l-text" icon="fa-brands fa-instagram" /></a>                 
                </div>
                <div className="py-3">
                  <p className="sm-text">Check our recent post and update on our social media platform</p> 
                </div>
              </div>

              <div className="col-lg-3 text-start ps-5 footer-link"  data-aos="fade-left"  data-aos-duration="1000">
                <div>
                  <h4>Quick links</h4>
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <Link to="/" className={`nav-link p-1 footer-link ${isActive("/") ?"current2": ""}`}>Home</Link>
                    </li>
        
                    <li className="nav-item">
                      <Link to="/event" className={`nav-link p-1 footer-link ${isActive("/event") ?"current2": ""}`}>EVENTS</Link>
                    </li>
        
                    <li className="nav-item">
                      <Link to="/gallery" className={`nav-link p-1 footer-link ${isActive("/gallery") ?"current2": ""}`}>GALLERY</Link> 
                    </li>
        
                    <li className="nav-item">
                      <Link to="/portal" className={`nav-link p-1 footer-link ${isActive("/portal") ?"current2": ""}`}>SCHOOL PORTAL</Link> 
                    </li>
        
                    <li className="nav-item">
                      <Link to="/application" className={`nav-link p-1 footer-link ${isActive("/application") ?"current2": ""}`}>TEACHER APPLICATION</Link> 
                    </li>
        
                    <li className="nav-item">
                      <Link to="/contact" className={`nav-link p-1 footer-link ${isActive("/contact") ?"current": ""}`}>CONTACT US</Link> 

                    </li>
                  </ul>
                </div>


              </div>
            </div>
            <hr/>

            <div className="text-center end-text">
              <p>Copyright &copy;2023, Baby's Day Out / Fredita Children Academy</p>
              <p>powered by: <a href="#">Ehiz</a></p>
            </div>
          </div>
        </div>
      </footer>   
    </div>
      
      
  )
}
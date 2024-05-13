import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export const EditStudentPage = () =>{
  const [firstName, setFirstName] = useState("")
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
  const [classOption, setClassOption] = useState('')
  const [city, setCity] = useState('')
  const [previousSChool, setPreviousSchool] = useState('')
  const [disability, setDisability] = useState('')
  const [passportFile, setPassportFile] = useState(null);

  // Event handler for when file input value changes
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
  return(
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <div className="main-content ">
        <section className="mt-3 container">
          <div className="row my-3 pb-4">
            <div className="col-md-8 col-sm-6 col-6">
              <h4 >Update Student Proile</h4>
              <p>Make Changes</p>
            </div>
          </div>
        </section>

        <section className="container-lg">
          <form action="">
            <div className="row g-3 add-student">
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">First Name <span className="red-text">*</span></label>
                <input type="text" className="form-control compulsory form-dark" id="student-first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Middle Name</label>
                <input type="text" className="form-control form-dark" id="student-first-name" value={middleName} onChange={(e) => setLastName(e.target.value)}/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Last Name <span className="red-text">*</span></label>
                <input type="text" className="form-control compulsory form-dark" id="student-first-name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">DOB <span className="red-text">*</span></label>
                <input type="datetime-local" className="form-control compulsory form-dark" id="student-first-name" value={DOB} onChange={(e) => setDOB(e.target.value)}/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Sex <span className="red-text">*</span></label>
                <select id="inputSex" className="form-select form-control compulsory form-dark" value={sex} onChange={(e) => setSex(e.target.value)}>
                  <option>...</option>
                  <option>Male</option>
                  <option>Female</option>
                  </select>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Father Name <span className="red-text">*</span></label>
                <input type="text" className="form-control compulsory form-dark" id="student-first-name" value={fatherName} onChange={(e) => setFatherName(e.target.value)}/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Mother Name <span className="red-text">*</span></label>
                <input type="text" className="form-control compulsory form-dark" id="student-first-name" value={motherName} onChange={(e) => setMotherName(e.target.value)}/>
              </div>


              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Gurdian Name</label>
                <input type="text" className="form-control  form-dark" id="student-first-name" value={gurdianName} onChange={(e) => setGurdianName(e.target.value)}/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Parent Phone Number <span className="red-text">*</span></label>
                <input type="text" className="form-control compulsory form-dark" id="student-first-name" value={parentNumber} onChange={(e) => setParetNumber(e.target.value)}/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Parent Email <span className="red-text">*</span></label>
                <input type="text" className="form-control compulsory form-dark" id="student-first-name" value={parentEmail} onChange={(e) => setParentEmail(e.target.value)}/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                  <label for="inputState" className="form-label">State of origin <span className="red-text">*</span></label>
                  <select id="inputState" className="form-select form-control compulsory form-dark "value={SOG} onChange={(e) => setSOG(e.target.value)}>
                    <option selected>Abia</option>
                    <option>Adamawa</option>
                    <option>Akwa ibom</option>
                    <option>Anambra</option>
                    <option>Bauchi</option>
                    <option>Bayelsa</option>
                    <option>Benue</option>
                    <option>Borno</option>
                    <option>Crossriver</option>
                    <option>Delta</option>
                    <option>Ebonyi</option>
                    <option>Edo</option>
                    <option>Ekiti</option>
                    <option>Enugu</option>
                    <option>Imo</option>
                    <option>Jigawa</option>
                    <option>Kaduna</option>
                    <option>Kano</option>
                    <option>Kastina</option>
                    <option>Kebbi</option>
                    <option>Kogi</option>
                    <option>Kwara</option>
                    <option>Lagos</option>
                    <option>Nasarawa</option>
                    <option>Niger</option>
                    <option>Ogun</option>
                    <option>Ondo</option>
                    <option>Osun</option>
                    <option>Oyo</option>
                    <option>plateau</option>
                    <option>Rivers</option>
                    <option>Sokoto</option>
                    <option>Taraba</option>
                    <option>Yobe</option>
                  </select>
                </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Religion <span className="red-text">*</span></label>
                <select id="inputSex" className="form-select form-control compulsory form-dark" value={religion} onChange={(e) => setReligion(e.target.value)}>
                  <option>...</option>
                  <option>Christian</option>
                  <option>Muslim</option>
                  <option>others</option>
                  </select>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label for="inputDisability" className="form-label">Disabily <span className="red-text">*</span></label>
                <select id="inputDisability" className="form-select form-control compulsory form-dark" value={disabilityOption} onChange={(e) => setDisabilityOption(e.target.value)}>
                  <option selected>No</option>
                  <option>Yes</option>
                </select>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label for="inputDisability" className="form-label">Class <span className="red-text">*</span></label>
                <select id="inputDisability" className="form-select form-control compulsory form-dark" value={classOption} onChange={(e) => setClassOption(e.target.value)}>
                  <option selected>...</option>
                </select>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">City/Town</label>
                <input type="text" className="form-control compulsory form-dark" id="student-first-name" value={city} onChange={(e) => setCity(e.target.value)}/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Previous School</label>
                <input type="text" className="form-control  form-dark" id="student-first-name" value={previousSChool} onChange={(e) => setPreviousSchool(e.target.value)}/>
              </div>

              <div className="mb-3">
                <label for="diabilityYes" className="form-label">If you have any disability please state below</label>
                <textarea className="form-control form-dark" id="diabilityYes" rows="3"  value={disability} onChange={(e) => setDisability(e.target.value)}></textarea>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label for="formFileLg" className="form-label">(Passpot)</label>
                <input className="form-control form-control-lg compulsory form-dark" id="formFileLg" type="file" onChange={handlePassportFile} />
              </div>
            </div>

            <div className="py-4">
              <button className="admin-btn py-2 px-5" >Update</button>
            </div>
           
          </form>
        </section>
        


      </div>
    </div>
  )  
}
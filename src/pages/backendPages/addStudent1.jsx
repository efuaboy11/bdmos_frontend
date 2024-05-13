import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

export const AddStudent = () =>{
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

  const [classes, setClasses] = useState("")

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

  const getClasses = async() => {
    try {
      const response = await fetch("https://bdmos.onrender.com/api/class/", {
        method: "GET",
        headers:{
          "Content-Type":"application/json"
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

  const addStudent = async(e) => {
    e.preventDefault()

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
    formData.append("passport", passportFile);

    console.log(formData)

    try {
      const response = await fetch("https://bdmos.onrender.com/api/students/", {
        method: "POST",
        body: formData
      })
      if (response.status === 201){
        console.log("Student Created Successfully")
        setFirstName("")
        setMiddleName("")
        setLastName("")
        setDOB("")
        setSex("")
        setFatherName("")
        setMotherName("")
        setGurdianName("")
        setParetNumber("")
        setParentEmail("")
        setSOG("")
        setReligion("")
        setDisabilityOption("")
        setClassOption("")
        setCity("")
        setPreviousSchool("")
        setDisability("")
        setPassportFile("")
      }else{
        const errorData = await response.json()
        const errorMessage = errorData.error
        console.log(errorMessage)
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
        <section className="mt-3 container">
          <div className="row my-3 pb-4">
            <div className="col-md-8 col-sm-6 col-6">
              <h4 >Add Student</h4>
              <p>Student Information</p>
            </div>

            <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
              <Link to="/admin/viewAllStudent">View All Student / </Link>
              <Link to="/admin">Dashboard</Link>
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
                <input type="text" className="form-control form-dark" id="student-first-name" value={middleName} onChange={(e) => setMiddleName(e.target.value)}/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Last Name <span className="red-text">*</span></label>
                <input type="text" className="form-control compulsory form-dark" id="student-first-name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">DOB <span className="red-text">*</span></label>
                <input type="date" className="form-control compulsory form-dark" id="student-first-name" value={DOB} onChange={(e) => setDOB(e.target.value)}/>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Sex <span className="red-text">*</span></label>
                <select id="inputSex" className="form-select form-control compulsory form-dark" value={sex} onChange={(e) => setSex(e.target.value)}>
                  <option>...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
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
                </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Religion <span className="red-text">*</span></label>
                <select id="inputSex" className="form-select form-control compulsory form-dark" value={religion} onChange={(e) => setReligion(e.target.value)}>
                  <option>...</option>
                  <option value="christian">Christian</option>
                  <option value="muslim">Muslim</option>
                  <option value="others">others</option>
                  </select>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label for="inputDisability" className="form-label">Disabily <span className="red-text">*</span></label>
                <select id="inputDisability" className="form-select form-control compulsory form-dark" value={disabilityOption} onChange={(e) => setDisabilityOption(e.target.value)}>
                  <option selected value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label for="inputDisability" className="form-label">Class <span className="red-text">*</span></label>
                <select id="inputDisability" className="form-select form-control compulsory form-dark" value={classOption} onChange={(e) => setClassOption(e.target.value)}>
                  <option selected>...</option>
                  {classes && classes.map((clas) => (
                    <option value={clas.id} key={clas.id}>{clas.name}</option>
                  ))}
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
              <input className="admin-btn py-2 px-5" type="submit" onClick={addStudent}/>
            </div>
           
          </form>
        </section>
        


      </div>
    </div>
  )  
}
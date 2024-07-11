import { AdminDashFrame } from "../../component/adminDashFRame";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { LoadingSpiner } from "../../component/spin";

export const EditStudentPage = () => {
  const { authTokens } = useContext(AuthContext);
  const [details, setDetails] = useState(null); // Initialize with null

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [DOB, setDOB] = useState("");
  const [sex, setSex] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [gurdianName, setGurdianName] = useState("");
  const [parentNumber, setParetNumber] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [SOG, setSOG] = useState("");
  const [religion, setReligion] = useState("");
  const [disabilityOption, setDisabilityOption] = useState("");
  const [classOption, setClassOption] = useState("");
  const [city, setCity] = useState("");
  const [previousSChool, setPreviousSchool] = useState("");
  const [disability, setDisability] = useState("");

  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");
  const [loader, setLoader] = useState("");
  const [classes, setClasses] = useState("");
  const { handleSubmit, register, formState: { errors, isValid } } = useForm();
  const [disablebutton, setdisablebutton] = useState(false);

  const onSubmit = (data, e) => {
    e.preventDefault();
    setdisablebutton(true);
    if (isValid) {
      console.log(data);
      updateStudent(e);
    } else {
      console.log('error');
      setdisablebutton(false);
    }
  };

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

  const updateStudent = async (e) => {
    e.preventDefault();
    setLoader(true);

    const formData = new FormData();
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

    try {
      const response = await fetch(`https://bdmos.onrender.com/api/students/${details?.username}/`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${authTokens.access}`
        },
        body: formData
      });
      if (response.status === 200) {
        setShowAlert(true);
        setAlert("Student Updated Successfully");
        console.log('success');
        setAlertSeverity("success");
        setLoader(false);
        setdisablebutton(false);
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.error;
        setShowAlert(true);
        setAlert('There is an error in processing your data');
        setAlertSeverity("error");
        console.log(errorMessage);
        setLoader(false);
        setdisablebutton(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClasses();
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("studentEditData");
    if (data) {
      const parsedData = JSON.parse(data); // Assuming the data is stored as a JSON string
      setDetails(parsedData);
      setFirstName(parsedData.first_name || "");
      setMiddleName(parsedData.middle_name || "");
      setLastName(parsedData.last_name || "");
      setDOB(parsedData.date_of_birth || "");
      setSex(parsedData.sex || "");
      setFatherName(parsedData.father_name || "");
      setMotherName(parsedData.mother_name || "");
      setGurdianName(parsedData.gurdian_name || "");
      setParetNumber(parsedData.parents_phone_number || "");
      setParentEmail(parsedData.parents_email || "");
      setSOG(parsedData.state_of_origin || "");
      setReligion(parsedData.religion || "");
      setDisabilityOption(parsedData.disability || "");
      setClassOption(parsedData.student_class || "");
      setCity(parsedData.city_or_town || "");
      setPreviousSchool(parsedData.previous_school || "");
      setDisability(parsedData.disability_note || "");
    }
  }, []);

  return (
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <div className="main-content ">
        {loader && <LoadingSpiner />}
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
              <h4>Update Student Profile</h4>
              <p>Make Changes</p>
            </div>
          </div>
        </section>

        <section className="container-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-3 add-student">
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">First Name <span className="red-text">*</span></label>
                <input type="text" className={`form-control form-dark ${errors.firstName ? 'error-input' : ''}`} {...register('firstName', { required: true })} value={firstName} onChange={(e) => setFirstName(e.target.value.toLowerCase())} />
                {errors.firstName && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Middle Name</label>
                <input type="text" className="form-control form-dark" id="student-first-name" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Last Name <span className="red-text">*</span></label>
                <input type="text" className={`form-control form-dark ${errors.lastName ? 'error-input' : ''}`} {...register('lastName', { required: true })} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                {errors.lastName && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Date of Birth <span className="red-text">*</span></label>
                <input type="date" className={`form-control form-dark ${errors.DOB ? 'error-input' : ''}`} {...register('DOB', { required: true })} value={DOB} onChange={(e) => setDOB(e.target.value)} />
                {errors.DOB && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Sex <span className="red-text">*</span></label>
                <select name="" id="" className={`form-select form-dark ${errors.sex ? 'error-input' : ''}`} {...register('sex', { required: true })} value={sex} onChange={(e) => setSex(e.target.value)}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.sex && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Father's Name</label>
                <input type="text" className="form-control form-dark" id="student-father-name" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Mother's Name</label>
                <input type="text" className="form-control form-dark" id="student-mother-name" value={motherName} onChange={(e) => setMotherName(e.target.value)} />
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Gurdian's Name</label>
                <input type="text" className="form-control form-dark" id="student-guardian-name" value={gurdianName} onChange={(e) => setGurdianName(e.target.value)} />
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Parent's Number <span className="red-text">*</span></label>
                <input type="tel" className={`form-control form-dark ${errors.parentNumber ? 'error-input' : ''}`} {...register('parentNumber', { required: true })} value={parentNumber} onChange={(e) => setParetNumber(e.target.value)} />
                {errors.parentNumber && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Parent's Email</label>
                <input type="email" className="form-control form-dark" id="student-parent-email" value={parentEmail} onChange={(e) => setParentEmail(e.target.value)} />
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">State of Origin <span className="red-text">*</span></label>
                <input type="text" className={`form-control form-dark ${errors.SOG ? 'error-input' : ''}`} {...register('SOG', { required: true })} value={SOG} onChange={(e) => setSOG(e.target.value)} />
                {errors.SOG && <span style={{ color: 'red' }}>This Field is required</span>}
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
                <label htmlFor="" className="form-label">Disability</label>
                <select name="" id="" className="form-select form-dark" value={disabilityOption} onChange={(e) => setDisabilityOption(e.target.value)}>
                  <option value="none">None</option>
                  <option value="blind">Blind</option>
                  <option value="deaf">Deaf</option>
                  <option value="crippled">Crippled</option>
                </select>
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label for="inputDisability" className="form-label">Class <span className="red-text">*</span></label>
                <select className={`form-control form-select form-dark ${errors.classOption ? 'error-input' : ''}`} {...register('classOption', {required: true})} value={classOption} onChange={(e) => setClassOption(e.target.value)}>
                  <option selected></option>
                  {classes && classes.map((clas) => (
                    <option value={clas.id} key={clas.id}>{clas.name}</option>
                  ))}
                </select>
                {errors.classOption && <span style={{color: 'red'}}>This Feild is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">City/Town <span className="red-text">*</span></label>
                <input type="text" className={`form-control form-dark ${errors.city ? 'error-input' : ''}`} {...register('city', { required: true })} value={city} onChange={(e) => setCity(e.target.value)} />
                {errors.city && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>

              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Previous School</label>
                <input type="text" className="form-control form-dark" id="student-previous-school" value={previousSChool} onChange={(e) => setPreviousSchool(e.target.value)} />
              </div>

              <div className="col-12">
                <label htmlFor="" className="form-label">Disability Note</label>
                <textarea rows='4' type="text" className="form-control form-dark" id="student-disability-note" value={disability} onChange={(e) => setDisability(e.target.value)}></textarea>
              </div>

              <div className="col-12">
              <button className="admin-btn py-2 px-5" type="submit" disabled={disablebutton}>Submit</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

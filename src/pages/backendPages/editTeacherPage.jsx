import { AdminDashFrame } from "../../component/adminDashFRame";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { LoadingSpiner } from "../../component/spin";

export const EditTeacherPage = () => {
  const { authTokens } = useContext(AuthContext);
  const [details, setDetails] = useState(null);

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [temporaryResident, setTempopraryResident] = useState('');
  const [permanentResident, setPermanentResident] = useState('');
  const [SOG, setSOG] = useState('');
  const [city, setCity] = useState('');
  const [sex, setSex] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [DOB, setDOB] = useState('');
  const [religion, setReligion] = useState('');
  const [disabilityOption, setDisabilityOption] = useState('');
  const [martitalStatus, setMaritialStatus] = useState('');
  const [YOE, setYOE] = useState('');
  const [computerSkills, setComputerSkills] = useState('');
  const [disability, setDisability] = useState('');
  const [employmentReason, setEmploymentReason] = useState('');

  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");
  const [loader, setLoader] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const { handleSubmit, register, formState: { errors, isValid } } = useForm();

  useEffect(() => {
    const data = localStorage.getItem("teacherEditData");
    if (data) {
      const parsedData = JSON.parse(data);
      setDetails(parsedData);
      setFirstName(parsedData.first_name || '');
      setMiddleName(parsedData.middle_name || '');
      setLastName(parsedData.last_name || '');
      setTempopraryResident(parsedData.temporary_residence || '');
      setPermanentResident(parsedData.permanent_residence || '');
      setSOG(parsedData.state_of_origin || '');
      setCity(parsedData.city_or_town || '');
      setSex(parsedData.sex || '');
      setPhoneNumber(parsedData.phone_number || '');
      setEmail(parsedData.teacher_email || '');
      setDOB(parsedData.date_of_birth || '');
      setReligion(parsedData.religion || '');
      setDisabilityOption(parsedData.disability || '');
      setMaritialStatus(parsedData.maritial_status || '');
      setYOE(parsedData.years_of_experience || '');
      setComputerSkills(parsedData.computer_skills || '');
      setDisability(parsedData.disability_note || '');
      setEmploymentReason(parsedData.teacher_speech || '');
    }
  }, []);

  const onSubmit = (data, e) => {
    e.preventDefault();
    setDisableButton(true);
    if (isValid) {
      updateTeacher(e);
    } else {
      console.log('error');
      setDisableButton(false);
    }
  };

  const updateTeacher = async (e) => {
    e.preventDefault();
    setLoader(true);

    const formData = new FormData();
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

    try {
      const response = await fetch(`https://bdmos.onrender.com/api/teachers/${details.username}/`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${authTokens.access}`
        },
        body: formData
      });
      if (response.ok) {
        setShowAlert(true);
        setAlert("Teacher Updated Successfully");
        setAlertSeverity("success");
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.error;
        setShowAlert(true);
        setAlert(errorMessage);
        setAlertSeverity("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
      setDisableButton(false);
    }
  };

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
              <Alert severity={alertSeverity} onClose={() => setShowAlert(false)}>
                {alert}
              </Alert>
            )}
          </div>
        </div>
        <section className="mt-3 container">
          <div className="row my-3 pb-4">
            <div className="col-md-8 col-sm-6 col-6">
              <h4>Edit Teacher Profile</h4>
              <p>Make Changes</p>
            </div>
          </div>
        </section>
        <section className="container-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-3 add-student">
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">First Name <span className="red-text">*</span></label>
                <input type="text" className={`form-control form-dark ${errors.firstName ? 'error-input' : ''}`} {...register('firstName', { required: true })} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                {errors.firstName && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Middle Name</label>
                <input type="text" className={`form-control form-dark ${errors.middleName ? 'error-input' : ''}`} {...register('middleName')} value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                {errors.middleName && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Last Name <span className="red-text">*</span></label>
                <input type="text" className={`form-control form-dark ${errors.lastName ? 'error-input' : ''}`} {...register('lastName', { required: true })} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                {errors.lastName && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Temporary Residence <span className="red-text">*</span></label>
                <input type="text" className={`form-control form-dark ${errors.temporaryResident ? 'error-input' : ''}`} {...register('temporaryResident', { required: true })} value={temporaryResident} onChange={(e) => setTempopraryResident(e.target.value)} />
                {errors.temporaryResident && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Permanent Residence <span className="red-text">*</span></label>
                <input type="text" className={`form-control form-dark ${errors.permanentResident ? 'error-input' : ''}`} {...register('permanentResident', { required: true })} value={permanentResident} onChange={(e) => setPermanentResident(e.target.value)} />
                {errors.permanentResident && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">State Of Origin <span className="red-text">*</span></label>
                <input type="text" className={`form-control form-dark ${errors.SOG ? 'error-input' : ''}`} {...register('SOG', { required: true })} value={SOG} onChange={(e) => setSOG(e.target.value)} />
                {errors.SOG && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">City Or Town <span className="red-text">*</span></label>
                <input type="text" className={`form-control form-dark ${errors.city ? 'error-input' : ''}`} {...register('city', { required: true })} value={city} onChange={(e) => setCity(e.target.value)} />
                {errors.city && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Sex <span className="red-text">*</span></label>
                <select className={`form-select form-dark ${errors.sex ? 'error-input' : ''}`} {...register('sex', { required: true })} value={sex} onChange={(e) => setSex(e.target.value)}>
                  <option value="" disabled>Select Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
                {errors.sex && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Phone Number <span className="red-text">*</span></label>
                <input type="text" className={`form-control form-dark ${errors.phoneNumber ? 'error-input' : ''}`} {...register('phoneNumber', { required: true })} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                {errors.phoneNumber && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Email <span className="red-text">*</span></label>
                <input type="email" className={`form-control form-dark ${errors.email ? 'error-input' : ''}`} {...register('email', { required: true })} value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Date Of Birth <span className="red-text">*</span></label>
                <input type="date" className={`form-control form-dark ${errors.DOB ? 'error-input' : ''}`} {...register('DOB', { required: true })} value={DOB} onChange={(e) => setDOB(e.target.value)} />
                {errors.DOB && <span style={{ color: 'red' }}>This Field is required</span>}
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
                <label htmlFor="" className="form-label">Do you have Disability? <span className="red-text">*</span></label>
                <select className={`form-select form-dark ${errors.disabilityOption ? 'error-input' : ''}`} {...register('disabilityOption', { required: true })} value={disabilityOption} onChange={(e) => setDisabilityOption(e.target.value)}>
                  <option value="" disabled>Do you have Disability?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.disabilityOption && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Maritial Status <span className="red-text">*</span></label>
                <select className={`form-select form-dark ${errors.martitalStatus ? 'error-input' : ''}`} {...register('martitalStatus', { required: true })} value={martitalStatus} onChange={(e) => setMaritialStatus(e.target.value)}>
                  <option value="" disabled>Select Maritial Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
                {errors.martitalStatus && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Years of Experience <span className="red-text">*</span></label>
                <input type="text" className={`form-control form-dark ${errors.YOE ? 'error-input' : ''}`} {...register('YOE', { required: true })} value={YOE} onChange={(e) => setYOE(e.target.value)} />
                {errors.YOE && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <label htmlFor="" className="form-label">Computer Skills <span className="red-text">*</span></label>
                <select className={`form-select form-dark ${errors.computerSkills ? 'error-input' : ''}`} {...register('computerSkills', { required: true })} value={computerSkills} onChange={(e) => setComputerSkills(e.target.value)}>
                  <option value="" disabled>Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.computerSkills && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>
              <div className="col-12">
                <label htmlFor="" className="form-label">Note If Any</label>
                <textarea type="text" rows="3" className={`form-control form-dark ${errors.disability ? 'error-input' : ''}`} {...register('disability')} value={disability} onChange={(e) => setDisability(e.target.value)}></textarea>
                {errors.disability && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>
              <div className="col-12">
                <label htmlFor="" className="form-label">Why should we employ you? <span className="red-text">*</span></label>
                <textarea className={`form-control form-dark ${errors.employmentReason ? 'error-input' : ''}`} {...register('employmentReason', { required: true })} rows="3" value={employmentReason} onChange={(e) => setEmploymentReason(e.target.value)}></textarea>
                {errors.employmentReason && <span style={{ color: 'red' }}>This Field is required</span>}
              </div>
              <div className="col-12">
                <button className="admin-btn py-2 px-5" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditTeacherPage;

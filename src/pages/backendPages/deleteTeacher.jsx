import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Alert } from "@mui/material"
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';

export const DeleteTeacher = () =>{
  const [teacherID, setTeacherID] = useState("")
  const {authTokens} = useContext(AuthContext)

  const [alerts, setAlerts] = useState("")
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
      deleteTeacher(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

  const deleteTeacher = async (e) => {
    e.preventDefault();
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    try {
      let response = await fetch(`https://bdmos.onrender.com/api/teachers/${teacherID}/`, {
        method: "DELETE",
        headers: {
          Authorization:`Bearer ${authTokens.access}`
        }
      });

      if (response.ok) {
        setShowAlert(true)
        setAlerts("Teacher deleted Sucessfully")
        setAlertSeverity('success')
        setLoader(false)
        setdisablebutton(false)
        console.log('sucess')
      } else {
        let errorData = await response.json();
        const errorMessage = errorData.error
        setShowAlert(true)
        setAlerts('There is an error in processing your data')
        setAlertSeverity('error')
        setLoader(false)
        setdisablebutton(false)
        console.log(errorMessage)
      }
    }catch (error) {
      console.error("Error occurred while deleting user:", error);
      alert("An error occurred while trying to delete the user. Please try again.");
    }
};

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
                  {alerts}
                </Alert>
              )}
            </div>
          </div>
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>Delete Teacher</h5>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to='/admin/viewAllTeacher'>  View Teacher profile</Link>
						  </div>
            </div>


            <section>
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE ENTER THE TEACHER ID YOU WANT TO DELETE</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row justify-content-center mx-2">
                    <div className="col-md-10 mt-5">
                      <input className="delete-teacher-input form-dark py-2 px-3" type="text" placeholder="Search Teacher ID..."  value={teacherID} onChange={(e) => setTeacherID(e.target.value)}/>
                    </div>
                    <div className="col-md-10 pt-3 pb-5 mb-4">
                    <button type="submit" className="admin-btn py-2 px-5" disabled={disablebutton}>{loader ? <CircularProgress color="inherit"/> : "Submit"}</button>
                      
                    </div>
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
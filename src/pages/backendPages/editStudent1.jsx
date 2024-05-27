import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Alert } from "@mui/material"
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';

export const EditStudent = () =>{
  const [studentID, setStudentID] = useState("")

  const {authTokens, setDetails} = useContext(AuthContext)
  const navigate = useNavigate()

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
      getEditDetails(e)
    }
  }

  const getEditDetails = async (e) => {
    e.preventDefault();
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    let response = await fetch(`https://bdmos.onrender.com/api/students/${studentID}`,{
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${authTokens.access}`
      }
    })

    const data = await response.json()

    if(response.ok){
      setLoader(false)
      setdisablebutton(false)
      setDetails(data)
      navigate(`/admin/editStudent/${data.id}`)
    }else{
      setLoader(false)
      setdisablebutton(false)
      setShowAlert(true)
      setAlerts('There is an error in processing your data')
      setAlertSeverity('error')
      
      
    }
  }

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
                <h5>Edit Student Profile</h5>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="admin" >Dashboard /  </Link>
                <Link to='/admin/viewAllStudent'>  View Student profile</Link>
						  </div>
            </div>


            <section>
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE ENTER THE STUDENT ID YOU WANT TO EDIT</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row justify-content-center mx-2">
                    <div className="col-md-10 mt-5">
                      <input className={`form-control delete-student-input form-dark ${errors.studentID ? 'error-input' : ''}`} {...register('studentID', {required: true})} value={studentID} onChange={(e) => setStudentID(e.target.value)}type="text" placeholder="Search Student ID..."/>
                      {errors.studentID && <span style={{color: 'red'}}>This Feild is required</span>}
                    </div>
                    <div className="col-md-10 pt-3 pb-5 mb-4">
                      <button type="submit"  className="admin-btn py-2 px-5" disabled={disablebutton}>{loader ? <CircularProgress color="inherit"/> : "Submit"}</button>                    
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
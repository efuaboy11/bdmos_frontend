import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pic from "../../img/pexels-andrea-piacquadio-762041 (2).jpg"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { DashFrame } from "../../component/dashFrame"
import { DownloadLink } from "../../component/DownloadLink"
import { LoadingSpiner } from "../../component/spin"
import { Alert } from "@mui/material"

export const AdminSchemePage = () =>{

  const {authTokens,
    sessions,
    terms,
    allScheme, 
    setAllScheme,
    classe,
    loadingModal,} = useContext(AuthContext)

  const schemeData = allScheme

  const [alerts, setAlerts] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)
  const [loading, setLoading] = useState(false)

  const checkScheme = async () => {
    setLoading(true)

    try {
      let response = await fetch(`https://bdmos.onrender.com/api/check_scheme/?student_class=${classe}&session=${sessions}&term=${terms}`,{
        method: "GET",
        headers:{
          "Content-Type":"application/json"
        },

      })
  
      const data = await response.json()
  
      if(response.ok){
        setAllScheme(data)
        console.log(allScheme)
        console.log(data)
      } else{
        alert(data.error)
      }
    } catch (error) {
      console.log("Error", error)
    } finally{
      setLoading(false)
    }
  }

  const deleteScheme = async (id) => {
    console.log("clicked")
    setLoading(true)

    try {
      let response = await fetch(`https://bdmos.onrender.com/api/scheme/${id}/`, {
        method: "DELETE",
        headers: {
          Authorization:`Bearer ${authTokens.access}`
        }
      });

      if (response.ok) {
        setShowAlert(true)
        setAlerts("scheme deleted Sucessfully")
        setAlertSeverity('success')
        setdisablebutton(false)
        console.log('sucess')
      } else {
        let errorData = await response.json();
        const errorMessage = errorData.error
        setShowAlert(true)
        setAlerts('There is an error in processing your data')
        setAlertSeverity('error')
        setdisablebutton(false)
        console.log(errorMessage)
      }
    }catch (error) {
      console.error("Error occurred while deleting user:", error);
      alert("An error occurred while trying to delete the user. Please try again.");
    } finally{
      setLoading(false)
    }
 };

 useEffect(() => {
  checkScheme()
 }, [allScheme])

	return(
		<div>
      <div className="position-sticky">
      <AdminDashFrame />
      </div>
			<section>
        <div className="main-content">
          {loadingModal &&
            < LoadingSpiner/>
          }

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
                <h5>View Scheme</h5>
                <p>This are the list off scheme off work for this term</p>
              </div>
            </div>

            <form action="">
              <div className="row add-student">
                <div className="col-sm-4 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius admin-input" placeholder="Search by Subject..."/>
                </div>
              </div>            
            </form> 



            <section className="container-lg navyblue-blackground-dash">
              <div className="view-content-height scroll-bar">
                <div className="non-wrap-text">
                  <table className="table1 ">
                    <thead>
                      <tr>
                        <th>Subjects</th>
                        <th>Link</th>
                      </tr>
                    </thead>
                    <tbody className="admin-home-table view-schoolitems-table ">
                      {schemeData.map((schemeDat, index) => (
                        <tr key={index}>
                          <td>{schemeDat.subject_name?.name}</td>
                          <td>
                            <DownloadLink
                              url={schemeDat.scheme}
                              fileName={`Scheme_${schemeDat.subject}.pdf`}
                            />
                          </td>
                          <td>
                            <button disabled={disablebutton} className="admin-view-scheme-page-btn" onClick={() => deleteScheme(schemeDat.id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                 


                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      
		</div>
	)
}
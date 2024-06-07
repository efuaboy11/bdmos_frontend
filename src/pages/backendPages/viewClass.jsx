import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link,  useNavigate } from "react-router-dom"
import {faPenSquare, faPenToSquare, faTrashCan, faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect, useContext } from "react"
import AuthContext from "../../context/AuthContext"
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from "@mui/material"

export const ViewClass = () =>{

  const navigate = useNavigate()


  const [className, setClassName] = useState("") 
  const {authTokens, setDetails} = useContext(AuthContext)
  const [datas, setdatas] = useState([])
  console.log(datas)


  const [showModal, setShowModal] = useState(false)
  const [selectedClassID, setSelectedClassID] = useState(null)

  const [alerts, setAlerts] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)
  

  const filterClass = async() => {
    let url;
    if (className.length !== 0) {
      url = `https://bdmos.onrender.com/api/class/?search=${className}`;
    } else {
      getClass();
      return;
    }

    let response = await fetch(url,{
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${authTokens.access}`
      }
    })

    const data = await response.json()

    if(response.ok){
      setdatas(data)
    }else{
      console.error("Failed to fetch students")
    }
  }

  const getClass = async() => {
    let response = await fetch("https://bdmos.onrender.com/api/class/",{
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
    });

    const data = await response.json()

    if(response.ok){
      setdatas(data)
    }else{
      console.error("Failed to fetch students", response.statusText)
    }
  }

  const showDeleteModal = (id) => {
    setSelectedClassID(id)
    setShowModal(true)
  }

  const hideDeleteModal = () => {
    setShowModal(false)
    setSelectedClassID(null)
  }

  const handleEdit = (id) => {
    editPage(id)
  }

  const deleteClass = async () => {
    setdisablebutton(true)

    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }
    let response = await fetch(`https://bdmos.onrender.com/api/class/${selectedClassID}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authTokens.access}`
      }
    })

    if (response.ok) {
      setShowAlert(true)
      setAlerts("Class deleted Sucessfully")
      setAlertSeverity('success')
      setLoader(false)
      setdisablebutton(false)
      console.log('sucess')
      setdatas(datas.filter(dat => dat.id !== selectedClassID))
      setShowModal(false)
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
  }

  const editPage = async (id) => {
    setLoader(true)

    let response = await fetch(`https://bdmos.onrender.com/api/class/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`
      }
    })

    const data = await response.json()

    if (response.ok) {
      setLoader(false)
      setDetails(data)
      navigate(`/admin/viewClass/${data.id}`)
    } else {
      setLoader(false)
      setShowAlert(true)
      setAlerts('There is an error in processing your data')
      setAlertSeverity('error')
    }
  }


  useEffect(() =>{
    if(!className){
      getClass()
    }else if(className){
      filterClass()
    }else{
      getClass()
    }

  },[datas])

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

          {showModal &&
            <section className="overlay-background">
              <div className="admin-modal-container">
                <div className="admin-modal-content">
                  <h5>Delete Class?</h5>
                  <hr />
                  <p>This will delete the class.</p>
                  <div className="d-flex justify-content-between py-3">
                    <div></div>
                    <div>
                      <button className="admin-modal-close mx-3"  onClick={hideDeleteModal}>Cancel</button>
                      <button className="admin-modal-delete" disabled={disablebutton} onClick={deleteClass}>{loader ? <CircularProgress color="inherit"/> : "Delete"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }

          
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>View Class</h5>
                <p>List Off Class uploaded</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin/AddClass" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>Upload Classes</Link>
						  </div>
            </div>

            <form action="">
              <div className="row add-student">
                <div className="col-sm-4 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius admin-input" placeholder="Search by Class..."  value={className} onChange={(e) => setClassName(e.target.value)}/>
                </div>


              </div>            
            </form> 



            <section className="container-lg navyblue-blackground-dash">
              <div className="view-content-height scroll-bar">
                <div className="non-wrap-text">
                  <p className=" ps-3 py-2">Event Upload</p>
                  <table className="table1 ">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Classes</th>
                        <th>Subjects</th>
                        <th>Actions</th>

                      </tr>
                    </thead>
                    

                    <tbody className="admin-home-table view-schoolitems-table ">
                      {datas.map((data) => (

                        <tr>
                          <td>{data.id}</td>
                          <td>{data.name}</td>
                          <td>{data.all_subjects[0]?.name}</td>
                          <td>{<FontAwesomeIcon  onClick={() => handleEdit(data.id)} className="pe-3 cursor-pointer" icon={faPenToSquare}/>}  {<FontAwesomeIcon onClick={() => showDeleteModal(data.id)} className="cursor-pointer" icon={faTrashCan}/>}</td> 
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
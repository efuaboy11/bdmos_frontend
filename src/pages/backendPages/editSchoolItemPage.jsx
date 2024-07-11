import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext,  useEffect,  useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Alert, CircularProgress } from "@mui/material"
import { useForm } from "react-hook-form"
import { LoadingSpiner } from "../../component/spin"

export const EditSchoolItemPage = () =>{
  
  const {authTokens} = useContext(AuthContext)
  const [details, setDetails] = useState(null)

  const [showModal, setShowModal] = useState(false)

  const [name, setName] = useState('')
  const [amount, setAmount] = useState( '')
  

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
      updateItem(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

  const updateItem = async(e) => {
    e.preventDefault()
    if(loader){
      setLoader(false)
    }else{
      setLoader(true)
    }

    const formData = new FormData()
    formData.append("title", name);
    formData.append("price", amount);

    console.log(formData)

    try {
      const response = await fetch(`https://bdmos.onrender.com/api/items/${details.id}/`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${authTokens.access}`
        },
        body: formData
      })
      if (response.status === 200 || response.status === 200){
        setShowAlert(true)
        setAlert("Item Updated Successfully")
        console.log('sucess')
        setAlertSeverity("success")
        setLoader(false)
        setdisablebutton(false)
        setShowModal(true)
      }else{
        const errorData = await response.json()
        const errorMessage = errorData.error
        setShowAlert(true)
        setAlert('There an error in processing your data')
        setAlertSeverity("error")
        console.log(errorMessage)
        setLoader(false)
        setdisablebutton(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    const data = localStorage.getItem("schoolItemsEditData")
    if(data){
      const parsedData = JSON.parse(data)
      setDetails(parsedData)
      setName(parsedData.title || "")
      setAmount( parsedData.price || "")

    }
  }, [])



	return(
		<div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
			<section>
        <div className="main-content">
          {loader &&
            < LoadingSpiner/>
          }

          {showModal &&
            <section className="overlay-background">
              <div className="admin-modal-container">
                <div className="admin-modal-content">
                  <h5 className="sucessfull-text">Sucess</h5>
                  <hr />
                  <p>School Item  successfully updated.</p>
                  <div className="d-flex justify-content-between py-3">
                    <div></div>
                    <div>
                      <Link to="/admin/EditSchoolItem" className="admin-modal-close mx-3">Done</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
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
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>Edit School ITEM</h5>
              </div>
            </div>


            <section>
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE FILL IN THE REQUIRED DETAILS</p>
                </div>

               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row  mx-2">
                      <div className="col-md-6 mt-3">
                        <label htmlFor="" className="p-2">Name</label>
                        <input className={`form-control delete-student-input form-dark ${errors.name ? 'error-input' : ''}`} {...register('name', {required: true})} placeholder="Enter name..."  value={name} onChange={(e) => setName(e.target.value)}/>
                        {errors.name && <span style={{color: 'red'}}>This Feild is required</span>}
                      </div>
                      <div className="col-md-6 mt-3">
                        <label htmlFor="" className="p-2">Amount</label>
                        <input className={`form-control delete-student-input form-dark ${errors.amount ? 'error-input' : ''}`} {...register('amount', {required: true})}  placeholder="Enter Amount.."  value={amount} onChange={(e) => setAmount(e.target.value)}/>
                        {errors.amount && <span style={{color: 'red'}}>This Feild is required</span>}
                      </div>
                      <div className="col-md-10 pt-3 pb-5 mb-4">
                        <button className="admin-btn py-2 px-5" type="submit" disabled={disablebutton}>Submit</button>
                        
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
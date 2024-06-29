import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link, useNavigate } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useState } from "react"
import { CircularProgress } from "@mui/material"
import AuthContext from "../../context/AuthContext"
import { useForm } from "react-hook-form"
import Alert from '@mui/material/Alert';
import { LoadingSpiner } from "../../component/spin"

export const GenerateScratchNumber = () =>{
  const [amount, setAmount] = useState("")

  const { setScratchCard} = useContext(AuthContext)

  const navigate = useNavigate()
  const [alert, setAlert] = useState("")
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
      generateScratchPins(e)
    }else{
      console.log('error')
      setdisablebutton(false)
    }
  }

  const generateScratchPins = async (e) => {
    e.preventDefault()
    setLoader(true)

    try {
      let response = await fetch("https://bdmos.onrender.com/api/scratch_cards/",{
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          amount: amount
        })
      })
  
      const data = await response.json()
  
      if(response.status === 201){
        setScratchCard(data)
        console.log('sucess')
        console.log(data)
        setLoader(false)
        setdisablebutton(false)
        setShowAlert(true)
        setAlert("pin Created Successfully")
        setAlertSeverity("success")
        setAmount('')
      }else{
        alert(data)
        setShowAlert(true)
        setAlert('There is an error processing your data')
        setAlertSeverity("error")
        setLoader(false)
        setdisablebutton(false)
      }
    } catch (error) {
      console.log("Error", error)
      setLoader(false)
      setdisablebutton(false)
    } finally{
      setLoader(false)
    }
  }

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
                <h5>GENERATE SCRATCH NUMBER </h5>
                <p>Each Numbers aare unique</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to='/admin/viewGeneratedScratchNumber'>View Scratch Number Generate</Link>
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
                      <label htmlFor="" className="form-label">Amount</label>
                      <input type="text" className={`form-control  form-dark ${errors.pin ? 'error-input' : ''}`} {...register('pin', {required: true})}   placeholder="Amount Of Pin To Generate..." value={amount} onChange={(e) => setAmount(e.target.value)}/>
                      {errors.pin && <span style={{color: 'red'}}>This Feild is required</span>} 
                    </div>
                    
                    <div className="col-md-10 pt-3 pb-5 mb-4">
                      <button type="submit" className="admin-btn py-2 px-5"  disabled={disablebutton}>
                        Submit
                      </button>
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
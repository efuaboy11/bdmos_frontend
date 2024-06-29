import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faPlus, faPlusCircle, faTrash, faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useContext, useEffect } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"


export const PaymentOptions = () => { 
	const {authTokens} = useContext(AuthContext)

	const [datas, setDatas] = useState([])
  const [PaymertName, setPaymertName] = useState('')

	const [paymentID, setPaymentID] = useState("")

	const [paymentName, setPaymentName] = useState("")


  const [date, setDate] = useState("")
  const [amount, setAmount] = useState("")
  const [alerts, setAlerts] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)

	const [showModal, setShowModal] = useState(false)

	const PaymentOptions = async () => {
    const response = await fetch("https://bdmos.onrender.com/api/bills/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      setDatas(data);
    } else {
      console.error("Failed to fetch sessions", response.statusText);
    }
  };
	
	const hideDeleteModal = () => {
    setShowModal(false)
  }

	const showDeleteModal = (id) => {
    setPaymentID(id)
    console.log(paymentID)
    setShowModal(true)
  }

	const deletePaymentOptions = async () => {
    setdisablebutton(true)

    if (loader) {
      setLoader(false)
    } else {
      setLoader(true)
    }
    let response = await fetch(`https://bdmos.onrender.com/api/bills/${paymentID}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authTokens.access}`
      }
    })

    if (response.ok) {
      setShowAlert(true)
      setAlerts("Payment Options deleted successfully")
      setAlertSeverity('success')
      setLoader(false)
      setdisablebutton(false)
      console.log('success')
      setDatas(datas.filter(dat => dat.id !== paymentID))
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


	useEffect(() => {
		PaymentOptions();
  }, [datas]);

	return(
		<div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
			<section>
        <div className="main-content">

				{showModal &&
            <section className="overlay-background">
              <div className="admin-modal-container">
                <div className="admin-modal-content">
                  <h5>Delete Email?</h5>
                  <hr />
                  <p>This will delete the email.</p>
                  <div className="d-flex justify-content-between py-3">
                    <div></div>
                    <div>
                      <button className="admin-modal-close mx-3" onClick={hideDeleteModal}>Cancel</button>
                      <button className="admin-modal-delete" disabled={disablebutton} onClick={deletePaymentOptions}>
                        {loader ? <CircularProgress color="inherit" /> : "Delete"}
                      </button>
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
                  {alerts}
                </Alert>
              )}
            </div>
          </div>
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>Payment Options</h5>
                <p>View All Payent Options</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
                <Link to="/admin/addSubject" className="light-navyblue-background p-3 border-radius">
                  <FontAwesomeIcon icon={faPlusCircle} className="px-2" />
                  Add Payment
                </Link>
              </div>
            </div>
        


            <form action="">
              <div className="row add-student g-3">
                <div className="col-sm-3 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius view-student-input " placeholder="Search by Name..."  value={paymentName} onChange={(e) => setPaymentName(e.target.value)}/>
                </div>

                {/* <div className="col-sm-1 mb-3">
                  <input type="button" value={"Submit"} className=" p-2 form-dark border-radius" onClick={filterAllStudent}/>
                </div> */}
              </div>            
            </form>

          </div>

          <section className="container-lg py-5 non-wrap-text">
            <div className="navyblue-blackground-dash">

              <div className="scroll-bar admin-payment-table">
                <table className="table1">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
											<th>Action</th>
                    </tr>
                  </thead>

                  <tbody className="admin-home-table">
									  {datas.map((data) =>(
											<tr>
												<td>{data.id}</td>
												<td>{data.name}</td>
												<td><FontAwesomeIcon className="cursor-pointer" icon={faTrash} onClick={() => showDeleteModal(data.id)}/></td>
											</tr>
										))}


                  </tbody>
                </table>
              </div>
            </div>

          </section>

          
        </div>

      </section>
		</div>
	)
}
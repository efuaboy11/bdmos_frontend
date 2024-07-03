import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faPlus, faPlusCircle, faTrash, faUser, faX} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useContext, useEffect } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"


export const PendingPayment = () => {
  const [studentID, setStudentID] = useState('')
  const [date, setDate] = useState("")
  const [amount, setAmount] = useState("")
  const [alert, setAlert] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)


  const {authTokens} = useContext(AuthContext)

  const [datas, setDatas] = useState([])
  const [showReciptModal, setShowReciptModal] = useState(false)
  const [paymentDetails, setPaymentDetails] = useState([])


  const recieptContext =(status, studentID, reason, amount, session, term, createdDate, updatedDate) =>{
    setPaymentDetails([{status, studentID, reason, amount, session, term, createdDate, updatedDate}])
    setShowReciptModal(true)
  }

  const closeModal = () => {
    setShowReciptModal(false)
  }



  const getPendingPayment = async () => {
    try {
      let response = await fetch("https://bdmos.onrender.com/api/transactions/pending/", {
        method: "GET",
        headers: {
          "Content-Type":"application",
          Authorization: `Bearer ${authTokens.access}`
        }
      })
  
      const data = await response.json()
  
      if(response.ok){
        const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        setDatas(sortedData)
        console.log("approved Payment Type Gotten Successfully")
      } else{
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPendingPayment()
  },[datas])
	return(
		<div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
			<section>
        <div className="main-content">
          {showReciptModal &&
            <section className="overlay-background">
              <div className="admin-allPayment-modal-conatiner">
                <div className="admin-allPayment-modal-content">
                  {paymentDetails.length > 0 && (
                    <div>
                      <div className="d-flex justify-content-end">
                        <FontAwesomeIcon className="cursor-pointer" icon={faX} onClick={closeModal}/>
                      </div>
                      <div>
                        <h6 className="font-bold text-center admin-allPayment-h6">PAYMENT RECIEPT</h6>
                      </div>

                      <div className="pt-5">
                        <p className="pb-2"><span className="pe-2">STATUS:</span><span className={`${paymentDetails[0].status == "Pending" ? "pending" : "sucessfull"} ${paymentDetails[0].status == "Declined" && "failed"} text-white1 px-3 py-1`}>{paymentDetails[0].status} </span></p>
                        <p className="pb-2"><span>PAID TO</span>: BDOMS/fredita Children Academy</p>
                        <p className="pb-2"><span>PAID BY</span>: {paymentDetails[0].studentID}</p>
                        <p className="pb-2"><span>PAYMENT REASON</span>: {paymentDetails[0].reason}</p>
                        <p className="pb-2"><span>AMOUNT</span>: {paymentDetails[0].amount}</p>
                        <p className="pb-2"><span>SESSION</span>: {paymentDetails[0].session}</p>
                        <p className="pb-2"><span>TERM</span>: {paymentDetails[0].term}</p>
                        <p className="pb-2"><span>CREATED_AT</span>: {paymentDetails[0].createdDate}2021/2022</p>
                        <p className="pb-2"><span>UPDATED_AT</span>:{paymentDetails[0].updatedDate}</p>
                      </div>

                      <div className="row pt-5 pb-4">
                        <div className="col-6">
                          <div className="admin-allPayment-signatries">
                            <div className="d-flex">
                              <div>
                              <p className="first-p">MANAEMENT</p>
                              <p className="px-3">Signature of Mangement</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="admin-allPayment-signatries">
                            <div className="d-flex">
                              <div>
                                <p className="first-p">{paymentDetails[0].createdDate}</p>
                                <p className="px-5">Date</p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                      
                      <div className="light-background2">
                        <div className="p-2">
                          <div>
                            <p>For more information you contact us through:</p>
                            <p>Phone Number: 08060918549, 0807284591</p>
                            <p>Email: iseghohimhene@gmail.com</p>
                          </div>
                        </div>

                      </div>

                    </div>
                  )}

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
                <h5>Declined Payment</h5>
                <p>View All declined Payment</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
                <Link to="/admin/addPayment" className="light-navyblue-background p-3 border-radius">
                  <FontAwesomeIcon icon={faPlusCircle} className="px-2" />
                  Add Payment
                </Link>
              </div>
            </div>
        


            <form action="">
              <div className="row add-student g-3">
                <div className="col-sm-3 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius view-student-input " placeholder="Search by Student ID..."  value={studentID} onChange={(e) => setStudentID(e.target.value)}/>
                </div>

                <div className="col-sm-3 mb-4">
                  <input type="date" className=" p-2 form-dark border-radius view-student-input" placeholder="Search by Date..."  value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>

                <div className="col-sm-3 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius view-student-input" placeholder="Search by Amount..."  value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>

                {/* <div className="col-sm-1 mb-3">
                  <input type="button" value={"Submit"} className=" p-2 form-dark border-radius" onClick={filterAllStudent}/>
                </div> */}
              </div>            
            </form>

          </div>

          <section className="container-lg pt-5 non-wrap-text">
            <div className="navyblue-blackground-dash">
              <div className="scroll-bar admin-payment-table">
                <table className="table1">
                  <thead>
                    <tr>
                      <th>Created Date</th>
                      <th>Updated Date</th>
                      <th>Student ID</th>
                      <th>Reason</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th>Details</th>
                    </tr>
                  </thead>

                  <tbody className="admin-home-table">
                    {datas.map((data) =>(
                      <tr>
                        <td>{data.created_at}</td>
                        <td>{data.updated_at}</td>
                        <td>{data.transaction_id}</td>
                        <td>{data.fee_type}</td>
                        <td><p className={`${data.status == "Pending" ? "pending" : "sucessfull"} ${data.status == "Declined" && "failed"}`}>{data.status}</p></td>
                        <td>{data.amount}</td>
                        <td><Link className="button-dashboard" onClick={() => recieptContext(data.status, data.transaction_id, data.fee_type,   data.amount, data.session, data.term, data.created_at, data.updated_at)}>View</Link></td>
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
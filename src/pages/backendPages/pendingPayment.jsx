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
                      <th>Transaction Date</th>
                      <th>Student ID</th>
                      <th>Reason</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th>Recipit</th>
                      <th className="text-center">Action</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody className="admin-home-table">
                  <tr>
                    <td>01/02/2002</td>
                    <td>SBHSISE34</td>
                    <td>Payment off fees</td>
                    <td><p className="pending">Pending</p></td>
                    <td>$30,000</td>
                    <td><a href="#" className="button-dashboard">View</a></td>
                    <td>

                      <div className="d-flex justify-content-between">
                        <div></div>
                        <div>
                          <button className="admin-pending-payment-decline-btn me-3">Decline</button>
                          <button className="admin-pending-payment-approve-btn">
                            {loader ? <CircularProgress color="inherit" /> : "Approve"}
                          </button>
                        </div>
                      </div>
                    </td>
                    <td><FontAwesomeIcon icon={faTrash}/></td>
                  </tr>

                  <tr>
                    <td>10/04/2005</td>
                    <td>SBHSISE34</td>
                    <td>Payment off P.T.A</td>
                    <td><p className="pending">Pending</p></td>
                    <td>$30,000</td>
                    <td><a href="#" className="button-dashboard">View</a></td>
                    <td>
                      <div className="d-flex justify-content-between">
                        <div></div>
                        <div>
                          <button className="admin-pending-payment-decline-btn me-3">Decline</button>
                          <button className="admin-pending-payment-approve-btn">
                            {loader ? <CircularProgress color="inherit" /> : "Approve"}
                          </button>
                        </div>
                      </div>
                    </td>
                    <td><FontAwesomeIcon icon={faTrash}/></td>
                  </tr>

                  <tr>
                    <td>01/02/2011</td>
                    <td>SBHSISE34</td>
                    <td>Payment off fees</td>
                    <td><p className="pending">Pending</p></td>
                    <td>$30,000</td>
                    <td><a href="#" className="button-dashboard">View</a></td>
                    <td>

                      <div className="d-flex justify-content-between">
                        <div></div>
                        <div>
                          <button className="admin-pending-payment-decline-btn me-3">Decline</button>
                          <button className="admin-pending-payment-approve-btn">
                            {loader ? <CircularProgress color="inherit" /> : "Approve"}
                          </button>
                        </div>
                      </div>
                    </td>
                    <td><FontAwesomeIcon icon={faTrash}/></td>
                  </tr>


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
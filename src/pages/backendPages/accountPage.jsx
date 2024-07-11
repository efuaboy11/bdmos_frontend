import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUpload, faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"
import moneyAdd from "../../img/moneyAdd.png"
import moneyPending from "../../img/moneyPending.png"
import moneyBulk from "../../img/moneyBulk.png"
import moneyCancel from "../../img/moneyDecline.png"




export const AccountPage = () =>{
  const [appovedPaymentLength, setAppovedPaymentLength] = useState(0)
  const [allPaymentLength, setAllPaymentlength] = useState(0)
  const [pendingPaymentLength, setPendingPaymentLength] = useState(0)
  const [declinePaymentLenth, setDeclinePaymentLength] = useState(0)
  const [paymentOptionsLenth, setPaymentOptionsLenth] = useState(0)

  const {authTokens} = useContext(AuthContext)


  const getApprovedPayment = async () => {
    try {
      let response = await fetch("https://bdmos.onrender.com/api/transactions/approved/", {
        method: "GET",
        headers: {
          "Content-Type":"application",
          Authorization: `Bearer ${authTokens.access}`
        }
      })
  
      const data = await response.json()
      const length = data.length
      setAppovedPaymentLength(length)
    } catch (error) {
      console.log(error)
    }
  }

  const getDeclinedPayment = async () => {
    try {
      let response = await fetch("https://bdmos.onrender.com/api/transactions/declined/", {
        method: "GET",
        headers: {
          "Content-Type":"application",
          Authorization: `Bearer ${authTokens.access}`
        }
      })
  
      const data = await response.json()
      const length = data.length
      setDeclinePaymentLength(length)
    } catch (error) {
      console.log(error)
    }
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
      const length = data.length
      setPendingPaymentLength(length)
    } catch (error) {
      console.log(error)
    }
  }

  const getAllPayment = async () => {
    try {
      let response = await fetch("https://bdmos.onrender.com/api/all_payments/", {
        method: "GET",
        headers: {
          "Content-Type":"application",
          Authorization: `Bearer ${authTokens.access}`
        }
      })
  
  
      const data = await response.json()
      const length = data.length
      setAllPaymentlength(length)
    } catch (error) {
      console.log(error)
    }
  }

  const PaymentOptions = async () => {
    const response = await fetch("https://bdmos.onrender.com/api/bills/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`,
      },
    });

    const data = await response.json();
    const length = data.length
    setPaymentOptionsLenth(length)
  };
  useEffect(() => {
    getApprovedPayment()
  },[appovedPaymentLength])

  useEffect(() => {
    getDeclinedPayment()
  },[declinePaymentLenth])

  useEffect(() => {
    getPendingPayment()
  },[pendingPaymentLength])

  useEffect(() => {
    getAllPayment()
  },[allPaymentLength])

  useEffect(() => {
    PaymentOptions()
  },[paymentOptionsLenth])


	return(
		<div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
			<section>
        <div className="main-content">
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h4>School Account</h4>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
                <Link to="/admin/addPayment" className="light-navyblue-background p-3 border-radius">
                  <FontAwesomeIcon icon={faUpload} className="px-2" />
                  Add Payment
                </Link>
              </div>
            </div>     
          </div>

          <div className="container-lg">
            <div className="account-page-conatiner">
              <div className="row py-3">
                  <div className="col-xxl-12">
                    <div className="row  g-4">
                    <div className="col-md-4 col-sm-6 col-xxl-3 ">
                        <div className="navyblue-blackground-dash  px-3">
                          <Link to="/admin/addPayment" className="d-flex  justify-content-between account-page-link">              

                            <div className="py-4">
                              <p>Add Payment</p>
                            </div>
                            <img className="py-4 px-2" src={moneyBulk} alt="" width="100px"/>
                          </Link>
                        </div>

                      </div>

                      <div className="col-md-4 col-sm-6 col-xxl-3 ">
                        <div className="navyblue-blackground-dash  px-3">
                          <Link to="/admin/allPayment" className="d-flex  justify-content-between account-page-link">              

                            <div className="py-4">
                              <p>All Payment</p>
                              <h1>{allPaymentLength}</h1>
                            </div>
                            <img className="py-4 px-2" src={moneyBulk} alt="" width="100px"/>
                          </Link>
                        </div>

                      </div>

                      <div className="col-md-4 col-sm-6 col-xxl-3 ">
                        <div className="navyblue-blackground-dash  px-3">
                          <Link to="/admin/approvePayment" className="d-flex  justify-content-between account-page-link">              

                            <div className="py-4">
                              <p>Approve Payment</p>
                              <h1>{appovedPaymentLength}</h1>
                            </div>
                            <img className="py-4 px-2" src={moneyAdd} alt="" width="100px"/>
                          </Link>
                        </div>

                      </div>

                      <div className="col-md-4 col-sm-6 col-xxl-3 ">
                        <div className="navyblue-blackground-dash  px-3">
                          <Link to="/admin/declinePayment" className="d-flex  justify-content-between account-page-link">              

                            <div className="py-4">
                              <p>Decline Payment</p>
                              <h1>{declinePaymentLenth}</h1>
                            </div>
                            <img className="py-4 px-2" src={moneyCancel} alt="" width="100px"/>
                          </Link>
                        </div>

                      </div>

                      <div className="col-md-4 col-sm-6 col-xxl-3 ">
                        <div className="navyblue-blackground-dash  px-3">
                          <Link to='/admin/pendingPayment' className="d-flex  justify-content-between account-page-link">              

                            <div className="py-4">
                              <p>Pending Payment</p>
                              <h1>{pendingPaymentLength}</h1>
                            </div>
                            <img className="py-4 px-2" src={moneyPending} alt="" width="100px"/>
                          </Link>
                        </div>

                      </div>

                      <div className="col-md-4 col-sm-6 col-xxl-3 ">
                        <div className="navyblue-blackground-dash  px-3">
                          <Link to='/admin/paymentOptions' className="d-flex  justify-content-between account-page-link">              

                            <div className="py-4">
                              <p>Payment Options</p>
                              <h1>{paymentOptionsLenth}</h1>
                            </div>
                            <img className="py-4 px-2" src={moneyPending} alt="" width="100px"/>
                          </Link>
                        </div>

                      </div>


                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </section>
		</div>
	)
  

 


}
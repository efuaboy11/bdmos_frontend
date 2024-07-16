import { AdminDashFrame } from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import { faEye, faPlusCircle, faTrash, faUser, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useContext, useEffect } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"
import { DashFrame } from "../../component/dashFrame"

export const StoreAccountClient = () => {
  const [studentID, setStudentID] = useState('')
  const [date, setDate] = useState("")
  const [amount, setAmount] = useState("")
  const [alert, setAlert] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alertSeverity, setAlertSeverity] = useState("")
  const { handleSubmit, register, formState: { errors, isValid } } = useForm()
  const [loader, setLoader] = useState("")
  const [disablebutton, setDisablebutton] = useState(false)

  const { authTokens } = useContext(AuthContext)

  const [datas, setDatas] = useState([])
  console.log(datas)

  const [showReciptModal, setShowReciptModal] = useState(false)
  const [paymentDetails, setPaymentDetails] = useState([])

  const recieptContext = (status, studentID, amount, createdDate, orderList, overallTotal) => {
    setPaymentDetails([{ status, studentID, amount, createdDate, orderList, overallTotal }])
    setShowReciptModal(true)
  }

  const closeModal = () => {
    setShowReciptModal(false)
  }

  const getAllPayment = async () => {
    try {
      let response = await fetch("https://bdmos.onrender.com/api/orders/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`
        }
      })

      const data = await response.json()

      if (response.ok) {
        const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        setDatas(sortedData)
        console.log("All Payment Type Gotten Successfully")
      } else {
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const filterAllPayment = async () => {
    if (date.length === 0) return;

    let url = `https://bdmos.onrender.com/api/orders/?search=${date}`;

    try {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`
        }
      })

      if (!response.ok) {
        console.error("Failed to fetch students")
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const data = await response.json()
      setDatas(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!date) {
      getAllPayment()
    } else {
      filterAllPayment()
    }
  }, [date])

  return (
    <div>
      <div className="position-sticky">
        <DashFrame />
      </div>
      <section id="storeAccountAllPayment">
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

          {showReciptModal &&
            <section className="overlay-background">
              <div className="admin-allPayment-modal-conatiner storeAccountAllPayment-modal">
                <div className="admin-allPayment-modal-content max-heigh-600px scroll-bar-black-y">
                  <div className="">
                    {paymentDetails.length > 0 && (
                      <div>
                        <div className="d-flex justify-content-end">
                          <FontAwesomeIcon className="cursor-pointer" icon={faX} onClick={closeModal} />
                        </div>
                        <div>
                          <h6 className="font-bold text-center admin-allPayment-h6">PAYMENT RECIEPT</h6>
                        </div>
                        <div className="pt-5">
                          <p className="pb-2"><span className="pe-2">STATUS:</span><span className={`${paymentDetails[0].status == "Pending" ? "pending" : "sucessfull"} ${paymentDetails[0].status == "Declined" && "failed"} text-white1 px-3 py-1`}>{paymentDetails[0].status} </span></p>
                          <p className="pb-2"><span>PAID TO</span>: BDOMS/fredita Children Academy</p>
                          <p className="pb-2"><span>PAID BY</span>: {paymentDetails[0].studentID}</p>
                          <p className="pb-2"><span>CREATED_AT</span>: {paymentDetails[0].createdDate}</p>
                        </div>

                        <div className="pt-4">
                          <h6>Order Items:</h6>
                          <div className="light-background2 width-100 k scroll-bar-black non-wrap-text">
                            <table className="table1">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Quantity</th>
                                  <th>Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                {paymentDetails[0].orderList.map((item, index) => (
                                  <tr key={index}>
                                    <td>{item.item}</td>
                                    <td>{item.quantity}</td>
                                    <td>₦ {item.get_total_price}</td>
                                  </tr>
                                ))}
                                <tr>
                                  <td className="font-bold">TOTAL</td>
                                  <td></td>
                                  <td className="font-bold">₦ {paymentDetails[0].overallTotal} </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="row py-5">
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

                        <div className="light-background2 mt-5">
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
              </div>
            </section>
          }
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>School Store</h5>
                <p>Pending Payment</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
                <Link to="/admin/uploadSchoolItems" className="light-navyblue-background p-3 border-radius">
                  <FontAwesomeIcon icon={faPlusCircle} className="px-2" />
                  Add Item
                </Link>
              </div>
            </div>

            <form action="">
              <div className="row add-student g-3">
                <div className="col-sm-3 mb-4">
                  <input type="text" className="p-2 form-dark border-radius view-student-input" placeholder="Search by Date..." value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
              </div>
            </form>
          </div>

          <section className="container-lg pt-1 non-wrap-text">
            <div className="navyblue-blackground-dash">
              <div className="scroll-bar admin-payment-table">
                <table className="table1">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody className="admin-home-table">
                    {datas.map((data) => (
                      <tr key={data.id}>
                        <td>{data.created_at}</td>
                        <td><p className={`${data.status == "pending" ? "pending" : "sucessfull"} ${data.status == "declined" && "failed"}`}>{data.status}</p></td>
                        <td>₦ {data.order_items.reduce((total, item) => total + item.get_total_price, 0)}</td>
                        <td><Link className="button-dashboard" onClick={() => recieptContext(data.status, data.user, data.amount, data.created_at, data.order_items, data.order_items.reduce((total, item) => total + item.get_total_price, 0))}>View</Link></td>
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

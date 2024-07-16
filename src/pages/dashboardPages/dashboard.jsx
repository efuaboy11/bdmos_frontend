import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DashFrame } from "../../component/dashFrame"
import { faBookOpenReader, faBuildingColumns, faCartShopping, faChartLine, faDollarSign, faNewspaper, faTrash, faUser, faX } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import picture from "../../img/happy-students-jumping-with-flat-design.png"
import AuthContext from "../../context/AuthContext"
import { useState, useEffect, useContext } from "react"

export const DashBoard = () =>{
  const {authTokens, userProfile} = useContext(AuthContext)
  const [datas, setDatas] = useState([])
  const [paymentDatas, setPaymentDatas] = useState([])

  const [showReciptModal, setShowReciptModal] = useState(false)
  const [paymentDetails, setPaymentDetails] = useState([])


  const recieptContext =(status, reason, amount, session, term, createdDate, updatedDate) =>{
    setPaymentDetails([{status,  reason, amount, session, term, createdDate, updatedDate}])
    setShowReciptModal(true)
  }

  const closeModal = () => {
    setShowReciptModal(false)
  }

  console.log(userProfile)
  const getAllPayment = async () => {
    try {
      let response = await fetch("https://bdmos.onrender.com/api/payments/", {
        method: "GET",
        headers: {
          "Content-Type":"application",
          Authorization: `Bearer ${authTokens.access}`
        }
      })
  
      const data = await response.json()
  
      if(response.ok){
        const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        setPaymentDatas(sortedData)
        console.log("All Payment Type Gotten Successfully")
      } else{
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }


  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };


  const getNotification = async() => {
    let response = await fetch("https://bdmos.onrender.com/api/notifications/",{
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
    });

    const data = await response.json()

    if(response.ok){
      const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setDatas(sortedData)
    }else{
      console.error("Failed to fetch students", response.statusText)
    }
  }

  useEffect(() =>{
    getNotification()

  },[datas])

  useEffect(() => {
    getAllPayment()
  },[datas])

  useEffect(() => {
    const reloaded = sessionStorage.getItem('reloaded');

    if (!reloaded) {
      sessionStorage.setItem('reloaded', 'true');
      window.location.reload();
    }
  }, []);


  const truncateDate = (text, wordLimit) => {
    const words = text.split('.');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

 

  return(
    <div>
      <div  className="position-sticky">
        <DashFrame />
      </div>
      <div>
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
                        <p className="pb-2"><span>PAID BY</span>: SBHSISE35</p>
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
          <section className="container-lg">        
            <div className="d-flex justify-content-between align-items-center admin-home-header">
              <div>
                <h1 className="pt-5  admin-head-text">Hi,  {userProfile && userProfile.user_details[0].first_name}</h1> 
                <h6>Ready to start your day with some pitch decks</h6>
              </div>
              <div className="d-none d-lg-block">
                <img src={picture}  alt="" width='300px' className="pt-5"/>
              </div>
              

            </div>
          </section>
          <div>
            <section id="dashboard-display" className="container-lg">

              <div className="row">
                <div className="col-xxl-12">
                  <div className="row g-4">
                    <div className="col-md-4 col-sm-6 col-xxl-3">
                      <div className="navyblue-blackground-dash d-flex  py-3 justify-content-between px-3">
                        <div className="py-4">
                          <p>Name</p>
                          <p>{userProfile && userProfile.user_details[0].first_name}</p>
                        </div>

                        <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faUser}/>

                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3">
                      <Link to="/paymentStep1">
                        <div className="navyblue-blackground-dash d-flex py-3  justify-content-between px-3">
                          <div className="py-4">
                            <p>PAYMENT OFF FEES</p>
                            <p>Make all your payment.</p>
                          </div>

                          <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faDollarSign}/>

                        </div>
                      </Link>

                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3">
                      <Link to="/paymentHistory">
                        <div className="navyblue-blackground-dash d-flex py-3 justify-content-between px-3">
                          <div className="py-4">
                          <p>CHECK BILL</p>
                          <p>View payment history</p>
                          </div>

                          <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faBuildingColumns}/>

                        </div>
                      </Link>

                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3">
                      <Link to="/resultStep1">
                        <div className="navyblue-blackground-dash d-flex py-3 justify-content-between px-3">
                          <div className="py-4">
                          <p>CHECK RESULT</p>
                          <p>See your grades.</p>
                          </div>

                          <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faChartLine}/>

                        </div>
                      </Link>

                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3">
                      <Link to="/schoolStore">
                        <div className="navyblue-blackground-dash d-flex py-3 justify-content-between px-3">
                          <div className="py-4">
                          <p>SCHOOL STORE</p>
                          <p>Make Purcase</p>
                          </div>

                          <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faCartShopping}/>

                        </div>
                      </Link>
                      

                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3">
                      <Link to="/schemeStep1">
                        <div className="navyblue-blackground-dash d-flex py-3 justify-content-between px-3">
                          <div className="py-4">
                          <p>SCHEME OFF WORK</p>
                          <p>Check out scheme</p>
                          </div>

                          <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faBookOpenReader}/>

                        </div>
                      </Link>                   
                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3">
                      <Link to="/noticeBoard">
                        <div className="navyblue-blackground-dash d-flex py-3 justify-content-between px-3">
                          <div className="py-4">
                          <p>NOTIFICATION</p>
                          <p>Check current news</p>
                          </div>

                          <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faBell}/>

                        </div>
                      </Link>                   
                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3">
                      <Link to="/schoolStore/cartPage">
                        <div className="navyblue-blackground-dash d-flex py-3 justify-content-between px-3">
                          <div className="py-4">
                          <p>CART PAGE</p>
                          <p>Check your cart</p>
                          </div>

                          <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faCartShopping}/>

                        </div>
                      </Link>                   
                    </div>
                  </div>
                </div>
              </div>
            </section>
  
            <section className="container-lg pt-5 non-wrap-text">
              <h5 className="pb-2">Payment History</h5>
              <div className="navyblue-blackground-dash">
                <div className="scroll-bar">
                  <table className="table1">
                    <thead>
                      <tr>
                        <th>Created Date</th>
                        <th>Updated Date</th>
                        <th>Reason</th>
                        <th>Status</th>
                        <th>Amount</th>
                        <th>Details</th>
                      </tr>
                    </thead>

                    <tbody className="admin-home-table">
                      {paymentDatas.map((data) =>(
                        <tr>
                          <td>{truncateDate(data.created_at, 1)}</td>
                          <td>{truncateDate(data.updated_at, 1)}</td>
                          <td>{data.fee_type_name.name}</td>
                          <td><p className={`${data.status == "Pending" ? "pending" : "sucessfull"} ${data.status == "Declined" && "failed"}`}>{data.status}</p></td>
                          <td>{data.amount}</td>
                          <td><Link className="button-dashboard" onClick={() => recieptContext(data.status,  data.fee_type_name.name,   data.amount, data.session_name.name, data.term_name.name, data.created_at, data.updated_at)}>View</Link></td>
                        </tr>
                      ))}

                    </tbody>
                  </table>

                  
                </div>


               
              </div>
              <div className="my-4 d-flex justify-content-center">
                  <Link to='/paymentHistory' className="button-dashboard ">View All</Link>

                </div>


            </section>
  
            <section className="notification">  
              <div className="notification dark-background py-2">
                <p className="text-center">Notice Board</p>
              </div>
    
              <div className="notification-text container-lg my-5 ">
                <div className="row justify-content-center">
                
                  {datas.map((data) =>(
                    <div className="row justify-content-center">
                      <div className="col-lg-6">
                        <div className=" p-3 notification-sub-text mb-3">
                          <strong>Posted on {data.date}</strong><br/>
                          <strong>By: Mr {data.teachers_name.first_name}</strong>
                          <p>{truncateText(data.message, 30)}</p>

                        </div>
                      </div>
                    </div>
                  ))}

                </div>

    
    
                <div className="payment-link my-2">
                  <Link to="/noticeBoard" className="button-dashboard">View All</Link>
                </div>
              </div>
    
            </section>              
          </div>
        </div>        
      </div>
        
    </div>

  )
}
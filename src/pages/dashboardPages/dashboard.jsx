import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DashFrame } from "../../component/dashFrame"
import { faBookOpenReader, faBuildingColumns, faCartShopping, faChartLine, faDollarSign, faNewspaper, faTrash, faUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import picture from "../../img/happy-students-jumping-with-flat-design.png"
import AuthContext from "../../context/AuthContext"
import { useState, useEffect, useContext } from "react"

export const DashBoard = () =>{
  const {authTokens} = useContext(AuthContext)
  const [datas, setDatas] = useState([])

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

  return(
    <div>
      <div  className="position-sticky">
        <DashFrame />
      </div>
      <div>
        <div className="main-content">
          <section className="container-lg">        
            <div className="d-flex justify-content-between align-items-center admin-home-header">
              <div>
                <h1 className="pt-5  admin-head-text">Hi,  Micheal!</h1> 
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
                          <p>Micheal</p>
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
                      <Link to="/schoolItems">
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
                        <th>Transaction Date</th>
                        <th>Reason</th>
                        <th>Status</th>
                        <th>Amount</th>
                        <th>Recipit</th>
                      </tr>
                    </thead>

                    <tbody className="admin-home-table">
                    <tr>
                      <td>01/02/2002</td>
                      <td>Payment off fees</td>
                      <td><p className="sucessfull">Successful</p></td>
                      <td>$30,000</td>
                      <td><a href="#" className="button-dashboard">View</a></td>
                    </tr>

                    <tr>
                      <td>10/04/2005</td>
                      <td>Payment off P.T.A</td>
                      <td><p className="failed">Failed</p></td>
                      <td>$30,000</td>
                      <td><a href="#" className="button-dashboard">View</a></td>
                    </tr>

                    <tr>
                      <td>01/02/2011</td>
                      <td>Payment off fees</td>
                      <td><p className="pending">Pending</p></td>
                      <td>$30,000</td>
                      <td><a href="#" className="button-dashboard">View</a></td>
                    </tr>

                    <tr>
                      <td>01/02/2011</td>
                      <td>Payment off fees</td>
                      <td><p className="pending">Pending</p></td>
                      <td>$30,000</td>
                      <td><a href="#" className="button-dashboard">View</a></td>
                    </tr>

                    <tr>
                      <td>01/02/2011</td>
                      <td>Payment off fees</td>
                      <td><p className="pending">Pending</p></td>
                      <td>$30,000</td>
                      <td><a href="#" className="button-dashboard">View</a></td>
                    </tr>


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
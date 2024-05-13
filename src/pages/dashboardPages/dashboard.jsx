import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DashFrame } from "../../component/dashFrame"
import { faBookOpenReader, faBuildingColumns, faCartShopping, faChartLine, faDollarSign, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { faBell } from "@fortawesome/free-regular-svg-icons"


export const DashBoard = () =>{
  return(
    <div>
      <DashFrame />
      <div>
        <div className="main-content">
          <div>
            <section id="dashboard-display" className="container-lg">
              <div className="row justify-content-evenly my-4 g-4">

                <a href="#" className="col-11 col-md-5  col-lg-4 col-xxl-3 d-flex boxing-shadow justify-content-between dasboard-boxes box-1 py-4 student-info-link">
                  <div >
                    <p>Name</p>
                    <p>Micheal</p>
                  </div>
                  <div className="dash-icon">
                   <FontAwesomeIcon className="dashboard-icon ml-text py-3 px-2"  icon={faUser}/>
                  </div>

                </a>
                <Link to="/paymentStep1" className="col-11 col-md-5  col-lg-4 col-xxl-3 d-flex boxing-shadow justify-content-between dasboard-boxes box-2 py-4 payments-dashboard">
                  <div>
                    <p>PAYMENT OFF FEES</p>
                    <p>Make all your payment.</p>
                  </div>
                  <div className="dash-icon">
                   <FontAwesomeIcon className="dashboard-icon ml-text py-3 px-2"  icon={faDollarSign}/>
                  </div>                
                </Link>    
                <Link to="/paymentHistory" className="col-11 col-md-5  col-lg-4 col-xxl-3 d-flex boxing-shadow justify-content-between dasboard-boxes box-3 py-4 paymentHIstory1 ">
                 <div>
                    <p>CHECK BILL</p>
                    <p>View all your payment history</p>
                  </div>
                  <div className="dash-icon">
                   <FontAwesomeIcon className="dashboard-icon ml-text py-3 px-2"  icon={faBuildingColumns}/>
                  </div>   
                </Link>


                <Link to="/timetable" className="col-11 col-md-5  col-lg-4 col-xxl-2 d-flex boxing-shadow justify-content-between dasboard-boxes box-4 py-4">
                < div>
                    <p>TIMETABLE</p>
                    <p>View timetable</p>
                  </div>
                  <div className="dash-icon">
                   <FontAwesomeIcon className="dashboard-icon ml-text py-3 px-2"  icon={faNewspaper}/>
                  </div>   
                </Link>
                
                <Link to="/resultStep1" className=" col-11 col-md-5  col-lg-4 col-xxl-2 d-flex boxing-shadow justify-content-between dasboard-boxes box-5 py-4 result-1-dashboard">
                  <div>
                    <p>CHECK RESULT</p>
                    <p>See your grades.</p>
                  </div>
                  <div className="dash-icon">
                   <FontAwesomeIcon className="dashboard-icon ml-text py-3 px-2"  icon={faChartLine}/>
                  </div>
                </Link>

                <Link to="/schoolItems" className=" col-11 col-md-5  col-lg-4 col-xxl-3 d-flex boxing-shadow justify-content-between dasboard-boxes box-6 py-4">
                 <div>
                    <p>SCHOOL STORE</p>
                    <p>Purchase any off our school.</p>
                  </div>
                  <div className="dash-icon">
                   <FontAwesomeIcon className="dashboard-icon ml-text py-3 px-2"  icon={faCartShopping}/>
                  </div>
                </Link>

                <Link to="/schemeStep1" className="col-11 col-md-5 col-lg-4 col-xxl-3 d-flex boxing-shadow justify-content-between dasboard-boxes box-7 py-4 scheme-1-dashboard">
                  <div>
                    <p>SCHEME OFF WORK</p>
                    <p>Have our guide when studying.</p>
                  </div>
                  <div className="dash-icon">
                   <FontAwesomeIcon className="dashboard-icon ml-text py-3 px-2"  icon={faBookOpenReader}/>
                  </div>
                </Link>

                <Link to="/notification" className="col-11 col-md-5 col-lg-4 col-xxl-3 d-flex boxing-shadow justify-content-between dasboard-boxes box-8 py-4">
                  <div>
                    <p>NOTIFICATION</p>
                    <p>Be current with our latest news.</p>
                  </div>
                  <div className="dash-icon">
                   <FontAwesomeIcon className="dashboard-icon ml-text py-3 px-2"  icon={faBell}/>
                  </div>
                </Link>
              </div>
            </section>
  
            <section className="payment-history boxing-shadow p-3 container-lg">
              <p className="pb-5">Payment History</p>
              <div className="table-responsive">
                <table className="table1">
                  <thead>
                    <tr>
                      <th>Transaction Date</th>
                      <th>Reason</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th></th>
                    </tr>
                  </thead>
  
                  <tbody>
                    <tr>
                      <td>01/02/2002</td>
                      <td>Payment off fees</td>
                      <td><p className="sucessfull">Successful</p></td>
                      <td>$30,000</td>
                      <td><a href="#" className="button boxing-shadow">View</a></td>
                    </tr>
  
        
  
    
                    <tr>
                      <td>10/04/2005</td>
                      <td>Payment off P.T.A</td>
                      <td><p className="failed">Failed</p></td>
                      <td>$30,000</td>
                      <td><a href="#" className="button boxing-shadow">View</a></td>
                    </tr>
  
  
                    <tr>
                      <td>21/06/2010</td>
                      <td>Payment off fees</td>
                      <td><p className="sucessfull">Successful</p></td>
                      <td>$30,000</td>
                      <td><a href="#" className="button boxing-shadow">View</a></td>                  
                    </tr>
  
  
                    <tr>
                      <td>01/02/2011</td>
                      <td>Payment off fees</td>
                      <td><p className="pending">Pending</p></td>
                      <td>$30,000</td>
                      <td><a href="#" className="button boxing-shadow">View</a></td>
                    </tr>
  
                    <tr>
                      <td>01/02/2011</td>
                      <td>Payment off fees</td>
                      <td><p className="sucessfull">Successful</p></td>
                      <td>$30,000</td>
                      <td><a href="#" className="button boxing-shadow">View</a></td>
                    </tr>
  
                    <tr>
                      <td>01/02/2011</td>
                      <td>Payment off fees</td>
                      <td><p className="pending">Pending</p></td>
                      <td>$30,000</td>
                      <td><a href="#" className="button boxing-shadow">View</a></td>
                    </tr>
  
                  </tbody>
                </table>
              </div>
              <div className="payment-link my-2">
                <Link to="/paymentHistory " className="button-dashboard">View All</Link>
              </div>
  
            </section>
  
            <section className="notification">  
              <div className="notification dark-background py-2">
                <p className="text-center">Notice Board</p>
              </div>
    
              <div className="notification-text container-lg my-5 ">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className=" p-3 notification-sub-text mb-3">
                      <strong>Posted on Jan 6, 2022</strong><br/>
                      <strong>By: Mr liam</strong>
                      <p>This to inform every student that next will be a public holiday due to the salah break we wish all off you a happy salah and hope you a good return we school resumes. Happy salah once again!!!!</p>
                    </div>
                  </div>
                </div>
    
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className=" p-3 notification-sub-text mb-3">
                      <strong>Posted on Jan 6, 2022</strong><br/>
                      <strong>By: Mr liam</strong>
                      <p>This to inform every student that next will be a public holiday due to the salah break we wish all off you a happy salah and hope you a good return we school resumes. Happy salah once again!!!!</p>
                    </div>
                  </div>
                </div>
    
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className=" p-3 notification-sub-text mb-3">
                      <strong>Posted on Jan 6, 2022</strong><br/>
                      <strong>By: Mr liam</strong>
                      <p>This to inform every student that next will be a public holiday due to the salah break we wish all off you a happy salah and hope you a good return we school resumes. Happy salah once again!!!!</p>
                    </div>
                  </div>
                </div>
    
                <div className="payment-link my-2">
                  <Link to="/notification" className="button-dashboard">View All</Link>
                </div>
              </div>
    
            </section>              
          </div>
        </div>        
      </div>
        
    </div>

  )
}
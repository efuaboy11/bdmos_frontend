import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AdminDashFrame, DashFrame } from "../../component/adminDashFRame"
import {BarchartFrame, PieChartFrame} from "../../component/chatFrame"
import { faBookOpenReader, faBuildingColumns, faCartShopping, faChartLine, faDollarSign, faNewspaper, faSchool, faUser, faUserGraduate, faUserGroup, faUsers } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { Pie } from "react-chartjs-2"

export const AdminDashHome = () =>{
  return(
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <div className="main-content">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h4 className="pt-5">Welcome Admin!</h4> 
            <div className="pt-5">
              <Link>Home / </Link>
              <Link>Portal</Link>
            </div>

          </div>

          <div className="row justify-content-evenly my-4 g-4">
            <div className="col-11 col-md-5  col-lg-2 d-flex navyblue-blackground-dash justify-content-between">
              <div className="py-4">
                <p>Students</p>
                <h1>100</h1>
              </div>
              <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faUserGraduate}/>
            </div>

            <div className="col-11 col-md-5  col-lg-3  d-flex navyblue-blackground-dash justify-content-between">
              <div className="py-4">
                <p>Teacher</p>
                <h1>32</h1> 
              </div>
              <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faUsers}/>
            </div>

            <div className="col-11 col-md-5  col-lg-2  d-flex navyblue-blackground-dash justify-content-between">
              <div className="py-4">
                <p>Parent</p>
                <h1>62</h1>
              </div>
              <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faUserGroup}/>
            </div>

            <div className="col-11 col-md-5  col-lg-3  d-flex navyblue-blackground-dash justify-content-between">
              <div className="py-4">
                <p>Classes</p>
                <h1>12</h1>
              </div>
              <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faSchool}/>
            </div>
          </div>


        </div>
        <div className="row justify-content-evenly container">
          <div className="col-5 navyblue-blackground-dash">
            <p className="py-3">Number Of Students</p>
            <BarchartFrame />
          </div>

          <div className="col-5 navyblue-blackground-dash ">
            <p className="py-3">Number Of Students</p>
            <div className="m-width d-flex justify-content-center pb-3">
             <PieChartFrame />
            </div>

          </div>
        </div>

        
        <section className="container-lg py-5 ">
          <div className="table-responsive navyblue-blackground-dash">
            <p className=" ps-3 py-2">Recently Added Student</p>
            <table className="table1">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>DOB</th>
                  <th>Father Name</th>
                  <th>Mother Name</th>
                  <th>Mobile Number</th>
                  <th>Address</th>
                  <th>Session</th>
                </tr>
              </thead>

              <tbody className="admin-home-table">
                <tr>
                  <td>SBHSISE234</td>
                  <td>John Doe</td>
                  <td>Basic 4</td>
                  <td>01/02/2003</td>
                  <td>Fred Doe</td>
                  <td>Mary Doe</td>
                  <td>080729022633</td>
                  <td>22 john perkin street, london</td>
                  <td>2023/2024</td>
                </tr>

                <tr>
                  <td>SBHSISE234</td>
                  <td>John Doe</td>
                  <td>Basic 4</td>
                  <td>01/02/2003</td>
                  <td>Fred Doe</td>
                  <td>Mary Doe</td>
                  <td>080729022633</td>
                  <td>22 john perkin street, london</td>
                  <td>2023/2024</td>
                </tr>

                <tr>
                  <td>SBHSISE234</td>
                  <td>John Doe</td>
                  <td>Basic 4</td>
                  <td>01/02/2003</td>
                  <td>Fred Doe</td>
                  <td>Mary Doe</td>
                  <td>080729022633</td>
                  <td>22 john perkin street, london</td>
                  <td>2023/2024</td>
                </tr>

                <tr>
                  <td>SBHSISE234</td>
                  <td>John Doe</td>
                  <td>Basic 4</td>
                  <td>01/02/2003</td>
                  <td>Fred Doe</td>
                  <td>Mary Doe</td>
                  <td>080729022633</td>
                  <td>22 john perkin street, london</td>
                  <td>2023/2024</td>
                </tr>

                <tr>
                  <td>SBHSISE234</td>
                  <td>John Doe</td>
                  <td>Basic 4</td>
                  <td>01/02/2003</td>
                  <td>Fred Doe</td>
                  <td>Mary Doe</td>
                  <td>080729022633</td>
                  <td>22 john perkin street, london</td>
                  <td>2023/2024</td>
                </tr>
              </tbody>
            </table>

            <div className="payment-link my-2">
              <Link to="/paymentHistory " className="button-dashboard">View All</Link>
              </div>
          </div>

        </section>

        <section className="container-lg row">
          <div className="col-5">
            <div className="scroll-bar-x navyblue-blackground-dash non-wrap-text">
              <p className=" ps-3 py-2">Recently Added Teacher</p>
              <table className="table1">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Mobile Number</th>
                    <th>Address</th>
                  </tr>
                </thead>

                <tbody className="admin-home-table">
                  <tr>
                    <td>SBHSISE234</td>
                    <td>John Doe</td>
                    <td>Basic one Teacher</td>
                    <td>080729022633</td>
                    <td>22 john perkin street, london</td>
                  </tr>

                  <tr>
                    <td>SBHSISE234</td>
                    <td>John Doe</td>
                    <td>Basic one Teacher</td>
                    <td>080729022633</td>
                    <td>22 john perkin street, london</td>
                  </tr>

                  <tr>
                    <td>SBHSISE234</td>
                    <td>John Doe</td>
                    <td>Basic one Teacher</td>
                    <td>080729022633</td>
                    <td>22 john perkin street, london</td>
                  </tr>

                  <tr>
                    <td>SBHSISE234</td>
                    <td>John Doe</td>
                    <td>Basic one Teacher</td>
                    <td>080729022633</td>
                    <td>22 john perkin street, london</td>
                  </tr>

                  <tr>
                    <td>SBHSISE234</td>
                    <td>John Doe</td>
                    <td>Basic one Teacher</td>
                    <td>080729022633</td>
                    <td>22 john perkin street, london</td>
                  </tr>
                </tbody>
              </table>

              <div className="payment-link my-2">
                <Link to="/paymentHistory " className="button-dashboard">View All</Link>
                </div>
            </div>
          </div>


        </section>

        <section>

        </section>

      </div>

    </div>

  )
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AdminDashFrame, DashFrame } from "../../component/adminDashFRame"
import {BarchartFrame, PieChartFrame} from "../../component/chatFrame"
import { faBookOpenReader, faBuildingColumns, faCartShopping, faChalkboardTeacher, faChartLine, faDollarSign, faNewspaper, faPeopleGroup, faPlus, faSchool, faUser, faUserGraduate, faUserGroup, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { Pie } from "react-chartjs-2"
import picture from "../../img/Untitled__1_-removebg-preview.png"

export const AdminDashHome = () =>{
  return(
    <div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
      <div className="main-content">
        <div className="container-lg">
          <div className="d-flex justify-content-between align-items-center admin-home-header">
            <div>
              <h1 className="pt-5 leSnake l-text">Welcome Admin!</h1> 
              <p>How can we be off help today?</p>
            </div>

            <img src={picture}  alt="" width='270px' className="pt-5"/>

          </div>
          <div className="row py-3">
                <div className="col-xxl-12">
                  <div className="row  g-4">
                    <div className="col-md-4 col-sm-6 col-xxl-3 ">
                      <div className="navyblue-blackground-dash d-flex  justify-content-between px-3">
                        <div className="py-4 ">
                          <p>Students</p>
                          <h1>100</h1>
                        </div>
                        <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faUserGraduate}/>
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3 ">
                      <div className="navyblue-blackground-dash d-flex  justify-content-between px-3">
                        <div className="py-4 ">
                          <p>Teacher</p>
                          <h1>32</h1> 
                        </div>
                        <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faUsers}/>
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3 ">
                      <div className="navyblue-blackground-dash d-flex  justify-content-between px-3">
                        <div className="py-4">
                          <p>Parent</p>
                          <h1>62</h1>
                        </div>
                        <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faUserGroup}/>
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3   ">
                      <div className="navyblue-blackground-dash d-flex justify-content-between px-3">
                        <div className="py-4 ">
                          <p>Classes</p>
                          <h1>12</h1>
                        </div>
                        <FontAwesomeIcon className="dashboard-icon l-text py-4 px-2"  icon={faSchool}/>
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3">
                      <div className="navyblue-blackground-dash d-flex justify-content-between px-3">
                        <div className="py-4 ">
                          <p className="mb-3">Add Student</p>
                          <h1><Link to='/admin/addStudent'><FontAwesomeIcon className="admin-dashboard-sub-icon p-1 px-2 " icon={faPlus}/></Link></h1>
                        </div>
                        <FontAwesomeIcon className="dashboard-icon l-text py-5 px-2 "  icon={faUserPlus}/>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3   ">
                      <div className="navyblue-blackground-dash d-flex justify-content-between px-3">
                        <div className="py-4 ">
                          <p className="mb-3">Add Teacher</p>
                          <h1><Link to='/admin/addTeacher'><FontAwesomeIcon className="admin-dashboard-sub-icon p-1 px-2 " icon={faPlus}/></Link></h1>
                        </div>
                        <FontAwesomeIcon className="dashboard-icon l-text py-5 px-2 "  icon={faChalkboardTeacher}/>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3   ">
                      <div className="navyblue-blackground-dash d-flex justify-content-between px-3">
                        <div className="py-4 ">
                          <p className="mb-3">Add Parent</p>
                          <h1><Link to='/admin/addParent'><FontAwesomeIcon className="admin-dashboard-sub-icon p-1 px-2 " icon={faPlus}/></Link></h1>
                        </div>
                        <FontAwesomeIcon className="dashboard-icon l-text py-5 px-2 "  icon={faPeopleGroup}/>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xxl-3   ">
                      <div className="navyblue-blackground-dash d-flex justify-content-between px-3">
                        <div className="py-4 ">
                          <p className="mb-3">Add Classes</p>
                          <h1><Link to='/admin/AddClass'><FontAwesomeIcon className="admin-dashboard-sub-icon p-1 px-2 " icon={faPlus}/></Link></h1>
                        </div>
                        <FontAwesomeIcon className="dashboard-icon l-text py-5 px-2 "  icon={faSchool}/>
                      </div>
                    </div>


                  </div>
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
import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pic from "../../img/pexels-andrea-piacquadio-762041 (2).jpg"
import { useState } from "react"

export const ViewAllStudents = () =>{

  const [studentID, setStudentID] = useState("")
  const [studentName, setStudentName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
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
                <h5>Student</h5>
                <p>List Off Student</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin/addStudent" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>  Add Student</Link>
						  </div>
            </div>

            <form action="">
              <div className="row add-student justify-content-evenly">
                <div className="col-sm-3 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius view-student-input " placeholder="Search by ID..."  value={studentID} onChange={(e) => setStudentID(e.target.value)}/>
                </div>

                <div className="col-sm-3 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius view-student-input" placeholder="Search by Name..."  value={studentName} onChange={(e) => setStudentName(e.target.value)}/>
                </div>

                <div className="col-sm-3 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius view-student-input" placeholder="Search by Phone Number..."  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>

                <div className="col-sm-1 mb-3">
                  <input type="submit" className=" p-2 form-dark border-radius"/>
                </div>
              </div>            
            </form>


            <section className="view-content-height scroll-bar-y">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="row  g-2">
                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>


                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>


                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>


                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>


                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>


                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>


                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>


                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>


                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>

                    <div className="col-md-4 col-sm-6 col-lg-3">
                      <div className="student-list">
                        <div className="student-list-boxes boxing-shadow py-3 ps-3">
                          <img src={pic} alt="" /> 
                          <div className="ps-3">
                            <h5>SBHSISE345</h5>
                            <p>John Snow</p>
                            <Link>View Profile</Link>
                          </div>  
                        </div>
  
                   
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </section>


        
          </div>
        </div>

      </section>
		</div>
	)
}
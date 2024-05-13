import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export const DeleteResult = () =>{

  const [studentID, setStudentID] = useState("")
  const [term, setTerm] = useState("")
  const [session, setSession] = useState("")


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
                <h5>STUDENT DATABASE</h5>
                <p>Delete Result</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to='/admin/ViewStudentResult'>View Result</Link>
						  </div>
            </div>


            <section>
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE FILL IN THE REQUIRED DETAILS</p>
                </div>

               <form action="">
                  <div className="row  mx-2">

                      <div className="col-md-6 mt-3">
                        <label htmlFor="" className="form-label">Student ID</label>
                        <input type="text" className=" admin-input form-control compulsory form-dark py-2 px-3"  placeholder="Student ID..." value={studentID} onChange={(e) => setStudentID(e.target.value)}/>
                     </div>
                      
                      <div  className="col-md-6 mt-3">
                        <label htmlFor="" className="form-label">Term</label>
                        <select id="inputSex" className="form-select form-control compulsory form-dark admin-input  py-2 px-3 "  value={term} onChange={(e) => setTerm(e.target.value)}>
                          <option value="">...</option>
                          <option value="">First Term</option>
                          <option value="">Second Term</option>
                          <option value="">Last Term</option>
                        </select>
                      </div>
                      <div  className="col-md-6 mt-3">
                        <label htmlFor="" className="form-label">Session</label>
                        <select id="inputSex" className="form-select form-control compulsory form-dark admin-input  py-2 px-3 " value={session} onChange={(e) => setSession(e.target.value)}>
                          <option value="">...</option>
                          </select>
                      </div>
                      <div className="col-md-10 pt-3 pb-5 mb-4">
                        <input className="admin-btn py-2 px-5" type="submit" />
                        
                      </div>
                  </div>

               </form>

              </div>
            </section>

        
          </div>
        </div>

      </section>
		</div>
	)
}
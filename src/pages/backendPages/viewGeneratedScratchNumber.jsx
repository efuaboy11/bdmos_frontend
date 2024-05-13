import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pic from "../../img/pexels-andrea-piacquadio-762041 (2).jpg"
import { useState } from "react"

export const ViewGeneratedScratchNumber = () =>{
  const [session, setSessions] = useState("")
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
                <h5>Genrate Scratch Number</h5>
                <p>View all the Scratch Number Generated</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin/generateScratchNumber" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>Generate Scratch</Link>
						  </div>
            </div>

            <form action="">
              <div className="row add-student">
                <div className="col-sm-11 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius view-student-input " placeholder="Search by Session..." value={session} onChange={(e) => setSessions(e.target.value)}/>
                </div>
              </div>            
            </form> 



            <section className="container-lg navyblue-blackground-dash">
              <div className="view-content-height scroll-bar">
                <div className="non-wrap-text">
                  <p className=" ps-3 py-2">Recently Added Teacher</p>
                  <table className="table1 ">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Session</th>
                        <th>Term</th>
                        <th>Actions</th>
                        <th></th>
                      </tr>
                    </thead>
                    

                    <tbody className="admin-home-table view-schoolitems-table ">
                      <tr>
                        <td>1</td>
                        <td>2021/2022</td>
                        <td>First Term</td>
                        <td></td>
                        <td><Link to="" className="admin-btn py-2 px-5" >View</Link></td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>2021/2022</td>
                        <td>First Term</td>
                        <td></td>
                        <td><Link to="" className="admin-btn py-2 px-5" >View</Link></td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>2021/2022</td>
                        <td>First Term</td>
                        <td></td>
                        <td><Link to="" className="admin-btn py-2 px-5" >View</Link></td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>2021/2022</td>
                        <td>First Term</td>
                        <td></td>
                        <td><Link to="" className="admin-btn py-2 px-5" >View</Link></td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>2021/2022</td>
                        <td>First Term</td>
                        <td></td>
                        <td><Link to="" className="admin-btn py-2 px-5" >View</Link></td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>2021/2022</td>
                        <td>First Term</td>
                        <td></td>
                        <td><Link to="" className="admin-btn py-2 px-5" >View</Link></td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>2021/2022</td>
                        <td>First Term</td>
                        <td></td>
                        <td><Link to="" className="admin-btn py-2 px-5" >View</Link></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


            </section>
          </div>
        </div>
      </section>

      
		</div>
	)
}
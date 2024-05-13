import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pic from "../../img/pexels-andrea-piacquadio-762041 (2).jpg"
import { useState } from "react"

export const ViewClass = () =>{
  const [className, setClassName] = useState("") 
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
                <h5>View Class</h5>
                <p>List Off Class uploaded</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin/AddClass" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>Upload Classes</Link>
						  </div>
            </div>

            <form action="">
              <div className="row add-student">
                <div className="col-sm-10 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius admin-input" placeholder="Search by Class..."  value={className} onChange={(e) => setClassName(e.target.value)}/>
                </div>

                <div className="col-sm-1 mb-3">
                  <input type="submit" className=" p-2 form-dark border-radius"/>
                </div>
              </div>            
            </form> 



            <section className="container-lg navyblue-blackground-dash">
              <div className="view-content-height scroll-bar">
                <div className="non-wrap-text">
                  <p className=" ps-3 py-2">Event Upload</p>
                  <table className="table1 ">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Classes</th>
                        <th>Subjects</th>
                        <th>Date</th>
                        <th>Actions</th>

                      </tr>
                    </thead>
                    

                    <tbody className="admin-home-table view-schoolitems-table ">
                      <tr>
                        <td>1</td>
                        <td>Basic One</td>
                        <td>Maths, English, Basic</td>
												<td>1/04/2021</td>
                        <td></td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>Basic One</td>
                        <td>Maths, English, Basic</td>
												<td>1/04/2021</td>
                        <td></td>
                      </tr>


                      <tr>
                        <td>1</td>
                        <td>Basic One</td>
                        <td>Maths, English, Basic</td>
												<td>1/04/2021</td>
                        <td></td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>Basic One</td>
                        <td>Maths, English, Basic</td>
												<td>1/04/2021</td>
                        <td></td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>Basic One</td>
                        <td>Maths, English, Basic</td>
												<td>1/04/2021</td>
                        <td></td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>Basic One</td>
                        <td>Maths, English, Basic</td>
												<td>1/04/2021</td>
                        <td></td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>Basic One</td>
                        <td>Maths, English, Basic</td>
												<td>1/04/2021</td>
                        <td></td>
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
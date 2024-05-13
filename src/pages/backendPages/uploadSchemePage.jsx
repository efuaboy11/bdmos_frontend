import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pic from "../../img/pexels-andrea-piacquadio-762041 (2).jpg"

export const UploadSchemePage = () =>{
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
                <h5>Upload Scheme</h5>
                <p>Select the File you want to Upload</p>
              </div>
            </div>

            <form action="">
              <div className="row add-student">
                <div className="col-sm-10 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius admin-input" placeholder="Search by Subject..."/>
                </div>

                <div className="col-sm-1 mb-3">
                  <input type="submit" className=" p-2 form-dark border-radius"/>
                </div>
              </div>            
            </form> 



            <section className="container-lg navyblue-blackground-dash">
              <div className="view-content-height scroll-bar">
                <div className="non-wrap-text">
                  <table className="table1 ">
                    <thead>
                      <tr>
                        <th>Subjects</th>
                        <th>File</th>
                      </tr>
                    </thead>
                    

                    <tbody className="admin-home-table view-schoolitems-table ">
                      <tr>
                        <td>MATH</td>
                        <td><input type="file" /></td>
                      </tr>

                      <tr>
                        <td>MATH</td>
                        <td><input type="file" /></td>
                      </tr>


                      <tr>
                        <td>MATH</td>
                        <td><input type="file" /></td>
                      </tr>

                      <tr>
                        <td>MATH</td>
                        <td><input type="file" /></td>
                      </tr>

                      <tr>
                        <td>MATH</td>
                        <td><input type="file" /></td>
                      </tr>

                      <tr>
                        <td>MATH</td>
                        <td><input type="file" /></td>
                      </tr>
                      <tr>
                        <td>MATH</td>
                        <td><input type="file" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <button className="admin-btn py-2 px-5 my-5">Upload</button>


            </section>
          </div>
        </div>
      </section>

      
		</div>
	)
}
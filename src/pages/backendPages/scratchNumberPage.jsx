import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faCopy, faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pic from "../../img/pexels-andrea-piacquadio-762041 (2).jpg"

export const ScratchNumberPage = () =>{
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
                <h5>Generated Number</h5>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to='/admin/viewAllTeacher'>  View Generated Number</Link>
						  </div>
            </div>

            <section>
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">THIS GENERTED NUMBER IS WHAT STUDENT USE TO CHECK THEIR RESULT</p>
                </div>

                <div className="view-content-height scroll-bar-y">
                  <div className="p-3 d-flex"> 
                    <p className="z p-2">123456789123  <FontAwesomeIcon icon={faCopy} className="ps-5"/>  </p>
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
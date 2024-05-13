import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export const SendEmail = () =>{
  const [emailInput, setEmailInput] = useState("")
  const [subjectInput, setSubjectInput] = useState("")
  const [textInput, setTextInput] = useState("")


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
                <h5>Email</h5>
                <p>Send A Messaage Across</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to='/admin/sendBulkEmail'>Bulk Email</Link>
						  </div>
            </div>


            <section>
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE FILL THE DETAILS</p>
                </div>


                <div className="row  mx-2">
                  <div className="col-md-11 mt-5 d-flex align-items-center">
                    <label htmlFor="" className="pe-4"> To: </label>
                    <input className="form-control form-dark py-2 px-3" type="email" placeholder="jerryMark@gmail.com"   value={emailInput} onChange={(e) => setEmailInput(e.target.value)}/>
                  </div>

                  <div className="col-md-11 mt-4 d-flex align-items-center">
                    <label htmlFor="" className="pe-4">Subject: </label>
                    <input className=" form-control form-dark py-2 px-3" type="text"  value={subjectInput} onChange={(e) => setSubjectInput(e.target.value)}/>
                  </div>
                  
                  
                  <div className="col-md-11 mt-4">
                    <textarea className="form-control form-dark" id="diabilityYes" rows="6" placeholder="text..."   value={textInput} onChange={(e) => setTextInput(e.target.value)}></textarea>

                  </div>



                  <div className="col-md-10 pt-3 pb-5 mb-4 mt-3">
                    <input className="admin-btn py-2 px-5" type="submit" />
                    
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
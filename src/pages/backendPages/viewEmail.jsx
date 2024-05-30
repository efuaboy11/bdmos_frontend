import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faEye, faStarOfLife, faTrashCan, faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pic from "../../img/pexels-andrea-piacquadio-762041 (2).jpg"
import { useState } from "react"

export const ViewEmail = () =>{
  const [email, setEmail] = useState("") 
  const [showEmailModal, setShowEmailModal] = useState(false)

  const DisplayModal = () =>{
    setShowEmailModal(true)

  }
  const CloseModal = () =>{
    setShowEmailModal(false)
  }
	return(
		<div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
			<section>
        <div className="main-content">

          {showEmailModal &&
            <section className="overlay-background">
              <div className="admin-email-modal-conatiner">
                <div className="admin-email-modal-content">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <div className="p-1">
                        <FontAwesomeIcon icon={faStarOfLife}/>
                      </div>
                      <h4>Email outbox</h4>
                    </div>
  
                    <div className="admin-email-modal-content-status">
                      <p>Delivered</p>
                    </div>
                  </div>
  
                  <hr />
  
                  <div className="row pb-3">
                    <p className="col-1 pt-1">To:</p>
                    <p className="col-8 admin-email-modal-content-input ms-4">iseghphimhene@gmail.com</p>
                  </div>
  
                  <div className="row">
                    <p className="col-1 pt-1">Subject:</p>
                    <p className="col-8 admin-email-modal-content-input ms-4">Payment Off fees</p>
                  </div>
  
                  <div className="admin-email-modal-content-message scroll-bar-black">
                    <h6>Message:</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, tempora assumenda. Natus earum in consequatur vel! Recusandae perspiciatis, natus dolorum amet tempora, dignissimos quae libero tempore error iusto vel vero reprehenderit illo officiis ea! Illum voluptates quas doloremque eum voluptate, quam aliquid. Odio, omnis nobis quam, eligendi facilis nemo inventore laboriosam harum id maxime voluptate, esse explicabo dicta aut. Adipisci quam hic alias id rem! Dolorem est illum atque neque veniam? Ipsam provident ex iusto velit modi facere quam, odit doloremque, aperiam et quis voluptas! Eligendi quidem commodi tempore cumque fugiat perferendis laboriosam atque expedita aperiam? Reprehenderit ratione nam maxime!</p>
  
                  </div>
  
                  <div className="mt-3 admin-email-modal-content-date">
                    <p>Date: 12/05/2021</p>
                  </div>
  
                  <div className="d-flex justify-content-between">
                    <div></div>
                    <div>
                      <button onClick={CloseModal} className="admin-email-modal-content-btn2">Cancel</button>
                      <button className="admin-email-modal-content-btn">Delete</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </section>      
          
          }


          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>View Email</h5>
                <p>Email History</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin/sendEmail" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>Send Email</Link>
						  </div>
            </div>

            <form action="">
              <div className="row add-student">
                <div className="col-sm-10 mb-4">
                  <input type="text" className=" p-2 form-dark border-radius admin-input " placeholder="Search Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
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
                        <th>Email</th>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>

                      </tr>
                    </thead>
                    

                    <tbody className="admin-home-table view-schoolitems-table ">
                      <tr>
                        <td>1</td>
                        <td>johnjerry@gmail.com</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae.</td>
                        <td>Sent</td>
												<td>1/04/2021</td>
                        <td><FontAwesomeIcon className="pe-3 cursor-pointer" icon={faEye} onClick={DisplayModal}/> <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer"/> </td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>johnjerry@gmail.com</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae.</td>
                        <td>Sent</td>
												<td>1/04/2021</td>
                        <td></td>
                      </tr>


                      <tr>
                        <td>1</td>
                        <td>johnjerry@gmail.com</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae.</td>
                        <td>Sent</td>
												<td>1/04/2021</td>
                        <td></td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>johnjerry@gmail.com</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae.</td>
                        <td>Sent</td>
												<td>1/04/2021</td>
                        <td></td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>johnjerry@gmail.com</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae.</td>
                        <td>Sent</td>
												<td>1/04/2021</td>
                        <td></td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>johnjerry@gmail.com</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae.</td>
                        <td>Sent</td>
												<td>1/04/2021</td>
                        <td></td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>johnjerry@gmail.com</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae.</td>
                        <td>Sent</td>
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
import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export const UploadEvent = () =>{

  const [img, setimgFile] = useState("")
  const [date, setdate ] = useState("")
  const [event, setEvent] = useState("")

  const handleImgFile = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setimgFile(file); 
    } else {
      setimgFile(null); 
    }
  };


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
                <h5>Upload Events</h5>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to='/admin/ViewEventUploads'>View Event Uploaded</Link>
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
                        <label htmlFor="" className="p-2">Image</label>
                        <input className="admin-input form-dark py-2 px-3" type="file" onChange={handleImgFile}/>
                      </div>
                      <div className="col-md-6 mt-3">
                        <label htmlFor="" className="p-2">Date</label>
                        <input className="admin-input form-dark py-2 px-3" type="datetime-local"  value={date} onChange={(e) => setdate(e.target.value)}/>
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="" className="p-2">Event description</label>
                        <textarea className="admin-input form-dark py-2 px-3 "  value={event} onChange={(e) => setEvent(e.target.value)}></textarea>
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
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import principalPicture from "../img/principal.jpg"

export const Addmision = () =>{
	const location = useLocation();
	const isActive = (path) =>{
		return location.pathname === path

	}
	return(
		<div>
			<Navbar />
      <section>
        <section id="heading" className="light-background2 mt-5 mb-5">
          <div className="container-lg">
            <div className="d-md-flex d-inline justify-content-between">
              <div>
                <h1 className="ml-text fw-bold dark-font">Addmission <span className="text-secondary1">Procedure</span></h1>
              </div>

              <div className="d-lg-flex justify-content-between texts">
                <a href="./index.html" className="px-4">Home</a>
                <FontAwesomeIcon className="d-none d-md-block pt-2" icon={faAngleRight} color="black"/>
                <p className="text-secondary1 px-4 d-none d-md-block">Info</p>
                
              </div>
            </div>      
          </div>
        </section>

        <section className="container-lg py-5 my-5">
          <div>
            <div className="row">
              <div className="col-xxl-12">
                <div className="row g-3">
                  <div className="col-md-4 col-sm-6">
                    <div className="d-flex">
                      <div className="px-4 pt-3 light-background2 text-primary1 font-bold">
                        <h3>01</h3>
                      </div>

                      <div className="ps-3">
                        <p className="pb-3">Registration Fee</p>
                        <p>NGN25, 000</p>
                      </div>

                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="d-flex">
                      <div className="text-primary1 font-bold">
                        <div className="light-background2 px-4 pt-3 pb-2">
                          <h3>02</h3>
                        </div>

                      </div>

                      <div className="ps-3">
                        <p>Required Documents:</p>
                        <p>1. Passport Photographs</p>
                        <p>2. Birth Certificate</p>
                        <p>3. Transcript off any school the child has attedend</p>
                      </div>

                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="d-flex">
                      <div className="text-primary1 font-bold">
                        <div className="light-background2 px-4 pt-3 pb-2">
                          <h3>03</h3>
                        </div>

                      </div>

                      <div className="ps-3">
                        <p>Parent and ward and required to come to <br /> the school for further interview.</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <div>
                <button className="admission-btn">CLICK HERE TO APPLY <span className="d-none d-sm-inline">ONLINE</span> </button>

                <div className="d-flex justify-content-center">
                  <div>
                    <div className="admission-h6 text-center">
                      <h6>ONLINE APPLICATION</h6>
                    </div>
                    <p>Your appliation will be processed.</p>
                  </div>

                 
                </div>
                <div className="text-center text-primary1 pt-3">
                  <h1>OR</h1>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xxl-12">
                <div className="row justify-content-between">
                  <div className="col-3">
                    <div className="light-background2 p-2">
                    <p>Parents/gurdians are welcome to accompany their child/ward to the school for personalized registration and interview session. Please ensure you bring along the necessary documentation outlined in step two</p>
                    </div>
                    
                  </div>

                  <div className="col-3">
                    <div className="light-background2 p-2">
                    <p>NOTE: Parent can pay for the registration fee via banking or can come to the school premises to make payment <br />  Account Number: <span className="font-bold">1100057855</span>  <br />Bank: <span className="font-bold">Uniben micro finacnce </span> <br />Account Name:  <span className="font-bold"> Fredita Children Academy </span></p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <Footer />
      </section>

		</div>
			
  )
}
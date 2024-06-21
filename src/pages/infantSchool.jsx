import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import principalPicture from "../img/principal.jpg"
import { InfantSchoolImg } from "./infantSchoolImg";
import pic1 from "../img/groupUniform7.JPG"
import pic2 from "../img/creche5.JPG"

export const InfantSchool = () =>{
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
                <h1 className="ml-text fw-bold dark-font">Infant <span className="text-secondary1">School</span></h1>
              </div>

              <div className="d-lg-flex justify-content-between texts">
                <a href="./index.html" className="px-4">Home</a>
                <p className="text-secondary1 px-4 d-none d-md-block">Campus</p>
                
              </div>
            </div>      
          </div>

        </section>

        <section className="container-lg pb-5 mb-5">
          <div className="row">
            <div className="col-xxl-12">
              <div className="row">
                <div className="col-md-7">
                  <InfantSchoolImg />
                </div>

                <div className="col-md-5 col-xl-4">
                  <p className="pb-5">BDOMS Infant School is a nursery school for children aged 3 months to 5 years, staffed by experienced early years educators. <br /> 
                    <br />

                    We offer the British Early Years Foundation Stage Curriculum, seamlessly integrated with the Nigerian Curriculum, and enriched with Montessori principles and resources. <br />
                    <br />

                    Our dedicated nursery team works collaboratively to provide a wide range of activities, emphasizing the importance of learning through play. We believe that “Play is the work of young children.”</p>
                  <div className="infant-school-btn text-center">
                    <Link to="/campus/infantSchool/about" className="infant-school-btn-Link">LEARN MORE</Link>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="light-background2 fact-sheet-box-conatiner    pt-5 pb-5 overflow-hidden">
          <div className="container-lg">
            <div className="row">
              <div className="col-xxl-12">
                <div className="row g-3 fact-sheet-boxes">
                  <div className="col-lg-4 col-xl-3 col-sm-6 fact-sheet-boxe-1">
                    <div className="flip-card ">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <div className="image-container">
                            <img src={pic1} alt="Sample Image" />
                            <div className="img-overlay font-bold">ADMISSION PROCEDURE</div>
                          </div>
                        </div>
                        <div className="flip-card-back">
                          <p className="pb-3">Check out our admission procedure!</p>
                          <Link to='/info/admission' className="fact-sheet-btn">VIEW DETAILS</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3 col-sm-6">
                    <div className=" fact-sheet-box-2">
                      <div>
                        <p>View our blog to see more off our recent event. Keep updated with BDOMS</p>
                        <div className="d-flex justify-content-center">
                          <Link to='/event/blog' className="fact-sheet-btn ">LEARN MORE</Link>
                        </div>
                       
                      </div>
                      
                    </div>

                  </div>
                  <div className="col-lg-4 col-xl-3 col-sm-6 fact-sheet-boxe-3">
                    <div className="">        
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <div className="image-container">
                              <img src={pic2} alt="Sample Image" />
                              <div className="img-overlay font-bold">GALLERY</div>
                            </div>
                          </div>
                          <div className="flip-card-back">
                            <p className="p-3 ">Nothing speaks better than a picture. Take a glance at the BDOMS gallery and see for yourself.!</p>
                            <Link to='/gallery' className="fact-sheet-btn">VIEW MORE</Link>
                          </div>
                        </div>
                      </div>
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
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import principalPicture from "../img/principal.jpg"
import { InfantSchoolImg } from "./infantSchoolImg";
import pic1 from "../img/groupUniform7.JPG"
import pic2 from "../img/sport8.JPG"
import { JuniorSchoolImg } from "./juniorSchoolImg";

export const JuniorSchool = () =>{
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
                <h1 className="ml-text fw-bold dark-font">JUnior <span className="text-secondary1">School</span></h1>
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
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <JuniorSchoolImg />
                </div>

                <div className="col-md-5 col-xl-4">
                  <p className="pb-5">BDOMS Junior School is a primary school for children aged 6 to 11 years. Our teachers specialize in fostering critical thinking skills in our pupils. <br /> 
                    <br />

                    We ensure our pupils develop strong critical thinking and problem-solving skills. We use tools such as quantitative reasoning, verbal reasoning, and mental math to enhance their critical thinking abilities.<br />
                    <br />

                    Our dedicated primary team helps instill morality and cultural heritage in our young pupils.</p>
                  <div className="infant-school-btn text-center">
                    <Link to="/campus/juniorSchool/about" className="infant-school-btn-Link">LEARN MORE</Link>
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
                          <Link to='/info/admission' className="fact-sheet-btn ">LEARN MORE</Link>
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
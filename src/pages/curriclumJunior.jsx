import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import pic1 from "../img/readingEdit2.JPG"
import pic2 from "../img/outdoor12.JPG"
import pic3 from "../img/02.jpg"

export const CurriculumJunior = () =>{
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
                <h1 className="ml-text fw-bold dark-font">Curriculum <span className="text-secondary1">Junior</span></h1>
              </div>

              <div className="d-lg-flex justify-content-between texts">
                <a href="./index.html" className="px-4">Home</a>
                <p className="text-secondary1 px-4 d-none d-md-block">curriculum</p>
                
              </div>
            </div>      
          </div>

        </section>

        <section className="container-lg my-5 py-5">
          <div className="row">
            <div className="col-xxl-12">
              <div className="row g-3 justify-content-center">
                <div className="col-3">
                  <div>
                    <img src={pic1} width="100%" alt="" />
                    <div className="d-flex justify-content-center">
                      <Link to="/curriculum/junior/literacy" className="curr-junior-btn">Literacy</Link>
                    </div>

                  </div>
                </div>

                <div className="col-3">
                  <div>
                    <img src={pic2} width="100%" alt="" />
                    <div className="d-flex justify-content-center">
                      <Link to="/curriculum/junior/Numeracy" className="curr-junior-btn">Numeracy</Link>
                    </div>
                  </div>
                </div>

                <div className="col-3">
                  <div>
                    <img src={pic3} width="100%" alt="" />
                    <div className="d-flex justify-content-center">
                      <Link to="/curriculum/junior/science" className="curr-junior-btn">Science</Link>
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
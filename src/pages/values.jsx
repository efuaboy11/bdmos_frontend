import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import principalPicture from "../img/principal.jpg"

export const OurValues = () =>{
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
                <h1 className="ml-text fw-bold dark-font">Core <span className="text-secondary1">Values</span></h1>
              </div>

              <div className="d-lg-flex justify-content-between texts">
                <a href="./index.html" className="px-4">Home</a>
                <FontAwesomeIcon className="d-none d-md-block pt-2" icon={faAngleRight} color="black"/>
                <p className="text-secondary1 px-4 d-none d-md-block">About</p>
                
              </div>
            </div>      
          </div>

        </section>

        <section>
          <div className="container-lg">
            <div>
              <div className="mb-5 pb-5">
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="row">
                      <div className="col-4 col-sm-3 values-line py-3">
                        <div>
                          <h1>5Cs</h1>
                        </div>
                      </div>

                      <div className="col-4 col-sm-3 py-4 d-flex justify-content-end">
                        <div>
                          <h5 className="text-center text-primary1 font-bold">01</h5>
                          <p className="font-bold">CHRIST</p>
                        </div>
                      </div>

                      <div className="col-4 col-sm-3 py-4 d-flex justify-content-end">
                        <div>
                          <h5 className="text-center text-primary1 font-bold">02</h5>
                          <p className="font-bold">CARE</p>
                        </div>
                      </div>

                      <div className="col-4 col-sm-3 py-4 d-flex justify-content-end">
                        <div>
                          <h5 className="text-center text-primary1 font-bold">03</h5>
                          <p className="font-bold">CLEANLINESS</p>
                        </div>
                      </div>

                      <div className="col-4 col-sm-3 py-4 d-flex justify-content-start">
                        <div>
                          <h5 className="text-center text-primary1 font-bold">04</h5>
                          <p className="font-bold">CREATIVITY</p>
                        </div>
                      </div>

                      <div className="col-4 col-sm-3 py-4 d-flex justify-content-end">
                        <div>
                          <h4 className="text-center text-primary1 font-bold">05</h4>
                          <p className="font-bold">CULTURE</p>
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
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import principalPicture from "../img/principal.jpg"

export const Anthem = () =>{
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
                <h1 className="ml-text fw-bold dark-font">School <span className="text-secondary1">Anthem</span></h1>
              </div>

              <div className="d-lg-flex justify-content-between texts">
                <a href="./index.html" className="px-4">Home</a>
                <FontAwesomeIcon className="d-none d-md-block pt-2" icon={faAngleRight} color="black"/>
                <p className="text-secondary1 px-4 d-none d-md-block">About</p>
                
              </div>
            </div>      
          </div>

        </section>


        <section className="container-lg">
          <div className="row">
            <div className="col-xxl-12">
              <div className="row">
                <div className="col-7">
                  <h2>SCHOOL ANTHEM</h2>
                  <p>
                    We are the students of I.S.L <br />
                    <br />
                    Steadily marching on to glory in true fellowship <br />
                    <br />
                    In the name of God, the father of grace; <br />
                    <br />
                    We shall triumphantly reach our goal. <br />
                    <br />
                    International School, University of Lagos, <br />
                    <br />
                    In truth and love, we march along <br />
                    <br />
                    Lifting up the banner of <br />
                    <br />
                    “Excellence in learning and Character”. <br />
                    <br />
                    We pledge to you our dear alma mater <br />
                    <br />
                    To be humble! Loyal! Honest! <br />
                    <br />
                    Diligent in everything we do <br />
                    <br />
                    To raise our school to greater height… <br />
                    <br />
                    FIRST AMONG EQUALS OUR SCHOOL SHALL BE <br />
                  </p>
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
import "aos/dist/aos.css"
import "../css/style.css"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navbar } from "../component/navbar"
import { Footer } from "../component/footer"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

export const Gallery = () =>{
  const location = useLocation();
  const isActive = (path) =>{
    return location.pathname === path

  }
  return(
    <div>
      <Navbar/>
      <section id="heading" className="light-background2 mt-5">
        <div className="container-lg">
          <div className="d-md-flex d-inline justify-content-between">
            <div>
              <h1 className="ml-text fw-bold dark-font">School <span className="text-secondary1"> Gallery</span></h1>
            </div>

            <div className="d-lg-flex justify-content-between texts">
              <Link to='/' className="px-4">Home</Link>
              <FontAwesomeIcon className="d-none d-md-block pt-2" icon={faAngleRight} color="black"/>
              <p className="text-secondary1 px-4 d-none d-md-block">Gallery</p>           
            </div>
          </div>      
        </div>

      </section>  
      
      <Footer />
    </div>
      
  )
}
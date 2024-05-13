import "aos/dist/aos.css"
import "../css/style.css"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navbar } from "../component/navbar"
import { useState } from "react"

export const Contact = () =>{
  const [contactName, setContactName] = useState("")
  const[contactEmail, setContactEmail] = useState("")
  const[message, setMessage] = useState("")
  const location = useLocation();
  const isActive = (path) =>{
    return location.pathname === path

  }

  return(
    <div>
      <Navbar />
      <section id="heading" className="light-background">
        <div className="container-lg">
          <div className="d-md-flex d-inline justify-content-between">
            <div>
              <h1 className="l-text fw-bold dark-font">Contact <span className="text-secondary1"> Us</span></h1>
            </div>

            <div className="d-lg-flex justify-content-between texts">
              <Link to='/' className="px-4">Home</Link>
              <i className="fa-solid fa-arrow-right d-none d-md-block"></i>
              <p className="text-secondary1 px-4 d-none d-md-block">US</p>           
            </div>
          </div>      
        </div>

      </section>   

      <section id="message" className="py-5">
        <div className="container-lg">
          <h2 className="ml-text fw-bold text-center">Send <span className="text-secondary1"> Us A</span> Message</h2>
          <p className="sm-text text-secondary1 text-center">Feel free to message us with any of your complain. We will get back to you as soon as possible</p>
        

          <div>
            <form action="" className="row g-3">
              <div className="col-md-11">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="e.g John Smith" value={contactName} onChange={(e) => setContactName(e.target.value)}/>
              </div>

              <div className="col-md-11">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="name" placeholder="e.g @johnsmith.gmail.com" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)}/>
              </div>

              <div className="mb-3 col-md-11">
                <label for="diabilityYes" className="form-label">Message</label>
                <textarea className="form-control" id="diabilityYes" rows="9" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-lg primary-background">MESSAGE US</button>
              </div>
            </form>
          </div>

          <div className="row my-5 align-items-center justify-content-center g-2">
            <div className=" col-lg-4">
              <div className="card pb-5">
                <div className="card-body text-center py-4">
                  <i className="fa-solid fa-location-dot text-muted ml-text"></i>
                  <h4 className="card-title m-text fw-bold my-3 pb-3">Location</h4>
                  <hr />
                  <p className="card-text  d-lg-block text-muted"></p>
                </div>
              </div>
            </div>

            <div className=" col-lg-4">
              <div className="card pb-4">
                <div className="card-body text-center py-4">
                  <i className="fa-solid fa-phone text-muted ml-text"></i>
                  <h4 className="card-title m-text fw-bold my-3 pb-3">Phone & Email</h4>
                  <hr />
                  <p className="card-text  d-lg-block text-muted "></p>
                </div>
              </div>
            </div>

            <div className=" col-lg-4">
              <div className="card pb-1">
                <div className="card-body text-center py-4">
                  <i className="fa-solid fa-clock text-muted ml-text"></i>
                  <h4 className="card-title m-text fw-bold my-3 pb-3"> School Time</h4>
                  <hr/>
                  <p className="card-text  d-lg-block text-muted "></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  

      <footer>

        <div className="primary-background  pt-5 pb-3">
          <div className="container-lg text-center">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 text-start footer-text">
                <h5  data-aos="fade-right"  data-aos-duration="1000">Here at Baby's Day Out / Fredita Children We give Your Children nothing but the best. We try to ensure you child is well rounded both academically, socially and mentally.</h5>
              </div>
              <div className="col-lg-4"  data-aos="zoom-in"  data-aos-duration="1000">
                <div className="icon">
                  <a href="#"><FontAwesomeIcon className="g-3 l-text" icon="fa-brands fa-facebook" /></a>
                  <a href="#"><FontAwesomeIcon className="g-3 l-text" icon="fa-brands fa-whatsapp" /></a>
                  <a href="#"><FontAwesomeIcon className="g-3 l-text" icon="fa-brands fa-instagram" /></a>                 
                </div>
                <div className="py-3">
                  <p className="sm-text">Check our recent post and update on our social media platform</p> 
                </div>
              </div>

              <div className="col-lg-4 text-start ps-5 footer-link"  data-aos="fade-left"  data-aos-duration="1000">
                <div>
                  <h4>Quick links</h4>
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <Link to="/" className={`nav-link p-1 footer-link ${isActive("/") ?"current2": ""}`}>Home</Link>
                    </li>
        
                    <li className="nav-item">
                      <Link to="/event" className={`nav-link p-1 footer-link ${isActive("/event") ?"current2": ""}`}>EVENTS</Link>
                    </li>
        
                    <li className="nav-item">
                      <Link to="/gallery" className={`nav-link p-1 footer-link ${isActive("/gallery") ?"current2": ""}`}>GALLERY</Link> 
                    </li>
        
                    <li className="nav-item">
                      <Link to="/portal" className={`nav-link p-1 footer-link ${isActive("/portal") ?"current2": ""}`}>SCHOOL PORTAL</Link> 
                    </li>
        
                    <li className="nav-item">
                      <Link to="/application" className={`nav-link p-1 footer-link ${isActive("/application") ?"current2": ""}`}>TEACHER APPLICATION</Link> 
                    </li>
        
                    <li className="nav-item">
                      <Link to="/contact" className={`nav-link p-1 footer-link ${isActive("/contact") ?"current2": ""}`}>CONTACT US</Link> 

                    </li>
                  </ul>
                </div>


              </div>
            </div>
            <hr/>

            <div className="text-center end-text">
              <p>Copyright &copy;2023, Baby's Day Out / Fredita Children Academy</p>
              <p>powered by: <a href="#">Ehiz</a></p>
            </div>
          </div>
        </div>
      </footer>             
    </div>  
      
  )
}
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import pic from "../img/creche5.JPG"
import pic1 from "../img/cultural.JPG"
import pic2 from "../img/art1.JPG"
import pic3 from "../img/graduation.JPG"
import pic4 from "../img/engineeringWorkShop 1.jpg"
import pic5 from "../img/farm.JPG"

export const Events = () =>{
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
                <h1 className="ml-text fw-bold dark-font">Our <span className="text-secondary1">Events</span></h1>
              </div>

              <div className="d-lg-flex justify-content-between texts">
                <a href="./index.html" className="px-4">Home</a>
                <p className="text-secondary1 px-4 d-none d-md-block">Event</p>
                
              </div>
            </div>      
          </div>
        </section>

        <section className="pb-5 mb-5">
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <h5>Our Event Over the Years</h5>
                <section>
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="row g-3">
                        <div className="col-sm-6 col-md-8">
                          <div className="light-background2">                         
                            <div className="row p-3">
                              <div className="col-md-5">
                              <img src={pic2} alt="" width='100%'/>
                              </div>
                              <div className="col-md-7">
                                <div>
                                  <div className="d-flex">
                                    <p className="bg-purple event-date">01/04/2022</p>
                                  </div>
  
                                  <p>On this special day, we hosted an Art Dy, where our children expressed their creativity by drawing various animate objects. Each pupil was encourage to draw an object of thier chocie allowing thier imagination and artistic skill to shine <br />
                                    We used this event as an opportunity to foster a passion for art among our pupils.
                                  
                                  </p>
                                </div>
                              </div>


                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                          <div className="bg-dark p-3">
                            <div className="d-flex">
                              <p className="bg-yellow event-date">01/04/2022</p>
                            </div>
                            <p>Today, we held a Science Fair Project Day Where every pupil presented their own science project. Judges rated the projects based on performance, creativity and scientific understanding.
                              This event provided a valuable opportunity for pupils to engage with the pratical aspect of science.
                            </p>
                          </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                          <div className="light-background2 p-3">
                            <div className="pb-3">
                              <img src={pic1} alt="" width='100%'/>
                            </div>
                            <div className="d-flex">
                              <p className="bg-blue event-date">01/04/2022</p>
                            </div>
                            <p>Today, we celebrated African Child Day with our pupils dressing in various traditional Nigerian attires. The Yoruba male pupils wore agbada and dansiki, while the female pupils wore buba and wrapper. Pupils from other tribes also proudly displayed their cultural heritage through their unique traditional attires.</p>
                          </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                          <div className="light-background2 p-3">
                            <div className="d-flex">
                              <p className="bg-yellow event-date">01/04/2022</p>
                            </div>
                            <p> Today, we proudly graduated our first set of Primary 6 pupils, KG 3 pupils, and LDC pupils. This group of students has been with us on a remarkable journey, and today we celebrate their achievements as they advance to the next stage of their academic careers. We wish them the best of luck in all their future endeavors.</p>
                            <div className="pt-3">
                              <img src={pic3} alt="" width='100%'/>
                            </div>

                          </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                          <div className="light-background2 p-3">
                            <div className="pb-3">
                              <img src={pic4} alt="" width='100%'/>
                            </div>
                            <div className="d-flex">
                              <p className="bg-blue event-date">01/04/2022</p>
                            </div>
                            <p>Today, we took our pupils to the Engineering Department at the University of Benin. During this visit, they were exposed to various mechanical and engineering works, providing them with a firsthand look at the field of engineering. We look forward to exposing our pupil more on enginerring</p>
                          </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                          <div className="secondary-background p-3">
                            <div className="d-flex">
                              <p className="bg-dark event-date">01/04/2022</p>
                            </div>
                            <p>Today, we visited the museum, where our pupils had the opportunity to see various cultural, artistic, historical, and scientific artifacts. This enriching experience exposed them to significant historical events and deepened their understanding of cultural heritage.</p>
                          </div>
                        </div>


                        <div className="col-sm-6 col-md-8">
                          <div className="light-background2">                         
                            <div className="row p-3">
                              <div className="col-md-7">
                                <div>
                                  <div className="d-flex">
                                    <p className="bg-purple event-date">01/04/2022</p>
                                  </div>
                                  <p> Today, we visited a nearby farm, where our pupils were exposed to the mechanics of farming. They had hands-on experience with tools such as shovels, hoes, and various other farm equipment. Additionally, they participated in harvesting activities, including collecting palm kernels and more.</p>
                                </div>
                              </div>

                              <div className="col-md-5">
                                <img src={pic5} alt="" width='100%'/>
                              </div>


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="d-flex justify-content-center">
                  <Link to='/event/blog' className="event-btn">View Blog</Link>
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
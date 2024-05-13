import principal from "../img/principal.jpg"
import engineeringPic1 from "../img/engeinneringWorkShop2.JPG"
import farmPic1 from "../img/farm2.JPG"
import libraryPic1 from "../img/Libary1.JPG"
import chess1 from "../img/chess3.jpeg"
import farmPic2 from "../img/farm.JPG"
import pic1 from "../img/pic4.jpg"
import pic2 from "../img/pic1.jpg"
import pic3 from "../img/pic3.png"
import pic4 from "../img/pic5.jpg"
import pic5 from "../img/pic6.jpg"
import Aos from "aos";
import "aos/dist/aos.css"
import "../css/style.css"
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSchool, faBookOpenReader, faUsers, faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons"
import { Navbar } from "../component/navbar"
export const Home = () =>{
  useEffect(() =>{
    Aos.init()
  }, [])
  

  const location = useLocation();
  const isActive = (path) =>{
    return location.pathname === path

  }






  return(
    <div>
      <Navbar />
      <section id="cover-page">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-block w-100 img1">
                <div className="cover-header">
                  <h1 data-aos="zoom-in" data-aos-delay="" data-aos-duration="1000">BABY'S DAY OUT / FREDITA CHILDREN ACADEMY</h1>
                  <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</p>
                  <Link to="/portal" className="btn btn-outline-danger btn-lg px-3 " data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" >Login in</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-block w-100 img2">
                <div className="cover-header">
                  <h1 className="" data-aos-delay="" data-aos-duration="1000">EDUCATION IS KEY</h1>
                  <p data-aos-delay="500" data-aos-duration="1000">""School is a building which has four walls with tomorrow inside." - Lon Watters" </p>
                  <small data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" >MOTTO: inspire, succed & flourish</small>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-block w-100 img3">
                <div className="cover-header">
                  <h1 className="" data-aos-delay="" data-aos-duration="1000">KNOWLEGE IS POWER</h1>
                  <p data-aos-delay="500" data-aos-duration="1000">"School is not just about learning facts and figures, but also about discovering who you are and who you want to become."</p>
                  <div className="icon" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" >
                    <a href="#" className="g-3"><i className="fa-brands fa-facebook text-primary1"></i></a> 
                    <a href="#" className="g-3"><i className="fa-brands fa-instagram text-primary1"></i></a>
                    <a href="#" className="g-3"><i className="fa-brands fa-whatsapp text-primary1"></i></a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  

      <section id="principal-speech">
        <div className="container-lg">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-lg-4 text-center d-none d-md-block">
              <img src={principal} alt="" data-aos="fade-right" data-aos-duration="1000" />
            </div>

            <div className="col-md-12 col-lg-6 text-center text-md-center text-lg-start p-5" data-aos="fade-left" data-aos-duration="1000">
              <div className="headings">
                <h2> <span className="text-secondary1">Welcome</span> Address</h2>
                <h3>The Principal</h3>
              </div>
              <div>
                <p>Ladies and gentlemen, esteemed colleagues, dedicated staff, proud parents, and most importantly, our brilliant pupils,<br />

                  I stand before you today with a heart full of pride and gratitude as the principal of Baby's Day Out Centers/ Fredita Children Academy. It is an honor to address you and share the remarkable journey that our school has embarked upon.<br />

                  Our school isn't just a building made of bricks and mortar; it is a vibrant hub of learning, growth, and transformation. Over the years, it has become a second home to countless young minds, shaping their futures and nurturing their dreams.<br />

                  At the core of our school's ethos is a commitment to excellence. We believe in pushing boundaries, fostering creativity, and instilling a passion for lifelong learning. Our dedicated teachers, with their unwavering dedication, have taken on the role of not just educators, but also mentors, guiding our pupils towards becoming responsible citizens and compassionate individuals.<br />

                  Our students, you are the heart and soul of this school. You are the reason we gather here each day, the driving force behind every effort we make to create a conducive environment for your growth. We celebrate your achievements, big and small, and we stand by you during your challenges, knowing that each obstacle is an opportunity for growth.<br />

                  As a school, we have embraced change and innovation, adapting our methods to the evolving needs of the modern world. Our focus on Montessori teaching, experiential learning, and holistic development prepares you, our pupils, not just for the present, but for the world that lies ahead.<br />

                  But let us not forget the values that have been our foundation throughout this journey. Integrity, respect, empathy, and perseverance - these are the qualities that will truly define your success, no matter where life takes you. As you walk out of these halls, remember that you are not just going with a first leaving school certificate, but a legacy of excellence and a sense of purpose.<br />

                  To our parents, thank you for entrusting us with the education of your children. Your unwavering support and partnership have been invaluable. Together, we are shaping future generations that will contribute positively to our society.<br />

                  As we continue to grow and evolve, let us remain united in our pursuit of knowledge and character. Let us continue to foster a sense of community and mutual respect. Let us strive to create an environment where every student feels valued and empowered.<br />

                  In conclusion, I am filled with pride as I look back on our school's journey and look ahead to the endless possibilities that await us. Let us continue to dream, to learn, and to make a difference. Our school isn't just a place of education; it is a beacon of hope, a sanctuary of learning, and a springboard for greatness.<br />

                  Thank you, and may our school's light shine brightly for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section id="goal" className="container-lg">
        <div className="row justify-content-center">
          <div className="col-lg-10 t-secondary-background border-2 p-3 col-11">
            <div > 
              <h2 className="text-center "  data-aos="fade-right"  data-aos-duration="1000" >MISSION OFF OUR SCHOOL</h2>
              <p  data-aos="fade-right"  data-aos-duration="1000" >Every educational institution is guided by a distinct mission that shapes its purpose, values, and approach to learning. At BDOMS / Fredita Children Academy, our mission is not just a statement; it is the heartbeat of our educational journey. This article delves into the core essence of our  school's mission, highlighting our commitment to fostering excellence and empowering the leaders of tomorrow. <br />
                At BDOMS / Fredita Children Academy, our mission is to provide a dynamic and inclusive learning environment that nurtures the holistic development of each pupil. We are dedicated to fostering academic excellence, character growth, and critical thinking skills that prepare our pupils to confidently navigate the challenges of the modern world.
              </p>
            </div>
          </div>

          <div className="col-lg-10 t-secondary-background  border-danger-2 mt-5 p-3 col-11">
            <div> 
              <h2 className="text-center" data-aos="fade-right"  data-aos-duration="1000">VISION OFF OUR SCHOOL</h2>
              <p data-aos="fade-right"  data-aos-duration="1000">In the realm of education, a clear and inspiring vision serves as a guiding light, steering the course of an institution towards meaningful goals and aspirations. At BDOMS / Fredita Children Academy, our vision is a beacon that radiates our aspirations, values, and the path we envision for our students. This article unveils the profound vision that propels our primary school towards excellence and transformative education. <br />
                At BDOMS / Fredita Children Academy, our vision is to create a dynamic learning environment that ignites curiosity, cultivates creativity, and empowers pupils to become compassionate, confident, and capable global citizens. We are dedicated to nurturing holistic development, fostering a love for learning, and instilling a sense of purpose that transcends traditional classNameroom boundaries.
              </p>
            </div>
          </div>
        </div>

      </section>


      <section id="about">
        <div className="container-lg mt-5">
          <div className="text-center">
            <h2 className="l-text fw-bold" data-aos="fade-down"  data-aos-duration="1000"> About <span className="text-secondary1">Us</span></h2>
            <h4 className="diplay-4 text-secondary1" data-aos="fade-right"  data-aos-duration="1000">WE GIVE YOUR WARD ONLY THE BEST</h4>
          </div>

          <div className="row my-5 align-items-center justify-content-center g-2 ">
            <div className="col-11 col-lg-4 about-content">
              <div className="card pb-5">
                <div className="card-body text-center py-4">
                  <FontAwesomeIcon icon={faUsers} className=" xl-text py-4 text-muted" />
                  <h4 className="card-title m-text fw-bold py-3" data-aos="fade-right"  data-aos-duration="1000">Experinced Teachers</h4>
                  <p className="card-text  d-lg-block text-muted " data-aos="fade-right"  data-aos-duration="1000">Our esteemed teacher at our school brings a wealth of experience that truly sets them apart. With a career spanning many years, their dedication and expertise have made a lasting impact on countless students.</p>
                </div>
              </div>
            </div>

            <div className="col-11 col-lg-4 about-content">
              <div className="card pb-4">
                <div className="card-body text-center py-4">
                  <FontAwesomeIcon icon={faSchool} className=" xl-text py-3 text-muted" />
                  <h4 className="card-title m-text fw-bold py-3 " data-aos="fade-right"  data-aos-duration="1000">Avaliable classes</h4>
                  <p className="card-text  d-lg-block text-muted " data-aos="fade-right"  data-aos-duration="1000">Our school comprises of Creche, learning development className (LDC), pre-school, Nusery 1 - 3, primary 1 - 6. Our student all also oppunited to write a federal common entrance after their primary 6, incase any pupils have the dream off studying in a unity school afterwas.</p>
                </div>
              </div>
            </div>

            <div className="col-11 col-lg-4 about-content">
              <div className="card pb-1">
                <div className="card-body text-center py-4">
                  <FontAwesomeIcon icon={faBookOpenReader} className=" xl-text py-4 text-muted" />
                  <h4 className="card-title m-text fw-bold py-3" data-aos="fade-right"  data-aos-duration="1000">After School Care</h4>
                  <p className="card-text  d-lg-block text-muted " data-aos="fade-right"  data-aos-duration="1000">Our school does after school care from age 5 - 12. These are for parent that don't have were to keep their child after school our, so help them with their children. Our teacher help them with their homeworks and also give them deeper explaination on what was taught to the in their various schools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="extra-activity">
        <div className="container-lg">
          <div className="text-center">
            <h2 className="l-text fw-bold" data-aos="fade-down"  data-aos-duration="1000"><span className="text-secondary1">Extra</span> Curriculum Activity</h2>
            <h4 className="diplay-4 text-secondary1" data-aos="fade-right"  data-aos-duration="1000">OUR OTHER ACTIVITY OUTSIDE SCHOOL WORK</h4>
          </div>
        

          <div className="row justify-content-center py-5">
            <div className="col-11 col-md-5 col-lg-4 pb-4">
              <div className="card">
                <div className="card-body text-center">
                  <img src={engineeringPic1} alt=""/>
                </div>
                <div className="card-footer">
                  <p className="fw-bold "  data-aos="fade-right"  data-aos-duration="1000">Junior Engineer club</p>
                </div>
              </div>
            </div>

            <div className="col-11 col-md-5 col-lg-4 pb-4">
              <div className="card">
                <div className="card-body text-center">
                  <img src={farmPic1} alt=""/>
                </div>
                <div className="card-footer">
                  <p className="fw-bold"  data-aos="fade-right"  data-aos-duration="1000">Young Farm Club</p>
                </div>
              </div>
            </div>

            <div className="col-11 col-md-5 col-lg-4 pb-4">
              <div className="card">
                <div className="card-body text-center">
                  <img src={libraryPic1} alt=""/>
                </div>
                <div className="card-footer">
                  <p className="fw-bold"  data-aos="fade-right"  data-aos-duration="1000">Reading Club</p>
                </div>
              </div>
            </div>

            <div className="col-11 col-md-5 col-lg-4 pb-4">
              <div className="card">
                <div className="card-body text-center">
                  <img src={chess1} alt=""/>
                </div>
                <div className="card-footer">
                  <p className="fw-bold"  data-aos="fade-right"  data-aos-duration="1000">Chess club</p>
                </div>
              </div>
            </div>

            <div className="col-11 col-md-5 col-lg-4 pb-4">
              <div className="card">
                <div className="card-body text-center">
                  <img src="." alt=""/>
                </div>
                <div className="card-footer">
                  <p>Lorem ipsum dolor sit amet consectetur adip</p>
                </div>
              </div>
            </div>

            <div className="col-11 col-md-5 col-lg-4 pb-4">
              <div className="card">
                <div className="card-body text-center">
                  <img src={farmPic2} alt=""/>
                </div>
                <div className="card-footer">
                  <p className="fw-bold"  data-aos="fade-right"  data-aos-duration="1000">Young Farmers Club</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="news">
        <div className="container-md">
          <div className="text-center">
            <h2 className="l-text fw-bold" data-aos="fade-down"  data-aos-duration="1000"> Recent <span className="text-secondary1"> News</span></h2>
            <h4 className="diplay-4 text-secondary1" data-aos="fade-right"  data-aos-duration="1000">CHECK OUR RECENT NEWS</h4>
          </div>


          <div className="row align-item-center justify-content-center my-5">
            <a href="news.html"  className="col-11 col-lg-3 btn " data-aos="zoom-in-up"  data-aos-duration="1000">
              <p>HOW TO PAY YOUR FEES</p>

            </a>


            <a href="news.html" className="col-11 col-lg-3 btn" data-aos="zoom-in-up"  data-aos-duration="1000">
              <p>HOW TO CHECK YOUR RESULT</p>
            </a>

            <a className="col-11 col-lg-3 btn " data-aos="zoom-in-up"  data-aos-duration="1000">
              <p>ADMISSION</p>
            </a>
          </div>
        </div>
      </section>
      

      <section id="gallery">
        <div className=" gallery-head">
          <h2 className="l-text fw-bold" data-aos="fade-right"  data-aos-duration="1000">School <span className="text-secondary1">Gallery</span> </h2>
          <h4 className="diplay-4 text-secondary1 " data-aos="fade-up"  data-aos-duration="1000">PICTURE SPEAKS....</h4>
        </div>


        
        <div className="container-lg">
          <div className="row align-item-center justify-content-center">
            <div className="col-11 col-md-5 col-lg-4">
              <div className="img-con my-3">
                <div className="overlay"></div>
                <img className="" src={pic1} alt=""/>
              </div>
            </div>

            <div className="col-11 col-md-5 col-lg-4">
              <div className="img-con my-3">
                <div className="overlay"></div>
                <img className="" src={pic2} alt=""/>
              </div>
            </div>
            
            <div className="col-11 col-md-5 col-lg-4">
              <div className="img-con my-3">
                <div className="overlay"></div>
                <img className="" src={pic3} alt=""/>
              </div>
            </div>
            
            <div className="col-11 col-md-5 col-lg-5">
              <div className="img-con my-3">
                <div className="overlay"></div>
                <img className="" src={pic4} alt=""/>
              </div>
            </div>

            <div className="col-11 col-md-5 col-lg-5">
              <div className="img-con my-3">
                <div className="overlay"></div>
                <img className="" src={pic5} alt=""/>
              </div>
            </div>
          </div>
          <div className="link" data-aos="zoom-in"  data-aos-duration="1000">
            <Link to="/gallery" className="btn btn-lg primary-background px-5 py-3 my-5">VIEW ALL</Link> 
          </div>

          
          
        </div>
      </section>

      <section id="parent-speech ">
        <div className="container-lg">
          <div className=" parent-speech-head text-center pt-5 mt-5">
            <h2 className="l-text fw-bold" data-aos="fade-down"  data-aos-duration="1000">Parent <span className="text-secondary1"> "Verdict"</span> </h2>
            <h4 className="diplay-4 text-secondary1" data-aos="fade-right"  data-aos-duration="1000">DONT JUST HERE IT FROM US .... LET OUR PARENT DECIDE</h4>
          </div> 
          
          <div className="row justify-content-center text-center my-5">
            <div className="col-lg-3 col-11 boxing-shadow mx-3 py-3 my-3 parent-speech-content" >
              
              <FontAwesomeIcon icon={faQuoteLeft} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/>
              <p data-aos="fade-right"  data-aos-duration="1000">Following our relocation to Fredita Children Academy, it's been a delight to witness our son's remarkable academic progress. It's evident that the educational standards here are exceptionally high, as upon our arrival, we noticed he was already significantly ahead.</p>
              <FontAwesomeIcon icon={faQuoteRight} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/>       
            </div>

            <div className="col-lg-3 col-11 boxing-shadow mx-3 py-3 my-3 parent-speech-content" >
              <FontAwesomeIcon icon={faQuoteLeft} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/>
              <p data-aos="fade-right"  data-aos-duration="1000">The educators at Fredita Children Academy are exceptional in their roles, diligently fulfilling their responsibilities to guarantee the academic excellence of the students.</p>
              <FontAwesomeIcon icon={faQuoteRight} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/> 
            </div>

            <div className="col-lg-3 col-11 boxing-shadow mx-3 my-3 parent-speech-content">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/> 
              <p data-aos="fade-right"  data-aos-duration="1000">Since my child started attending Fredita Children Academy, I've observed a noticeable improvement in his academic performance. I have complete faith in Fredita Children Academy teaching approach and their academic framework. He has undergone growth that exceeded my expectations, and I will always hold deep gratitude for the efforts of the teachers, assistants, and the director.</p>
              <FontAwesomeIcon icon={faQuoteRight} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/>         
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
              <div className="col-lg-3"  data-aos="zoom-in"  data-aos-duration="1000">
                <div className="icon">
                  <a href="#"><FontAwesomeIcon className="g-3 l-text" icon="fa-brands fa-facebook" /></a>
                  <a href="#"><FontAwesomeIcon className="g-3 l-text" icon="fa-brands fa-whatsapp" /></a>
                  <a href="#"><FontAwesomeIcon className="g-3 l-text" icon="fa-brands fa-instagram" /></a>                 
                </div>
                <div className="py-3">
                  <p className="sm-text">Check our recent post and update on our social media platform</p> 
                </div>
              </div>

              <div className="col-lg-3 text-start ps-5 footer-link"  data-aos="fade-left"  data-aos-duration="1000">
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
                      <Link to="/contact" className={`nav-link p-1 footer-link ${isActive("/contact") ?"current": ""}`}>CONTACT US</Link> 

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
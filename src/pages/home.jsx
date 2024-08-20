import principal from "../img/principal.jpg"
import engineeringPic1 from "../img/engeinneringWorkShop2.JPG"
import libraryPic1 from "../img/Libary1.JPG"
import chess1 from "../img/chess3.jpeg"
import farm1 from "../img/farm2.JPG"
import farmPic2 from "../img/farm.JPG"
import pic1 from "../img/pic4.jpg"
import pic2 from "../img/pic1.jpg"
import pic3 from "../img/pic3.png"
import pic4 from "../img/pic5.jpg"
import pic5 from "../img/pic6.jpg"
import pic6 from "../img/art.JPG"
import school from '../img/school.png'
import reading from '../img/study_566985.png'
import teacher from '../img/teacher_1995413.png'
import Aos from "aos";
import "aos/dist/aos.css"
import "../css/style.css"
import "../css/moblie.css"
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSchool, faBookOpenReader, faUsers, faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons"
import { Navbar } from "../component/navbar"
import { Footer } from "../component/footer"
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
      <div className="overflow-hidden">
        <section id="cover-page">
          <div className="img9">
            <div className="cover-page-text-container">
              <div >
                <h5 className="ml-text  text-center">Babys DayOut Center/ Fredita Children Academy</h5>
                <p className="sm-text mb-4 text-center">""School is a building which has four walls with tomorrow inside." - Lon Watters"</p>
                <div className="d-flex justify-content-center">
                  <Link className="cover-page-btn" to='/portal' target="_blank">School Portal</Link>
                </div>
                
              </div>
            </div>
            

          </div>
        </section>

        <section id="principal-speech">
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4  d-none d-lg-block ">
                <img src={principal} alt="" data-aos="fade-right" data-aos-duration="1000" />
              </div>

              <div className="col-md-12 col-lg-6 text-center text-md-center text-lg-start" data-aos="fade-left" data-aos-duration="1000">
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
                <p  data-aos="fade-right"  data-aos-duration="1000" >At BDOMS, our mission is to provide a nurturing and
                 stimulating environment for children aged 1-13, fostering 
                 a love for learning and personal growth. We are dedicated to cultivating intellectual, emotional, social, and physical 
                 development through a balanced curriculum. Using the Montessori method, we encourage independence, creativity, and critical thinking. Instilling strong moral values and social responsibility from an early age is at the heart 
                 of our education. We make learning engaging and interactive with innovative teaching aids and promote active participation in community service to develop empathy. Our safe, supportive, and nurturing atmosphere ensures every 
                 child thrives.

                </p>
              </div>
            </div>

            <div className="col-lg-10 t-secondary-background  border-danger-2 mt-5 p-3 col-11">
              <div> 
                <h2 className="text-center" data-aos="fade-right"  data-aos-duration="1000">VISION OFF OUR SCHOOL</h2>
                <p data-aos="fade-right"  data-aos-duration="1000">Our vision at BDOMS is to be a leading institution in early childhood and primary education, recognized for our commitment to excellence and innovation. We aspire to create a dynamic
                 learning community where every child is empowered to reach their full potential. By fostering a love for learning, promoting creativity, and instilling strong moral values, we aim to develop future leaders who are compassionate, responsible,
                  and equipped to thrive in a rapidly changing world. Our goal is to inspire a lifelong passion for knowledge and personal growth in every student, preparing them for success in all aspects of life.
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

            <div className="row my-5 align-items-center  g-2 ">
              <div className="col-12 col-md-6 col-lg-4 about-content">
                <div className="card pb-5">
                  <div className="card-body text-center py-4">
                    <div className="about-icon">
                    <img src={teacher} width='150px'/>
                    </div>

                    <h4 className="card-title m-text fw-bold py-3" data-aos="fade-right"  data-aos-duration="1000">Experinced Teachers</h4>
                    <p className="card-text  d-lg-block text-muted " data-aos="fade-right"  data-aos-duration="1000">Our esteemed teacher at our school brings a wealth of experience that truly sets them apart. With a career spanning many years, their dedication and expertise have made a lasting impact on countless students.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 about-content">
                <div className="card pb-4">
                  <div className="card-body text-center py-3">
                    <div className="about-icon">
                      <img src={school} width='150px'/>
                    </div>
                    <h4 className="card-title m-text fw-bold py-3 " data-aos="fade-right"  data-aos-duration="1000">Avaliable classes</h4>
                    <p className="card-text  d-lg-block text-muted " data-aos="fade-right"  data-aos-duration="1000">Our school comprises of Creche, learning development className (LDC), pre-school, Nusery 1 - 3, primary 1 - 6. Our student all also oppunited to write a federal common entrance after their primary 6, incase any pupils have the dream off studying in a unity school afterwas.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 about-content">
                <div className="card pb-1">
                  <div className="card-body text-center py-4">
                    <div className="about-icon">
                    <img src={reading} width='150px'/>
                    </div>
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
                    <img src={farm1} alt=""/>
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
                    <img src={pic6} alt=""/>
                  </div>
                  <div className="card-footer">
                  <p className="fw-bold"  data-aos="fade-right"  data-aos-duration="1000">Art Club</p>
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
              <Link to="/gallery" className="  gallery-btn px-5 py-3 my-5">VIEW ALL</Link> 
            </div>

            
            
          </div>
        </section>

        <section id="parent-speech ">
          <div className="container-lg">
            <div className=" parent-speech-head text-center pt-5 mt-5">
              <h2 className="l-text fw-bold" data-aos="fade-down"  data-aos-duration="1000">Parent <span className="text-secondary1"> "Verdict"</span> </h2>
              <h4 className="diplay-4 text-secondary1" data-aos="fade-right"  data-aos-duration="1000">DONT JUST HERE IT FROM US .... LET OUR PARENT DECIDE</h4>
            </div> 
            
            <div className="row g-4 text-center my-5">
              <div className="col-lg-4 col-12 col-md-6" >
                <div className="parent-speech-content boxing-shadow   parent-speech-box1 px-4">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/>
                  <p data-aos="fade-right"  data-aos-duration="1000">Following our relocation to Fredita Children Academy, it's been a delight to witness our son's remarkable academic progress. It's evident that the educational standards here are exceptionally high, as upon our arrival, we noticed he was already significantly ahead.</p>
                  <FontAwesomeIcon icon={faQuoteRight} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/>  
                </div>
      
              </div>

              <div className="col-lg-4 col-12  col-md-6" >
                <div className="parent-speech-content boxing-shadow   parent-speech-box2 px-4">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/>
                  <p data-aos="fade-right"  data-aos-duration="1000">The educators at Fredita Children Academy are exceptional in their roles, diligently fulfilling their responsibilities to guarantee the academic excellence of the students.</p>
                  <FontAwesomeIcon icon={faQuoteRight} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/> 
                </div>

              </div>

              

              <div className="col-lg-4 col-12 col-md-6">
                <div className="parent-speech-content boxing-shadow   parent-speech-box3 px-4">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/> 
                  <p data-aos="fade-right"  data-aos-duration="1000">Since my child started attending Fredita Children Academy, I've observed a noticeable improvement in his academic performance. I have complete faith in Fredita Children Academy teaching approach and their academic framework. He has undergone growth that exceeded my expectations, and I will always hold deep gratitude for the efforts of the teachers, assistants, and the director.</p>
                  <FontAwesomeIcon icon={faQuoteRight} className="text-muted" data-aos="fade-right"  data-aos-duration="1000"/>  

                </div>
              </div>
            </div>

          </div>



        </section>

        <Footer/>
      
      </div>

        

    </div>
  )
  
  

}
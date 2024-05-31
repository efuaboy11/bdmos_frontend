import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import principalPicture from "../img/principal.jpg"
import awardPic from "../img/ribbon.png"
import runningPic from "../img/gym_11390345.png"

export const Vision = () =>{
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
                <h1 className="ml-text fw-bold dark-font"><span className="text-secondary1">Mission</span></h1>
              </div>

              <div className="d-lg-flex justify-content-between texts">
                <a href="./index.html" className="px-4">Home</a>
                <FontAwesomeIcon className="d-none d-md-block pt-2" icon={faAngleRight} color="black"/>
                <p className="text-secondary1 px-4 d-none d-md-block">About</p>
                
              </div>
            </div>      
          </div>

        </section>

        <section className="container-lg mb-5 pb-4">
          <div className="row">
            <div className="col-xxl">
              <div className="row">
                <div className="col-lg-7">
                  <h2 >BDOMS AT A GLANCE</h2>
                  <br />
                  <p><span className="font-bold text-secondary1">Welcome to BDOMS - Where Learning Begins! </span><br />

                    At BDOMS, we nurture young minds through a holistic approach to education, ensuring each child blossoms into a well-rounded individual. As a Montessori school, we foster independence, creativity, and critical thinking from an early age. Our curriculum is enriched with extra-curricular activities, making learning interactive, engaging, and fun with the use of innovative teaching aids. <br />
                    <br />

                    Instilling strong moral values is at the core of our education, guiding students to become respectful and responsible individuals. We expose children to various aspects of learning early on, building a solid foundation for future academic pursuits. Our highly trained and well-equipped staff are dedicated to providing the best education and support, ensuring a safe, supportive, and nurturing environment <br />
                    <br />
                    At BDOMS, we encourage active participation in community service, helping students develop a sense of social responsibility and empathy. Our state-of-the-art facilities provide a conducive environment for both learning and play, making education at BDOMS not just about academic achievement but also about cultivating a lifelong love for learning and personal growth. <br />
                    <br />
                    **Discover the BDOMS difference - <span className="font-bold text-secondary1"> Where every child’s journey matters.</span>**
                  </p>
                </div>


                <div className="col-lg-5 d-none d-lg-block">
                  <div>
                    <img src={principalPicture} width="65%"/>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-lg mb-5 pb-5 mt-5 pt-5">
          <div className="row mt-5">
            <div className="col-xxl-12">
              <div className="row g-3 text-center">
                <div className="col-md-6 col-xxl-4">
                  <div className="boxing-shadow border-radius-20 p-3 vision-boxes">
                    <img src={runningPic} alt="" width='100px' className="pb-5"/>
                    <h3>MISSION</h3>
                    <p className="pb-2">At BDOMS, our mission is to provide a nurturing and
                    stimulating environment for children aged 1-13, fostering 
                    a love for learning and personal growth. We are dedicated to cultivating intellectual, emotional, social, and physical 
                    development through a balanced curriculum. Using the Montessori method, we encourage independence, creativity, and critical thinking. Instilling strong moral values and social responsibility from an early age is at the heart 
                    of our education. We make learning engaging and interactive with innovative teaching aids and promote active participation in community service to develop empathy. Our safe, supportive, and nurturing atmosphere ensures every 
                    child thrives.
                    </p>
                  </div>

                </div>

                <div className="col-md-6 col-xxl-4">
                  <div className="boxing-shadow border-radius-20 p-3 vision-boxes">
                    <img src={awardPic} alt="" width='100px' className="mb-5"/>
                    <h3>VISION</h3>
                    <p className="pb-5">Our vision at BDOMS is to be a leading institution in early childhood and primary education, recognized for our commitment to excellence and innovation. We aspire to create a dynamic
                      learning community where every child is empowered to reach their full potential. By fostering a love for learning, promoting creativity, and instilling strong moral values, we aim to develop future leaders who are compassionate, responsible,
                      and equipped to thrive in a rapidly changing world. Our goal is to inspire a lifelong passion for knowledge and personal growth in every student, preparing them for success in all aspects of life.
                    </p>                    
                  </div>

                </div>

                <div className="col-md-6 col-xxl-4">
                  <div className="boxing-shadow border-radius-20 p-3 vision-boxes">
                    <img src={runningPic} alt="" width='100px' className="pb-5"/>
                    <h3>CORE VALUES</h3>
                    <div className="text-start pb-5">
                      <p>At BDOMS, our core values, the 5 C's, guide everything we do</p>
                      <li className="li-style">Christ: Embracing Christian principles in our daily lives.</li>
                      <li className="li-style">Care: Nurturing a culture of compassion and empathy towards others.</li>
                      <li className="li-style">Cleanliness: Fostering a hygienic and organized environment for optimal learning.</li>
                      <li className="li-style">Creativity: Inspiring innovation and out-of-the-box thinking in our students.</li>
                      <li className="li-style">Culture: Celebrating diversity and respecting various cultural backgrounds within our community.</li>
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
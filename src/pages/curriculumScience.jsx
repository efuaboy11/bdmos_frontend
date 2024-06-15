import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";

export const Science = () =>{
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
                <h1 className="ml-text fw-bold dark-font"> <span className="text-secondary1">Science</span></h1>
              </div>

              <div className="d-lg-flex justify-content-between texts">
                <a href="./index.html" className="px-4">Home</a>
                <p className="text-secondary1 px-4 d-none d-md-block">curriculum</p>
                
              </div>
            </div>      
          </div>

        </section>

        <section className="pb-5 mb-5">
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <section>
                  <h5 className="text-center">SCIENCE VISION</h5>
                  <p>Science is the systematic study of the natural world through observation, experimentation, and analysis. It involves exploring the principles and laws that govern the universe, from the smallest particles to the vastness of space. Science fosters curiosity and helps us understand how things work, encouraging us to ask questions and seek evidence-based answers. <br /> <br />
                  At BDOMS, we envision a stimulating and dynamic environment where every child develops a passion for discovery and a deep appreciation for the natural world. We aim to inspire students to become inquisitive thinkers who explore, experiment, and engage with scientific concepts. Our goal is to create lifelong learners who are excited about the wonders of science.

                  </p>
                </section>

                <section className="py-5">
                  <div>
                    <h5>OUR AIM AT BDOMS</h5>
                  </div>

                  <div className="ps-3 pt-1">
                    <h6>1. Cultivating Curiosity and Inquiry:</h6>
                    <div className="ps-4">
                      <p>We aim to nurture a sense of wonder and curiosity in our students. By encouraging them to ask questions and seek answers, we help them develop critical thinking and investigative skills.</p>
                    </div>
                  </div>

                  <div className="ps-3 pt-2">
                    <h6>2. Building Fundamental Knowledge:</h6>
                    <div className="ps-4">
                      <p>We strive to provide a strong foundation in core scientific principles across various disciplines, including biology, chemistry, physics, and earth science. Our students learn about the structure and behavior of the natural world, gaining essential knowledge that supports further learning.</p>
                    </div>
                  </div>

                  <div className="ps-3 pt-2">
                    <h6>3. Promoting Hands-On Learning:</h6>
                    <div className="ps-4">
                      <p>We believe that science is best learned through doing. Our curriculum includes hands-on experiments, interactive projects, and real-world investigations that allow students to apply their knowledge and see science in action.</p>
                    </div>
                  </div>

                  <div className="ps-3 pt-2">
                    <h6>4. Encouraging Collaboration and Communication:</h6>
                    <div className="ps-4">
                      <p>Science is a collaborative endeavor. We emphasize the importance of teamwork and effective communication, helping students work together to solve problems and share their findings.</p>
                    </div>
                  </div>

                  <div className="ps-3 pt-2">
                    <h6>5. Connecting Science to Everyday Life:</h6>
                    <div className="ps-4">
                      <p>We aim to demonstrate the relevance of science in our daily lives. By linking scientific concepts to everyday experiences and global issues, we help students understand the impact of science on society and the environment.</p>
                    </div>
                  </div>

                  <div className="ps-3 pt-2">
                    <h6>6. Inspiring Future Scientists:</h6>
                    <p>We seek to inspire the next generation of scientists, engineers, and innovators. By exposing students to a wide range of scientific fields and careers, we encourage them to explore their interests and consider future opportunities in science and technology.</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>



        <Footer />
      </section>

		</div>
			
  )
}
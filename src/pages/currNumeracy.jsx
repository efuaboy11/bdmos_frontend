import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";

export const Numeracy = () =>{
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
                <h1 className="ml-text fw-bold dark-font"><span className="text-secondary1">Numeracy</span></h1>
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
									<h5 className="text-center">NUMERACY VISION</h5>
									<p>Numeracy is the ability to understand and work with numbers. It involves skills such as counting, calculating, measuring, and understanding shapes and patterns. Being numerate means having the confidence and competence to use numbers and mathematical concepts in everyday life, from solving simple problems to making informed decisions. <br /> <br />
										At BDOMS, we envision a learning environment where every child becomes a confident and capable mathematician. We believe that numeracy is a fundamental skill that empowers students to succeed in school and beyond. Our goal is to cultivate a love for mathematics through engaging and practical experiences that make learning fun and relevant.
									
									</p>
								</section>

								<section className="py-5">
									<div>
										<h5>OUR AIM AT BDOMS</h5>
									</div>

									<div className="ps-3 pt-2">
										<h6>1. Building Strong Foundations:</h6>
										<div className="ps-4">
											<p>We aim to ensure that every child develops a solid understanding of basic mathematical concepts. This includes proficiency in addition, subtraction, multiplication, and division, as well as the ability to recognize and work with shapes, patterns, and measurements.</p>
										</div>
									</div>

									<div className="ps-3 pt-2">
										<h6>2. Developing Problem-Solving Skills:</h6>
										<div className="ps-4">
											<p>We strive to nurture critical thinking and problem-solving abilities. Our students learn to approach challenges methodically, think logically, and apply their mathematical knowledge to real-world situations.</p>
										</div>
									</div>

									<div className="ps-3 pt-2">
										<h6>3. Fostering a Growth Mindset:</h6>
										<div className="ps-4">
											<p>We encourage a positive attitude towards mathematics. By fostering a growth mindset, we help students understand that everyone can improve their numeracy skills with practice and perseverance.</p>
										</div>
									</div>

									<div className="ps-3 pt-2">
										<h6>4. Making Mathematics Enjoyable:</h6>
										<div className="ps-4">
											<p>We believe that learning should be enjoyable. Through interactive activities, games, and hands-on experiences, we make numeracy engaging and fun for our students.</p>
										</div>
									</div>

									<div className="ps-3 pt-2">
										<h6>5. Connecting Mathematics to Daily Life:</h6>
										<div className="ps-4">
											<p>We aim to show our students the relevance of numeracy in their everyday lives. By connecting classroom learning to real-life scenarios, we help children see the practical applications of their mathematical skills.</p>
										</div>
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
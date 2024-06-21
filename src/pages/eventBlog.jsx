import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import pic1 from "../img/outdoor32.JPG"
export const Blog = () =>{
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
                <h1 className="ml-text fw-bold dark-font"><span className="text-secondary1">Blog</span></h1>
              </div>

              <div className="d-lg-flex justify-content-between texts">
                <a href="./index.html" className="px-4">Home</a>
                <p className="text-secondary1 px-4 d-none d-md-block">Event</p>
                
              </div>
            </div>      
          </div>
        </section>
        <section className="container-lg py-5 my-5">
          <div>
            <h5 className="pb-4">Our Recent Post</h5>

            <section className="pb-5">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="row g-3">
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                      <div className="light-background2 p-4 blog-container">
                        <img src={pic1} alt="" width='100%'/>
                        <div className="d-flex pt-3">
                          <p className="bg-purple event-date">01/04/2022</p>
                        </div>
                        <div className="scroll-bar-black-y blog-text">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas quibusdam veritatis, optio debitis dicta nostrum molestias eligendi accusantium blanditiis laborum excepturi. Odit necessitatibus consequuntur atque aliquid tempora voluptas deserunt asperiores vel repellendus sed distinctio, mollitia soluta repudiandae quasi error, magni totam quis nobis exercitationem culpa dignissimos. Eligendi est minima vel vero. Voluptate distinctio saepe veniam culpa, et iste harum pariatur dolorem temporibus neque officia consequatur officiis. Incidunt nesciunt impedit et, corporis id omnis perferendis enim veniam aperiam facere dolor tempore quam a delectus non optio odit sequi minima reprehenderit nemo iste unde accusantium. Error beatae consequuntur culpa facilis quis!</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                      <div className="light-background2 p-4 blog-container">
                        <img src={pic1} alt="" width='100%'/>
                        <div className="d-flex pt-3">
                          <p className="bg-purple event-date">01/04/2022</p>
                        </div>
                        <div className="scroll-bar-black-y blog-text">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas quibusdam veritatis, optio debitis dicta nostrum molestias eligendi accusantium blanditiis laborum excepturi. Odit necessitatibus consequuntur atque aliquid tempora voluptas deserunt asperiores vel repellendus sed distinctio, mollitia soluta repudiandae quasi error, magni totam quis nobis exercitationem culpa dignissimos. Eligendi est minima vel vero. Voluptate distinctio saepe veniam culpa, et iste harum pariatur dolorem temporibus neque officia consequatur officiis. Incidunt nesciunt impedit et, corporis id omnis perferendis enim veniam aperiam facere dolor tempore quam a delectus non optio odit sequi minima reprehenderit nemo iste unde accusantium. Error beatae consequuntur culpa facilis quis!</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                      <div className="light-background2 p-4 blog-container">
                        <img src={pic1} alt="" width='100%'/>
                        <div className="d-flex pt-3">
                          <p className="bg-purple event-date">01/04/2022</p>
                        </div>
                        <div className="scroll-bar-black-y blog-text">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas quibusdam veritatis, optio debitis dicta nostrum molestias eligendi accusantium blanditiis laborum excepturi. Odit necessitatibus consequuntur atque aliquid tempora voluptas deserunt asperiores vel repellendus sed distinctio, mollitia soluta repudiandae quasi error, magni totam quis nobis exercitationem culpa dignissimos. Eligendi est minima vel vero. Voluptate distinctio saepe veniam culpa, et iste harum pariatur dolorem temporibus neque officia consequatur officiis. Incidunt nesciunt impedit et, corporis id omnis perferendis enim veniam aperiam facere dolor tempore quam a delectus non optio odit sequi minima reprehenderit nemo iste unde accusantium. Error beatae consequuntur culpa facilis quis!</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                      <div className="light-background2 p-4 blog-container">
                        <img src={pic1} alt="" width='100%'/>
                        <div className="d-flex pt-3">
                          <p className="bg-purple event-date">01/04/2022</p>
                        </div>
                        <div className="scroll-bar-black-y blog-text">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas quibusdam veritatis, optio debitis dicta nostrum molestias eligendi accusantium blanditiis laborum excepturi. Odit necessitatibus consequuntur atque aliquid tempora voluptas deserunt asperiores vel repellendus sed distinctio, mollitia soluta repudiandae quasi error, magni totam quis nobis exercitationem culpa dignissimos. Eligendi est minima vel vero. Voluptate distinctio saepe veniam culpa, et iste harum pariatur dolorem temporibus neque officia consequatur officiis. Incidunt nesciunt impedit et, corporis id omnis perferendis enim veniam aperiam facere dolor tempore quam a delectus non optio odit sequi minima reprehenderit nemo iste unde accusantium. Error beatae consequuntur culpa facilis quis!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        
        <Footer />
      </section>

		</div>
			
  )
}
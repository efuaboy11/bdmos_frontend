import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import principalPicture from "../img/principal.jpg"

export const OurStory = () =>{
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
                <h1 className="ml-text fw-bold dark-font">Our <span className="text-secondary1">Story</span></h1>
              </div>

              <div className="d-lg-flex justify-content-between texts">
                <a href="./index.html" className="px-4">Home</a>
                <p className="text-secondary1 px-4 d-none d-md-block">About</p>
                
              </div>
            </div>      
          </div>

        </section>

        <section className="container-lg mb-5 pb-4">
          <div className="row">
            <div className="col-xxl">
              <div className="row">
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="d-flex justify-content-end">
                    <img src={principalPicture} width="65%"/>
                  </div>

                </div>
                <div className="col-lg-7">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea adipisci ullam, ut laborum quod consequuntur delectus mollitia cumque velit commodi unde, id dolorum ipsum repellendus deleniti in. Veritatis rerum possimus modi laudantium ipsam, nesciunt quaerat quidem esse, deserunt autem voluptas obcaecati. Ipsum ea natus fugit quaerat cumque earum cum? Nesciunt tenetur aliquam facilis maxime id enim commodi ea accusantium dolorem placeat, eaque rem? Laborum sapiente est doloribus possimus vitae placeat veritatis perspiciatis provident, veniam rerum incidunt quisquam quae nemo, accusantium ab aut expedita, consectetur laboriosam temporibus ducimus velit. Quis non quo voluptatem ipsam culpa rerum tenetur, aperiam mollitia eos obcaecati, tempora amet doloremque? Minima error laboriosam magnam cum delectus officia molestiae cupiditate possimus nisi praesentium! Reiciendis nisi odit corporis magni saepe consectetur debitis incidunt nobis? Iure, id rerum nisi accusantium beatae doloribus aperiam mollitia necessitatibus ipsam sequi, officiis rem facilis velit veritatis natus deleniti officia voluptatum. Natus quibusdam eveniet ex maiores aspernatur. Quos a iste laborum deserunt doloribus id ratione consequuntur culpa ab molestias hic, exercitationem quibusdam odit nam voluptatem. Ipsam delectus veniam cum saepe, error odio molestiae magni minima ullam perferendis quam impedit ipsum soluta architecto neque corporis hic tenetur quidem dolor tempora laudantium repudiandae odit possimus? Enim culpa ratione quod sed quia quisquam perspiciatis nostrum nulla incidunt esse voluptatum necessitatibus fugit repellendus facilis voluptate, aut sint porro nam dolorem a molestias rerum. Sapiente neque in, autem dicta exercitationem delectus, quidem praesentium voluptatum earum quae nulla reiciendis quisquam ipsum necessitatibus dolorum perferendis natus eius. Sunt velit alias doloremque.</p>
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
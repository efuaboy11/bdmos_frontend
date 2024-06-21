import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import pic1 from "../img/outdoor13.JPG"
import pic2 from "../img/outdoor40.png"


import Swiper from 'swiper';
import 'swiper/css';
import { FactSheetIMG } from "./fachSheetImg";
export const FactSheet = () =>{
  
  
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
                <h1 className="ml-text fw-bold dark-font">BDOMS <span className="text-secondary1">Facts</span></h1>
              </div>

              <div className="d-lg-flex justify-content-between texts">
                <a href="./index.html" className="px-4">Home</a>
                <p className="text-secondary1 px-4 d-none d-md-block">info</p>
                
              </div>
            </div>      
          </div>

        </section>

        <section className="container-lg pt-5 pb-5  mt-5 mb-5">
          <div className="row">
            <div className="col-xxl-12">
              <div className="row">
                <div className="col-md-7">
                  <div>
                    <FactSheetIMG />
                    <div className="pt-5">
                      <p className="font-bold">For more information on registering your wards, Please Contact us via: <br /> Phone Number:</p>
                      <p>08060918549,  08072845491</p>
                      <p className="font-bold">Email:</p>
                      <p>omonefua72@gmail.com</p>
                      <p className="font-bold">Website:</p>
                      <p>www.</p>
                    </div>

                  </div> 


                </div>
                <div className="col-md-5">
                  <div>             
                    <h3>NOW TO THE FACTS...</h3>
                    <div className="fact-sheet-story scroll-bar-black-y">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam voluptas architecto, quo consectetur, quis beatae voluptatibus cupiditate magnam iste fuga at. Cum facere iusto minus assumenda modi esse doloremque ipsum, autem eaque, dignissimos sapiente nisi deleniti quidem labore natus eveniet ea pariatur voluptates corrupti mollitia aut iure enim. Itaque, tenetur est? Cupiditate culpa fuga eum, voluptates tenetur molestiae neque quaerat eos quod veniam at, voluptatum quos quis eaque impedit qui est. Iure quos, nihil rem sint facere, neque ad iste nisi architecto necessitatibus nulla, qui labore eum consectetur a quae quaerat voluptates debitis cupiditate esse enim? Eaque, iure distinctio. Quo, corporis. Iste illum labore, officiis non ratione asperiores temporibus. Dolores optio, modi asperiores dignissimos provident ea cupiditate commodi cumque doloremque numquam error inventore nulla voluptatem distinctio omnis, officia facere possimus reprehenderit non porro impedit iste! Nesciunt eveniet, minima consequatur asperiores eaque consectetur vel quo dolorum soluta, quae perspiciatis explicabo quasi. Nulla expedita optio sit, possimus culpa illo consequatur vitae in dignissimos exercitationem sequi repudiandae ratione unde. Similique, provident. Ullam distinctio quaerat sequi ipsum veniam nisi quam quod officia provident ipsa numquam illum at, aliquid totam perspiciatis debitis fugiat corrupti itaque error delectus nam? Accusantium officia impedit quidem, possimus eum, debitis obcaecati error, illum omnis quia atque eos est. Possimus at doloribus tenetur repudiandae harum, magnam excepturi quis impedit ullam. Provident consequatur illo quisquam voluptatum quaerat minus, tempore ratione neque voluptas praesentium odio ea quia aliquid iste reprehenderit debitis earum obcaecati eligendi. Reiciendis animi blanditiis voluptatem et mollitia! Sed commodi cupiditate magni deserunt quia. Sint assumenda laborum voluptatibus harum quaerat illum, recusandae consectetur commodi fuga modi error maxime. Dolor alias consectetur ea velit enim perspiciatis eligendi. Praesentium a facilis possimus voluptates temporibus nulla labore! Sequi animi at nostrum beatae iure maiores modi repellat doloremque dolore, soluta velit, a sint nam autem!</p>
                    </div>               
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section className="light-background2 fact-sheet-box-conatiner   pt-5 pb-5 overflow-hidden">
          <div className="container-lg">
            <div className="row">
              <div className="col-xxl-12">
                <div className="row g-3 fact-sheet-boxes">
                  <div className="col-lg-4 col-xl-3 col-sm-6 fact-sheet-boxe-1">
                    <div className="flip-card ">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <div className="image-container">
                            <img src={pic1} alt="Sample Image" />
                            <div className="img-overlay font-bold">ADMISSION PROCEDURE</div>
                          </div>
                        </div>
                        <div className="flip-card-back">
                          <p className="pb-3">Check out our admission procedure!</p>
                          <Link to='/info/admission' className="fact-sheet-btn">VIEW DETAILS</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3 col-sm-6">
                    <div className=" fact-sheet-box-2">
                      <div>
                        <p>View our blog to see more off our recent event. Keep updated with BDOMS</p>
                        <div className="d-flex justify-content-center">
                          <Link to='/event/blog' className="fact-sheet-btn ">LEARN MORE</Link>
                        </div>
                       
                      </div>
                      
                    </div>

                  </div>
                  <div className="col-lg-4 col-xl-3 col-sm-6 fact-sheet-boxe-3">
                    <div className="">        
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <div className="image-container">
                              <img src={pic2} alt="Sample Image" />
                              <div className="img-overlay font-bold">GALLERY</div>
                            </div>
                          </div>
                          <div className="flip-card-back">
                            <p className="p-3">Nothing speaks better than a picture. Take a glance at the BDOMS gallery and see for yourself.!</p>
                            <Link to='/gallery' className="fact-sheet-btn">VIEW MORE</Link>
                          </div>
                        </div>
                      </div>
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
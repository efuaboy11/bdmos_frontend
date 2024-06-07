import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import principalPicture from "../img/principal.jpg"
import uniform from "../img/children1.JPG"
import uniform2 from '../img/sports24.JPG'
import uniform3 from '../img/uniformChildren.JPG'
import uniform4 from '../img/uniform 1.JPG'
import uniform5 from '../img/unifrom3.JPG'
import uniform6 from "../img/sport15.JPG"
import { useState } from "react";

export const Uniform = () =>{

  const [displayBoys ,setDisplayBoys] = useState(true);
  const [displayGirls, setDisplayGirls] = useState(false)

  const [displayBoys2 ,setDisplayBoys2] = useState(true);
  const [displayGirls2, setDisplayGirls2] = useState(false)

  const toogleDisplayBoys =() =>{
    setDisplayBoys(!displayBoys)
    setDisplayGirls(!displayGirls)

  }
  const toogleDisplayGirls =() =>{
    setDisplayGirls(!displayGirls)
    setDisplayBoys(!displayBoys)

  }

  const toogleDisplayBoys2 =() =>{
    setDisplayBoys2(!displayBoys2)
    setDisplayGirls2(!displayGirls2)

  }
  const toogleDisplayGirls2 =() =>{
    setDisplayGirls2(!displayGirls2)
    setDisplayBoys2(!displayBoys2)

  }



	const location = useLocation();
	const isActive = (path) =>{
		return location.pathname === path

	}
	return(
		<div id="uniform">
			<Navbar />
      <section>
        <section id="heading" className="light-background2 mt-5 mb-5">
          <div className="container-lg">
            <div className="d-md-flex d-inline justify-content-between">
              <div>
                <h1 className="ml-text fw-bold dark-font">School <span className="text-secondary1">Uniform</span></h1>
              </div>

              <div className="d-lg-flex justify-content-between texts">
                <a href="./index.html" className="px-4">Home</a>
                <FontAwesomeIcon className="d-none d-md-block pt-2" icon={faAngleRight} color="black"/>
                <p className="text-secondary1 px-4 d-none d-md-block">Info</p>
                
              </div>
            </div>      
          </div>

        </section>

        <section className="container-lg">
          <div className="d-flex justify-content-center ">
            <div>
              <h4 className="uniform-h4">NUSERY SCHOOL</h4>
              <p className="text-center">Our Pupils dress code.</p>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-xxl-12">
              <div className="row g-4">
                <div className="col-xxl-3 col-lg-4 col-sm-6">
                  <div>
                    <img src={uniform} alt="" width='100%'/>
                  </div>
                </div>

                <div className="col-xxl-3 col-lg-4 col-sm-6">
                  <div>
                    <img src={uniform2} alt="" width='100%' height='410px'/>
                  </div>
                </div>

                <div className="col-xxl-3 col-lg-4 col-sm-6">
                  <div>
                    <img src={uniform3} alt="" width='100%' height='410px'/>
                  </div>
                </div>

                <div className="col-xxl-3 col-lg-4 col-sm-6">
                  <div className="light-background3"> 
                    <div>
                      <div>
                        <div className="d-flex uniform-boys-header">
                          <div className="pe-4">
                            <FontAwesomeIcon className="cursor-pointer"  icon={displayBoys ?  faPlus:faMinus } onClick={toogleDisplayBoys}/>
                          </div>
                          <h6>BOYS</h6>
                        </div>

                        {displayBoys && 
                          <div className="p-3">
                            <div>
                              <p className="font-bold">School Uniform: </p>
                              <p>1. Brown collar orange T-shirt with brown shorts</p>
                              <p>2. plain white socks with pair off black school shoes</p>
                              <p>3. School badges must be on shirt at all times</p>
                            </div>

                            <div>
                              <p className="font-bold">Sweaters: </p>
                              <p>1. Milkish white with orange strips (plain and loong sleeve)</p>
                              <p>2. Round-neck</p>
                            </div>

                            <div>
                              <p className="font-bold">Outdoors Clothes: </p>
                              <p>At parent descretion but must be decent.</p>
                            </div>
                          </div>                        
                        
                        }


                      </div>


                      <div className="pt-3">
                        <div className="d-flex uniform-girls-header">
                          <div className="pe-4">
                            <FontAwesomeIcon className="cursor-pointer"  icon={displayBoys ?  faMinus : faPlus } onClick={toogleDisplayGirls}/>
                          </div>
                          <h6>GIRLS</h6>
                        </div>

                        {displayGirls && 
                          <div className="p-3">
                            <div>
                              <p className="font-bold">School Uniform: </p>
                              <p>1. Brown collar orange T-shirt with brown grown</p>
                              <p>2. plain white socks with pair off black school shoes</p>
                              <p>3. School badges must be on shirt at all times</p>
                            </div>

                            <div>
                              <p className="font-bold">Sweaters: </p>
                              <p>1. Milkish white with orange strips (plain and loong sleeve)</p>
                              <p>2. Round-neck</p>
                            </div>

                            <div>
                              <p className="font-bold">Outdoors Clothes: </p>
                              <p>At parent descretion but must be decent.</p>
                            </div>
                          </div> 
                        
                        }
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-lg pb-5 mb-5">
          <div className="d-flex justify-content-center ">
            <div>
              <h4 className="uniform-h4">PRIMARY SCHOOL</h4>
              <p className="text-center">Our Pupils dress code.</p>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-xxl-12">
              <div className="row g-4">
                <div className="col-xxl-3 col-lg-4 col-sm-6">
                  <div>
                    <img src={uniform4} alt="" width='100%'/>
                  </div>
                </div>

                <div className="col-xxl-3 col-lg-4 col-sm-6">
                  <div>
                    <img src={uniform5} alt="" width='100%' height='410px'/>
                  </div>
                </div>

                <div className="col-xxl-3 col-lg-4 col-sm-6">
                  <div>
                    <img src={uniform6} alt="" width='100%' height='410px'/>
                  </div>
                </div>

                <div className="col-xxl-3 col-lg-4 col-sm-6">
                  <div className="light-background3"> 
                    <div>
                      <div>
                        <div className="d-flex uniform-boys-header">
                          <div className="pe-4">
                            <FontAwesomeIcon className="cursor-pointer"  icon={displayBoys2 ?  faPlus:faMinus } onClick={toogleDisplayBoys2}/>
                          </div>
                          <h6>BOYS</h6>
                        </div>

                        {displayBoys2 && 
                          <div className="p-3">
                            <div>
                              <p className="font-bold">School Uniform: </p>
                              <p>1. Brown collar orange T-shirt with brown shorts</p>
                              <p>2. plain white socks with pair off black school shoes</p>
                              <p>3. School badges must be on shirt at all times</p>
                            </div>

                            <div>
                              <p className="font-bold">Sweaters: </p>
                              <p>1. Milkish white with orange strips (plain and loong sleeve)</p>
                              <p>2. Round-neck</p>
                            </div>

                            <div>
                              <p className="font-bold">Outdoors Clothes: </p>
                              <p>At parent descretion but must be decent.</p>
                            </div>
                          </div>                        
                        
                        }


                      </div>


                      <div className="pt-3">
                        <div className="d-flex uniform-girls-header">
                          <div className="pe-4">
                            <FontAwesomeIcon className="cursor-pointer"  icon={displayBoys2 ?  faMinus : faPlus } onClick={toogleDisplayGirls2}/>
                          </div>
                          <h6>GIRLS</h6>
                        </div>

                        {displayGirls2 && 
                          <div className="p-3">
                            <div>
                              <p className="font-bold">School Uniform: </p>
                              <p>1. Brown collar orange T-shirt with brown grown</p>
                              <p>2. plain white socks with pair off black school shoes</p>
                              <p>3. School badges must be on shirt at all times</p>
                            </div>

                            <div>
                              <p className="font-bold">Sweaters: </p>
                              <p>1. Milkish white with orange strips (plain and loong sleeve)</p>
                              <p>2. Round-neck</p>
                            </div>

                            <div>
                              <p className="font-bold">Outdoors Clothes: </p>
                              <p>At parent descretion but must be decent.</p>
                            </div>
                          </div> 
                        
                        }
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
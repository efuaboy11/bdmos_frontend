import { Link } from "react-router-dom"
import { DashFrame } from "../../component/dashFrame"
import "../../css/dashboard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons"
import pic from '../../img/pexels-andrea-piacquadio-762041 (2).jpg'

export const SchoolStore = () =>{
  return(
    <div>
      <div  className="position-sticky">
        <DashFrame />
      </div>

      <div className="main-content">
        <section className="container-lg">
          <div className="row my-3 pb-4">
              <div className="col-md-7 col-sm-6 col-6">
                <h5>School Store</h5>
                <p>Purchase School Items Here! </p>
              </div>
              <div className="col-md-5 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin/addTeacher" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>View Cart</Link>
						  </div>
          </div>
        </section>

        <div className="container-lg">
          <div className="school-store-container">
            <div className="row mx-3">
              <div className="col-xxl-12">
                <div className="row my-3 g-3">
                  <div className="col-sm-6 col-lg-4">
                    <div className="school-store-box">
                      <div>
                        <img src={pic} alt="" width="100%" height='250px'/>
                      </div>

                      <div className="mt-3 p-2">
                        <div className="d-flex my-2">
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                        </div>
                        <h6>Primary 6 Mathematics textbook</h6>

                        <h4> ₦34,5000</h4>

                        <div className="my-4">
                          <button className="school-store-cart-btn me-3 mb-3">ADD TO CART</button>
                          <button className="school-store-buy-btn">BUY NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4">
                    <div className="school-store-box">
                      <div>
                        <img src={pic} alt="" width="100%" height='250px'/>
                      </div>

                      <div className="mt-3 p-2">
                        <div className="d-flex my-2">
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                        </div>
                        <h6>Primary 6 Mathematics textbook</h6>

                        <h4> ₦34,5000</h4>

                        <div className="my-4">
                          <button className="school-store-cart-btn me-3 mb-3">ADD TO CART</button>
                          <button className="school-store-buy-btn">BUY NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4">
                    <div className="school-store-box">
                      <div>
                        <img src={pic} alt="" width="100%" height='250px'/>
                      </div>

                      <div className="mt-3 p-2">
                        <div className="d-flex my-2">
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                        </div>
                        <h6>Primary 6 Mathematics textbook</h6>

                        <h4> ₦34,5000</h4>

                        <div className="my-4">
                          <button className="school-store-cart-btn me-3 mb-3">ADD TO CART</button>
                          <button className="school-store-buy-btn">BUY NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4">
                    <div className="school-store-box">
                      <div>
                        <img src={pic} alt="" width="100%" height='250px'/>
                      </div>

                      <div className="mt-3 p-2">
                        <div className="d-flex my-2">
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                        </div>
                        <h6>Primary 6 Mathematics textbook</h6>

                        <h4> ₦34,5000</h4>

                        <div className="my-4">
                          <button className="school-store-cart-btn me-3 mb-3">ADD TO CART</button>
                          <button className="school-store-buy-btn">BUY NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4">
                    <div className="school-store-box">
                      <div>
                        <img src={pic} alt="" width="100%" height='250px'/>
                      </div>

                      <div className="mt-3 p-2">
                        <div className="d-flex my-2">
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                        </div>
                        <h6>Primary 6 Mathematics textbook</h6>

                        <h4> ₦34,5000</h4>

                        <div className="my-4">
                          <Link to="/schoolStore/cartPage" className="school-store-cart-btn me-3">ADD TO CART</Link>
                          <button className="school-store-buy-btn mt-4">BUY NOW</button>
                        </div>
                      </div>

                      
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4">
                    <div className="school-store-box">
                      <div>
                        <img src={pic} alt="" width="100%" height='250px'/>
                      </div>

                      <div className="mt-3 p-2">
                        <div className="d-flex my-2">
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                        </div>
                        <h6>Primary 6 Mathematics textbook</h6>

                        <h4> ₦34,5000</h4>

                        <div className="my-4">
                          <button className="school-store-cart-btn me-3 mb-3">ADD TO CART</button>
                          <button className="school-store-buy-btn">BUY NOW</button>
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  ) 
}
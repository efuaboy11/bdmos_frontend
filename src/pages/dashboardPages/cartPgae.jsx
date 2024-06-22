import { Link } from "react-router-dom"
import { DashFrame } from "../../component/dashFrame"
import "../../css/dashboard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faTrash, faUser } from "@fortawesome/free-solid-svg-icons"
import pic from '../../img/pexels-andrea-piacquadio-762041 (2).jpg'
import { useState } from "react"

export const CartPage = () =>{
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
  };
  return(
    <div>
      <div  className="position-sticky">
        <DashFrame />
      </div>

      <div className="main-content">
        <section className="container-lg">
          <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h2>Shopping Cart</h2>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin/addStudent" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>  Back</Link>
						  </div>
          </div>
        </section>

        <section className="container-lg">
          <div className="cart-page-container scroll-bar-y">

            <div className="row">
              <div className="xxl-12">
                <div className="row ms-1 mt-3">
                  <div className="col-md-8">
                    <div className="row mb-4">
                      <div  className="col-5 col-sm-2">
                        <img src={pic} alt="" width="100%"/>
                      </div>
                      <div className="col-7">
                        <h5>Primary 6 Mathematics textbook</h5>
                        <div className=" d-block d-sm-none">
                          <h6>₦34,5000</h6>
                        </div>
                        <div className="d-flex my-2">
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                        </div>
                        <div className="d-sm-flex ">                    
                          <div className="mt-2 me-4 mb-2">
                            <button className="cart-btn-increase" onClick={handleDecrease}>-</button>
                            <input className="cart-btn-input" type="number" value={count} readOnly />
                            <button className="cart-btn-increase" onClick={handleIncrease}>+</button>
                          </div>
                          <div>
                            <button className="cart-remove-btn mt-1"><FontAwesomeIcon icon={faTrash}/>  Remove</button>
                          </div>

                          
                        </div>
                      </div>

                      <div className="col-3 d-none d-sm-block">
                        <h6>₦34,5000</h6>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div  className="col-5 col-sm-2">
                        <img src={pic} alt="" width="100%"/>
                      </div>
                      <div className="col-7">
                        <h5>Primary 6 Mathematics textbook</h5>
                        <div className=" d-block d-sm-none">
                          <h6>₦34,5000</h6>
                        </div>
                        <div className="d-flex my-2">
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                        </div>
                        <div className="d-sm-flex ">                    
                          <div className="mt-2 me-4 mb-2">
                            <button className="cart-btn-increase" onClick={handleDecrease}>-</button>
                            <input className="cart-btn-input" type="number" value={count} readOnly />
                            <button className="cart-btn-increase" onClick={handleIncrease}>+</button>
                          </div>
                          <div>
                            <button className="cart-remove-btn mt-1"><FontAwesomeIcon icon={faTrash}/>  Remove</button>
                          </div>

                          
                        </div>
                      </div>

                      <div className="col-3 d-none d-sm-block">
                        <h6>₦34,5000</h6>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div  className="col-5 col-sm-2">
                        <img src={pic} alt="" width="100%"/>
                      </div>
                      <div className="col-7">
                        <h5>Primary 6 Mathematics textbook</h5>
                        <div className=" d-block d-sm-none">
                          <h6>₦34,5000</h6>
                        </div>
                        <div className="d-flex my-2">
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                        </div>
                        <div className="d-sm-flex ">                    
                          <div className="mt-2 me-4 mb-2">
                            <button className="cart-btn-increase" onClick={handleDecrease}>-</button>
                            <input className="cart-btn-input" type="number" value={count} readOnly />
                            <button className="cart-btn-increase" onClick={handleIncrease}>+</button>
                          </div>
                          <div>
                            <button className="cart-remove-btn mt-1"><FontAwesomeIcon icon={faTrash}/>  Remove</button>
                          </div>

                          
                        </div>
                      </div>

                      <div className="col-3 d-none d-sm-block">
                        <h6>₦34,5000</h6>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div  className="col-5 col-sm-2">
                        <img src={pic} alt="" width="100%"/>
                      </div>
                      <div className="col-7">
                        <h5>Primary 6 Mathematics textbook</h5>
                        <div className=" d-block d-sm-none">
                          <h6>₦34,5000</h6>
                        </div>
                        <div className="d-flex my-2">
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                          <FontAwesomeIcon className="gold-text" icon={faStar}/> 
                        </div>
                        <div className="d-sm-flex ">                    
                          <div className="mt-2 me-4 mb-2">
                            <button className="cart-btn-increase" onClick={handleDecrease}>-</button>
                            <input className="cart-btn-input" type="number" value={count} readOnly />
                            <button className="cart-btn-increase" onClick={handleIncrease}>+</button>
                          </div>
                          <div>
                            <button className="cart-remove-btn mt-1"><FontAwesomeIcon icon={faTrash}/>  Remove</button>
                          </div>

                          
                        </div>
                      </div>

                      <div className="col-3 d-none d-sm-block">
                        <h6>₦34,5000</h6>
                      </div>
                    </div>

                    

                    
                  </div>

                  <div className="col-md-4">
                    <p className="light-text">Total:</p>
                    <h3>₦34,500</h3>
                    <div className="me-5 pe-3 mb-5">
                      <button className="cart-btn-checkout">Checkout</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>

      </div>

    </div>
  ) 
}
import "../../css/dashboard.css"
import { DashFrame } from "../../component/dashFrame"

export const  PaymentStep1 = () =>{
  return(
    <div>
      <DashFrame />
      <div className="main-content">

        
        <section className="container-lg ">
          <div className="row my-3 pb-4">
            <div className="col-md-8 col-sm-6 col-6">
              <h5>Payment Off Fees</h5>
            </div>
          </div>

          <div className="boxing-shadow pb-4">

            <div className="navyblue-blackground-dash py-4">
              <p className="text-center">PLEASE FILL IN THE REQUIRED DETAILS</p>
            </div>

            <form action="" className="py-5">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="row mx-2 ">
                    <div className="col-md-6 mt-3">
                      <label for="name" className="form-label">Student ID</label>
                      <input type="text" className="form-control  form-dark" id="name" placeholder="SBHSIE32"  autocomplete="off"/>
                    </div>

                    <div className="col-md-6 mt-3">
                      <label for="name" className="form-label">Payments</label>
                      <select id="inputState" className="form-select form-dark">
                        <option selected>...</option>
                        <option>School fees</option>
                        <option>P.T.A bills</option>
                        <option>other bills</option>
                      </select>
                    </div>
            
                    <div className="col-md-6 mt-3">
                      <label for="name" className="form-label">Section</label>
                      <input type="text" className="form-control form-dark" id="name" placeholder="2021/2022" autocomplete="off"/>
                      

                    </div>
            
                    <div className="col-md-6 mt-3">
                      <label for="name" className="form-label">Select term</label>
                      <select id="inputState" className="form-select form-dark">
                        <option selected>...</option>
                        <option>First term</option>
                        <option>Second term</option>
                        <option>Third term</option>
                      </select>
                    </div> 

                    <div className="col-md-6 mt-3">
                      <label for="name" className="form-label">Amount</label>
                      <input type="text" className="form-control  form-dark" id="name" placeholder="30000"  autocomplete="off"/>
                    </div>           
                  </div>
                </div>
              </div>


              <div className="payment-link my-2">
                <a href="#" className="button-dashboard">Submit</a>
              </div>
          
      
            </form>

          </div>
    
        </section>   
      </div>
       
    </div>
        

  )
}
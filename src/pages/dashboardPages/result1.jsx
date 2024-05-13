import { DashFrame } from "../../component/dashFrame"

export const Result1 = () =>{
  return(
    <div>
      <DashFrame />
      <div className="main-content">
        <section className="payment-form container-lg">
          <h4 className="text-center py-3">Check Result</h4>
          <form action="" className="row g-3 justify-content-center">
          <div className="col-md-5">
            <label for="name" className="form-label">Student ID</label>
            <input type="text" className="form-control  form-dark" id="name" placeholder="SBHSIE32"  autocomplete="off"/>
          </div>

          <div className="col-md-5">
            <label for="name" className="form-label">Scratch number</label>
            <input type="text" className="form-control form-dark" id="name" placeholder="234958484948443" autocomplete="off"/>
          </div>
  
          <div className="col-md-5">
            <label for="name" className="form-label">Section</label>
            <input type="text" className="form-control form-dark" id="name" placeholder="2021/2022" autocomplete="off"/>
            

          </div>
  
          <div className="col-md-5">
            <label for="name" className="form-label">Select term</label>
            <select id="inputState" className="form-select form-dark">
              <option selected>...</option>
              <option>First term</option>
              <option>Second term</option>
              <option>Third term</option>
            </select>
          </div>

          <div className="payment-link my-2">
            <a href="#" className="button-dashboard">Submit</a>
          </div>
  
        </form>
  
    
        </section>    
      </div>      
    </div>
  )  
}
import { DashFrame } from "../../component/dashFrame"
import "../../css/dashboard.css"

export const Scheme1 = () =>{
  return(
    <div>
      <DashFrame />
      <div className="main-content">
      <section className="payment-form container-lg">
        <h4 className="text-center py-3">Scheme Off Work</h4>
        <form action="" className="row g-3 justify-content-center">
          <div className="col-md-5">
            <label for="name" className="form-label">Student ID</label>
            <input type="text" className="form-control  form-dark" id="name" placeholder="SBHSIE32"  autocomplete="off"/>
          </div>
  
          <div className="col-md-5">
            <label for="name" className="form-label">class</label>
            <select id="inputState" className="form-select form-dark">
              <option selected>...</option>
              <option>LDC</option>
              <option>Nusery 1</option>
              <option>Nusery 2</option>
              <option>Nusery 3</option>
              <option>Primary 1</option>
              <option>primary 2</option>
              <option>primary 3</option>
              <option>primary 4</option>
              <option>primary 5</option>

            </select>
            

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
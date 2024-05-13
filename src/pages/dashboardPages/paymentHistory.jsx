import { DashFrame } from "../../component/dashFrame"
import "../../css/dashboard.css"

export const PaymentHistory = () =>{
  return(
    <div>
      <DashFrame />
      <div className="main-content">
        
        <section className="payment-history boxing-shadow p-3">
          <p className="pb-5">Payment History</p>
          <div className="table-responsive">
            <table className="table1">
              <thead>
                <tr>
                  <th>Transaction Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>01/02/2002</td>
                  <td>Payment off fees</td>
                  <td><p className="sucessfull">Successful</p></td>
                  <td>$30,000</td>
                  <td><a href="#" className="button boxing-shadow">View</a></td>
                </tr>

    


                <tr>
                  <td>10/04/2005</td>
                  <td>Payment off P.T.A</td>
                  <td><p className="failed">Failed</p></td>
                  <td>$30,000</td>
                  <td><a href="#" className="button boxing-shadow">View</a></td>
                </tr>


                <tr>
                  <td>21/06/2010</td>
                  <td>Payment off fees</td>
                  <td><p className="sucessfull">Successful</p></td>
                  <td>$30,000</td>
                  <td><a href="#" className="button boxing-shadow">View</a></td>                  
                </tr>


                <tr>
                  <td>01/02/2011</td>
                  <td>Payment off fees</td>
                  <td><p className="pending">Pending</p></td>
                  <td>$30,000</td>
                  <td><a href="#" className="button boxing-shadow">View</a></td>
                </tr>

                <tr>
                  <td>01/02/2011</td>
                  <td>Payment off fees</td>
                  <td><p className="sucessfull">Successful</p></td>
                  <td>$30,000</td>
                  <td><a href="#" className="button boxing-shadow">View</a></td>
                </tr>

                <tr>
                  <td>01/02/2011</td>
                  <td>Payment off fees</td>
                  <td><p className="pending">Pending</p></td>
                  <td>$30,000</td>
                  <td><a href="#" className="button boxing-shadow">View</a></td>
                </tr>

                <tr>
                  <td>21/06/2010</td>
                  <td>Payment off fees</td>
                  <td><p className="sucessfull">Successful</p></td>
                  <td>$30,000</td>
                  <td><a href="#" className="button boxing-shadow">View</a></td>                  
                </tr>

                <tr>
                  <td>21/06/2010</td>
                  <td>Payment off fees</td>
                  <td><p className="sucessfull">Successful</p></td>
                  <td>$30,000</td>
                  <td><a href="#" className="button boxing-shadow">View</a></td>                  
                </tr>

                <tr>
                  <td>21/06/2010</td>
                  <td>Payment off fees</td>
                  <td><p className="sucessfull">Successful</p></td>
                  <td>$30,000</td>
                  <td><a href="#" className="button boxing-shadow">View</a></td>                  
                </tr>

                <tr>
                  <td>01/02/2011</td>
                  <td>Payment off fees</td>
                  <td><p className="pending">Pending</p></td>
                  <td>$30,000</td>
                  <td><a href="#" className="button boxing-shadow">View</a></td>
                </tr>

                <tr>
                  <td>01/02/2011</td>
                  <td>Payment off fees</td>
                  <td><p className="pending">Pending</p></td>
                  <td>$30,000</td>
                  <td><a href="#" className="button boxing-shadow">View</a></td>
                </tr>

                <tr>
                  <td>01/02/2011</td>
                  <td>Payment off fees</td>
                  <td><p className="sucessfull">Successful</p></td>
                  <td>$30,000</td>
                  <td><a href="#" className="button boxing-shadow">View</a></td>
                </tr>

                <tr>
                  <td>10/04/2005</td>
                  <td>Payment off P.T.A</td>
                  <td><p className="failed">Failed</p></td>
                  <td>$30,000</td>
                  <td><a href="#" className="button boxing-shadow">View</a></td>
                </tr>

                <tr>
                  <td>10/04/2005</td>
                  <td>Payment off P.T.A</td>
                  <td><p className="failed">Failed</p></td>
                  <td>$30,000</td>
                  <td><a href="#" className="button boxing-shadow">View</a></td>
                </tr>




              </tbody>
            </table>
          </div>

        </section>
      </div>
    </div>
  )
}
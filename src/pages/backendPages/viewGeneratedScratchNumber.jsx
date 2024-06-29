import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pic from "../../img/pexels-andrea-piacquadio-762041 (2).jpg"
import { useState, useEffect, useContext } from "react"
import AuthContext from "../../context/AuthContext"

export const ViewGeneratedScratchNumber = () =>{

  const { authTokens } = useContext(AuthContext)

  const [datas, setdatas] = useState([])
  
  console.log(datas)

  const getNumber = async () => {
    let response = await fetch("https://bdmos.onrender.com/api/scratch_cards/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
    });

    const data = await response.json()

    if (response.ok) {
      const sortedData = data.sort((a, b) => b.id - a.id);
      setdatas(sortedData)
    } else {
      console.error("Failed to fetch events", response.statusText)
    }
  }

  useEffect(() =>{
    getNumber()
  }, [datas])


  const [session, setSessions] = useState("")
	return(
		<div>
      <div className="position-sticky">
        <AdminDashFrame />
      </div>
			<section>
        <div className="main-content">
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>Genrate Scratch Number</h5>
                <p>View all the Scratch Number Generated</p>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin/generateScratchNumber" className="light-navyblue-background p-3 border-radius"><FontAwesomeIcon icon={faUser} className="px-2"/>Generate Scratch</Link>
						  </div>
            </div>



            <section className="container-lg navyblue-blackground-dash">
              <div className="view-content-height scroll-bar">
                <div className="non-wrap-text">
                  <p className=" ps-3 py-2">Recently Added Teacher</p>
                  <table className="table1 ">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Number</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    



                    <tbody className="admin-home-table view-schoolitems-table ">
                    {datas.map((data) =>(
                      <tr>
                        <td>{data.created_at}</td>
                        <td>{data.pin}</td>
                        <td><p to="" className={`generate-number-status  ${data.usage_limit > 0 ? "sucessfull" : "failed"} ${data.usage_limit < 5 && "pending"} `} >{data.usage_limit} trials</p></td>
                      </tr>          
                    ))}

                    </tbody>
                  </table>
                </div>
              </div>


            </section>
          </div>
        </div>
      </section>

      
		</div>
	)
}
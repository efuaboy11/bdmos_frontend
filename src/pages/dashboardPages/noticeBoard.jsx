import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link, useNavigate } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { useForm } from "react-hook-form"
import { CircularProgress } from "@mui/material"
import { DashFrame } from "../../component/dashFrame"

export const NoticeBoard = () =>{
  const {authTokens} = useContext(AuthContext)
  const [datas, setDatas] = useState([])

  const getNotification = async() => {
    let response = await fetch("https://bdmos.onrender.com/api/notifications/",{
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
    });

    const data = await response.json()

    if(response.ok){
      const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setDatas(sortedData)
    }else{
      console.error("Failed to fetch students", response.statusText)
    }
  }

  useEffect(() =>{
    getNotification()

  },[datas])


	return(
		<div>
      <div className="position-sticky">
        <DashFrame />
      </div>
			<section>
        <div className="main-content">
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>NOTICE BOARD</h5>
                <p>View all our notification</p>
              </div>
            </div>
        
          </div>

          <section className="container-lg">
            <div className="notification-container">
              <div>
                {datas.map((data) =>(
                  <div className="py-3 px-2 notification-sub-container">
                    <strong>Posted on {data.date}</strong>
                    <br />
                    <strong>By: {data.teachers_name.first_name} {data.teachers_name.last_name}</strong>
                    <br />
                    <br />
                    <p>{data.message}</p>
                  </div>
                ))}

                
              </div>
            </div>

          </section>
        </div>

      </section>
		</div>
	)
}
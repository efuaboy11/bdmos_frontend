import "aos/dist/aos.css"
import "../css/style.css"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navbar } from "../component/navbar"
import { Footer } from "../component/footer"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import chess1 from '../img/chess8.JPG'
import outdoor from '../img/outdoor17.JPG'
import playground1 from "../img/playground7.JPG"
import scrable1 from "../img/scrable3.JPG"
import swing1 from "../img/swing11.JPG"
import engine1 from "../img/engineeringWorkshop3.JPG"
import farm1 from "../img/farm2.JPG"
import uniform1 from '../img/uniform6.JPG'
import sport14 from "../img/sport1.JPG"
import outdoor2 from "../img/outdoor22.JPG"
import playground3 from "../img/playground2.JPG"
import pic from "../img/pic6.jpg"
import { useState, useEffect, useContext } from "react"
import AuthContext from "../context/AuthContext"


export const Gallery = () =>{
  const location = useLocation();
  const [datas, setdatas] = useState([])
  const {authTokens} = useContext(AuthContext)
  const isActive = (path) =>{
    return location.pathname === path

  }

  const getPicture = async() => {
    let response = await fetch("https://bdmos.onrender.com/api/school_photos/",{
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
    });

    const data = await response.json()

    if(response.ok){
      setdatas(data)
    }else{
      console.error("Failed to fetch students", response.statusText)
    }
  }

  useEffect(() =>{
    getPicture()
  },[datas])
  return(
    <div>
      <Navbar/>
      <section id="heading" className="light-background2 mt-5">
        <div className="container-lg">
          <div className="d-md-flex d-inline justify-content-between">
            <div>
              <h1 className="ml-text fw-bold dark-font">School <span className="text-secondary1"> Gallery</span></h1>
            </div>

            <div className="d-lg-flex justify-content-between texts">
              <Link to='/' className="px-4">Home</Link>
              <FontAwesomeIcon className="d-none d-md-block pt-2" icon={faAngleRight} color="black"/>
              <p className="text-secondary1 px-4 d-none d-md-block">Gallery</p>           
            </div>
          </div>      
        </div>

      </section>  

      <section className="container-lg py-5 my-5">
        <div className="row py-5">
          <div className="col-xxl-12">
            <div className="row g-4">
              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={chess1} alt="" width='100%'/>
                  <div className="dark-background p-2">
                    <p>Pupils playing chess </p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={outdoor} alt="" width='100%'/>
                  <div className="dark-background p-2">
                    <p>Outdoor Activities</p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={playground1} alt="" width='100%'/>
                  <div className="dark-background p-2">
                    <p>Pupils play Ground</p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={scrable1} alt="" width='100%' height='240px'/>
                  <div className="dark-background p-2">
                    <p>Pupils playing Scrable </p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={swing1} alt="" width='100%' height='240px'/>
                  <div className="dark-background p-2">
                    <p>Pupils play Ground </p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={engine1} alt="" width='100%' height='240px'/>
                  <div className="dark-background p-2">
                    <p>Pupils exploring enginerring </p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={farm1} alt="" width='100%' height='240px'/>
                  <div className="dark-background p-2"> 
                    <p>Pupils exploring farm activity </p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={sport14} alt="" width='100%' height='240px'/>
                  <div className="dark-background p-2">
                    <p>Sport days at BDOMS</p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={outdoor2} alt="" width='100%' height='240px'/>
                  <div className="dark-background p-2">
                    <p>Outdoors activities at BDOMS </p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={uniform1} alt="" width='100%' height='240px'/>
                  <div className="dark-background p-2">
                    <p>BDOMS pupils </p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={playground3} alt="" width='100%' height='240px'/>
                  <div className="dark-background p-2">
                    <p>BDOMS play ground</p>
                  </div>                 
                </div>
              </div>

              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div>
                  <img src={pic} alt="" width='100%' height='240px'/>
                  <div className="dark-background p-2">
                    <p>Pupils exploring farm activity </p>
                  </div>                 
                </div>
              </div>

              {datas.map((data) =>(
                <div className="col-xxl-3 col-lg-4 col-sm-6">
                  <div>
                    <img src={data.image} alt="" width='100%' height='240px'/>
                    <div className="dark-background p-2">
                      <p>{data.discription}</p>
                    </div>                 
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
      
  )
}
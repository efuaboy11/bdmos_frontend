import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import pic1 from "../img/outdoor32.JPG"
import { useState, useEffect, useContext } from "react"
import AuthContext from "../context/AuthContext"
export const Blog = () =>{
	const location = useLocation();
	const isActive = (path) =>{
		return location.pathname === path

	}
  const { authTokens } = useContext(AuthContext)
  const [eventDatas, setEventDatas] = useState([])

  const getEvent = async () => {
    let response = await fetch("https://bdmos.onrender.com/api/events/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`
      },
    });

    const data = await response.json()

    if (response.ok) {
      const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setEventDatas(sortedData)
    } else {
      console.error("Failed to fetch events", response.statusText)
    }
  }

  useEffect(() => {
    getEvent()


  }, [eventDatas])
	return(
		<div>
			<Navbar />
      <section>
        <section id="heading" className="light-background2 mt-5 mb-5">
          <div className="container-lg">
            <div className="d-md-flex d-inline justify-content-between">
              <div>
                <h1 className="ml-text fw-bold dark-font"><span className="text-secondary1">Blog</span></h1>
              </div>

              <div className="d-lg-flex justify-content-between texts">
                <a href="./index.html" className="px-4">Home</a>
                <p className="text-secondary1 px-4 d-none d-md-block">Event</p>
                
              </div>
            </div>      
          </div>
        </section>
        <section className="container-lg py-5 my-5">
          <div>
            <h5 className="pb-4">Our Recent Post</h5>

            <section className="pb-5">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="row g-3">
                    {eventDatas?.map((eventData) =>(
                      <div className="col-xxl-3 col-lg-4 col-sm-6">
                      <div className="light-background2 p-4 blog-container">
                        <img src={eventData.image} alt="" width='100%'/>
                        <div className="d-flex pt-3">
                          <p className="bg-purple event-date">{eventData.date}</p>
                        </div>
                        <div className="scroll-bar-black-y blog-text">
                          <p>{eventData.description}</p>

                        </div>
                      </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        
        <Footer />
      </section>

		</div>
			
  )
}
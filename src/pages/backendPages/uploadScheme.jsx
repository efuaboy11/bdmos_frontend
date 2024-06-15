import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"

export const UploadScheme = () =>{
  const {authTokens,
    className,
    setClassName,
    term,
    setTerm,
    session,
    setSession,
    classe,
    setClasse,
    terms,
    setTerms,
    sessions,
    setSessions,
    date,
    setDate} = useContext(AuthContext)

  const getClass = async () => {
    try {
      let response = await fetch("https://bdmos.onrender.com/api/class/", {
        method: "GET",
        headers: {
          "Content-Type":"application",
          Authorization: `Bearer ${authTokens.access}`
        }
      })
  
      const data = await response.json()
  
      if(response.ok){
        setClassName(data)
        console.log("Class Gotten Successfully")
      } else{
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getTerm = async () => {
    try {
      let response = await fetch("https://bdmos.onrender.com/api/terms/", {
        method: "GET",
        headers: {
          "Content-Type":"application"
        }
      })
  
      const data = await response.json()
  
      if(response.ok){
        setTerm(data)
        console.log("Term Gotten Successfully")
      } else{
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getSession = async () => {
    try {
      let response = await fetch("https://bdmos.onrender.com/api/sessions/", {
        method: "GET",
        headers: {
          "Content-Type":"application"
        }
      })
  
      const data = await response.json()
  
      if(response.ok){
        setSession(data)
        console.log("Session Gotten Successfully")
      } else{
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getClass()
    getTerm()
    getSession()
  },[])

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
                <h5>Upload Scheme</h5>
              </div>
              <div className="col-md-4 col-sm-6 col-6 d-flex justify-content-end">
							  <Link to="/admin" >Dashboard /  </Link>
                <Link to='/admin/ViewSchemeUploads'>View Scheme Uploaded</Link>
						  </div>
            </div>

            <section>
              <div className="boxing-shadow">
                <div className="navyblue-blackground-dash py-4">
                  <p className="text-center">PLEASE FILL IN THE REQUIRED DETAILS</p>
                </div>

               <form action="">
                  <div className="row  mx-2">
                      <div className="col-md-6 mt-3">
                        <label htmlFor="" className="form-label">Class</label>
                        <select className="form-select form-control compulsory form-dark" value={classe} onChange={(e) => setClasse(e.target.value)}>
                          <option>...</option>
                          {className && className.map((classe) =>(
                            <option value={classe.id} key={classe.id}>{classe.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6 mt-3">
                        <label htmlFor="" className="form-label">Term</label>
                        <select className="form-select form-control compulsory form-dark" value={terms} onChange={(e) => setTerms(e.target.value)}>
                          <option>...</option>
                          {term && term.map((term) =>(
                            <option value={term.id} key={term.id}>{term.name}</option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-6 mt-3">
                        <label htmlFor="" className="form-label">Session</label>
                        <select className="form-select form-control compulsory form-dark" value={sessions} onChange={(e) => setSessions(e.target.value)}>
                          <option>...</option>
                          {session && session.map((session) =>(
                            <option value={session.id} key={session.id}>{session.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6 mt-3">
                        <label htmlFor="" className="form-label">Date</label>
                        <input className="admin-input form-dark py-2 px-3" type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                      </div>
                      <div className="col-md-10 pt-3 pb-5 mb-4">
                        <Link to="/admin/uploadSchemePage" className="admin-btn py-2 px-5">Submit</Link>
                        
                      </div>
                  </div>

               </form>

              </div>
            </section>


        
          </div>
        </div>

      </section>
		</div>
	)
}
import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link, useNavigate } from "react-router-dom"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { useForm } from "react-hook-form"
import { CircularProgress } from "@mui/material"
import { DashFrame } from "../../component/dashFrame"

export const Result1 = () =>{
  const [scratchPin, setScratchPin] = useState("")
  const [loading, setLoading] = useState(false)

  const {handleSubmit, register, formState:{errors, isValid}} = useForm()

  const navigate = useNavigate()

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
    studentID,
    setStudentID,
    setAllResults} = useContext(AuthContext)

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

  const checkResult = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      let response = await fetch("https://bdmos.onrender.com/api/check_result/",{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          username: studentID,
          pin: scratchPin,
          class: classe,
          session: sessions,
          term: terms
        })
      })
  
      const data = await response.json()
  
      if(response.ok){
        setAllResults(data)
        navigate("/checkResult")
        console.log(data)
      } else{
        alert(data.error)
      }
    } catch (error) {
      console.log("Error", error)
    } finally{
      setLoading(false)
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
        <DashFrame />
      </div>
			<section>
        <div className="main-content">
          <div className="container-lg">
            <div className="row my-3 pb-4">
              <div className="col-md-8 col-sm-6 col-6">
                <h5>STUDENT DATABASE</h5>
                <p>View Your Result</p>
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
                        <label htmlFor="" className="form-label">Student Username</label>
                        <input type="text" className=" admin-input form-control compulsory form-dark py-2 px-3"  placeholder="Student Username..." value={studentID} onChange={(e) => setStudentID(e.target.value)}/>
                     </div>

                      <div className="col-md-6 mt-3">
                        <label htmlFor="" className="form-label">Scratch Pin</label>
                        <input type="text" className=" admin-input form-control compulsory form-dark py-2 px-3"  placeholder="Scratch Pin..." value={scratchPin} onChange={(e) => setScratchPin(e.target.value)}/>
                     </div>
                      
                      <div  className="col-md-6 mt-3">
                        <label htmlFor="" className="form-label">Term</label>
                        <select id="inputSex" className="form-select form-control compulsory form-dark admin-input  py-2 px-3 " value={terms} onChange={(e) => setTerms(e.target.value)}>
                          <option value=""></option>
                          {term && term.map((term) =>(
                            <option value={term.id} key={term.id}>{term.name}</option>
                          ))}
                          </select>
                      </div>

                      <div  className="col-md-6 mt-3">
                        <label htmlFor="" className="form-label">Session</label>
                        <select id="inputSex" className="form-select form-control compulsory form-dark admin-input  py-2 px-3 " value={sessions} onChange={(e) => setSessions(e.target.value)}>
                          <option value=""></option>
                          {session && session.map((session) =>(
                            <option value={session.id} key={session.id}>{session.name}</option>
                          ))}
                        </select>
                      </div>

                      <div  className="col-md-6 mt-3">
                        <label htmlFor="" className="form-label">Class</label>
                        <select id="inputSex" className="form-select form-control compulsory form-dark admin-input  py-2 px-3 " value={classe} onChange={(e) => setClasse(e.target.value)}>
                          <option value=""></option>
                          {className && className.map((classe) =>(
                            <option value={classe.id} key={classe.id}>{classe.name}</option>
                          ))}
                          </select>
                      </div>

                      <div className="col-md-10 pt-3 pb-5 mb-4">
                        <button type="submit" className="admin-btn py-2 px-5" onClick={checkResult}>
                          {loading ? (
                            <CircularProgress color="inherit" size="20px"/>
                          ) : "Submit"}
                        </button>
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
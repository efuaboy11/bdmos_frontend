import { DashFrame } from "../../component/dashFrame"
import "../../css/dashboard.css"
import { useState, useContext, useEffect } from "react"
import React from 'react'
import { useForm } from "react-hook-form"
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext"
import { Link, useNavigate } from "react-router-dom";

export const Scheme1 = () =>{

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const {authTokens,
    term,
    setTerm,
    session,
    setSession,
    sessions,
    setSessions,
    terms,
    setTerms,
    className,
    setClassName,
    allScheme, 
    setAllScheme,
    classe,
  setClasse,} = useContext(AuthContext)

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

  const checkScheme = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      let response = await fetch(`https://bdmos.onrender.com/api/check_scheme/?student_class=${classe}&session=${sessions}&term=${terms}`,{
        method: "GET",
        headers:{
          "Content-Type":"application/json"
        },

      })
  
      const data = await response.json()

      localStorage.setItem("clientSchemeData", JSON.stringify(data));

  
      if(response.ok){      
        setAllScheme(data)
        console.log(allScheme)
        navigate("/schemePage")
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


  
  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [loader, setLoader] = useState("")
  const [disablebutton, setdisablebutton] = useState(false)
  return(
    <div>
      <DashFrame />
      <div className="main-content">
      <section className="payment-form container-lg">
        <section className="boxing-shadow">
          <div>
            <div className="navyblue-blackground-dash py-4">
              <p className="text-center">PLEASE FILL IN THE REQUIRED DETAILS</p>
            </div>
          </div>

          <form>
            <div className="row mx-2">
              <div className="col-md-6">
                <label for="name" className="form-label">Session</label>
                <select id="inputSex" className="form-select form-control compulsory form-dark admin-input  py-2 px-3 " value={sessions} onChange={(e) => setSessions(e.target.value)}>
                  <option value=""></option>
                  {session && session.map((session) =>(
                    <option value={session.id} key={session.id}>{session.name}</option>
                  ))}
                  </select>
                

              </div>
      
              <div className="col-md-6">
                <label for="name" className="form-label">class</label>
                <select id="inputSex" className="form-select form-control compulsory form-dark admin-input  py-2 px-3 " value={classe} onChange={(e) => setClasse(e.target.value)}>
                  <option value=""></option>
                  {className && className.map((classe) =>(
                    <option value={classe.id} key={classe.id}>{classe.name}</option>
                  ))}
                  </select>
                

              </div>
      
              <div className="col-md-6">
                <label for="name" className="form-label">Select term</label>
                <select id="inputSex" className="form-select form-control compulsory form-dark admin-input  py-2 px-3 " value={terms} onChange={(e) => setTerms(e.target.value)}>
                  <option value=""></option>
                  {term && term.map((term) =>(
                    <option value={term.id} key={term.id}>{term.name}</option>
                  ))}
                  </select>
              </div>

              <div className="col-md-10 pt-3 pb-5 mb-4">
                <button type="submit" className="admin-btn py-2 px-5" onClick={checkScheme}>
                  {loading ? (
                    <CircularProgress color="inherit" size="20px"/>
                  ) : "Submit"}
                </button>
              </div>
            </div>

  
          </form>
        </section>

  
      </section>    
    </div>
    </div>
  )
}
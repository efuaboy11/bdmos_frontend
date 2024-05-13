import "aos/dist/aos.css"
import "../css/style.css"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navbar } from "../component/navbar"
import { useState } from "react"
import React from "react"
import {useForm} from "react-hook-form"

export const Application = () =>{

  const [firstName, setFirstName] = useState("")



  const {handleSubmit, register, formState:{errors, isValid}} = useForm()

  const onSubmit = (data) =>{
    if (isValid){
      try{
        console.log(data);

      }catch (error){
        console.error('Failed to submit', error)
      }
    }

  }
  return(
    <div>


    <section id="form">
        <div className="container-lg py-5 boxing-shadow my-5">
          <p className="fw-bold">instruction: Please try to fill up the form</p>
          <div>
            <form className="row g-3" onSubmit={handleSubmit(onsubmit)}>
              <div className="col-md-6">
                <label for="name" className="form-label">First Name</label>
                <input type="text" className="form-control compulsory" id="name" placeholder="e.g John"{...register('firstname', {required: true})} value={firstName} onChange={(e) => setFirstName(e.target.value.toLowerCase())}/>
                {errors.firstname && <span style={{ color: 'red' }}>First Name is required</span>}

              </div>
              

              <div className="col-12">
                <button type="submit" className="btn btn-lg primary-background app-btn">Submit</button>
              </div>
            </form>


          </div>
        </div>
      </section>  
    </div>
      
      
  )
}
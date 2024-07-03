import { AdminDashFrame} from "../../component/adminDashFRame"
import { Link } from "react-router-dom"
import {faPlus, faPlusCircle, faTrash, faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useContext, useEffect } from "react"
import Alert from '@mui/material/Alert';
import React from 'react'
import { DashFrame } from "../../component/dashFrame"
import AuthContext from "../../context/AuthContext"


export const MakePaymentPage = () => {
  const {makePaymentDetails} = useContext(AuthContext)
  const [disablebutton, setdisablebutton] = useState(false)
  console.log(makePaymentDetails)
	return(
		<div>
      <div className="position-sticky">
      <div  className="position-sticky">
        <DashFrame />
      </div>
      </div>
			<section>
        <div className="main-content">
          <div className="make-payment-link-container">
            <div>
              <div className="text-center">
                <p>CLICK ON THIS LINK TO CONTINUE PAYMENT</p>
                <div>
                  <a target="_blank" href={makePaymentDetails.link} className="make-payment-link">{makePaymentDetails.link}</a>
                </div>
              </div>


            </div>
          </div>


          
        </div>

      </section>
		</div>
	)
}
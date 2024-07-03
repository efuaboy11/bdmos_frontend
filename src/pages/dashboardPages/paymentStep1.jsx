import "../../css/dashboard.css"
import { DashFrame } from "../../component/dashFrame"
import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import AuthContext from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { LoadingSpiner } from "../../component/spin"


export const  PaymentStep1 = () =>{
  const {authTokens, setMakePaymentDetails} = useContext(AuthContext)
  const navigate = useNavigate()


  const {handleSubmit, register, formState:{errors, isValid}} = useForm()
  const [paymentType, setPaymentType] = useState('')
  const [session, setSession] = useState("")
  const [term, setTerm] = useState("")
  const [amount, setAmount] = useState("")

  const [termData, setTermData] = useState([]) 
  const[sessionData, setSessionData] = useState([])
  const [paymentData, setPaymentData] = useState([])

  const [loader, setLoader] = useState(false)

  const getTerm = async () => {
    try {
      let response = await fetch("https://bdmos.onrender.com/api/terms/", {
        method: "GET",
        headers: {
          "Content-Type":"application",
          Authorization: `Bearer ${authTokens.access}`
        }
      })
  
      const data = await response.json()

  
      if(response.ok){
        setTermData(data)
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
          "Content-Type":"application",
          Authorization: `Bearer ${authTokens.access}`
        }
      })
  
      const data = await response.json()
  
      if(response.ok){
        setSessionData(data)
        console.log("Session Gotten Successfully")
      } else{
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getPaymentType = async () => {
    try {
      let response = await fetch("https://bdmos.onrender.com/api/bills/", {
        method: "GET",
        headers: {
          "Content-Type":"application",
          Authorization: `Bearer ${authTokens.access}`
        }
      })
  
      const data = await response.json()
  
      if(response.ok){
        setPaymentData(data)
        console.log("Payment Type Gotten Successfully")
      } else{
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = (data, e) =>{
    e.preventDefault()
    setLoader(true)
    if(isValid){
    
      console.log(data)
      makePayment(e)
    }else{
      console.log('error')
    }
  }


  const makePayment = async(e) =>{
    e.preventDefault()

    const formData = new FormData()
    formData.append('fee_type', paymentType);
    formData.append('amount', amount);
    formData.append('session', session);
    formData.append('term', term)
    console.log(formData)

    try{
      const response = await fetch('https://bdmos.onrender.com/api/payments/',{
        method: 'POST',
        body: formData,
        headers:{
          Authorization: `Bearer ${authTokens.access}`
        }
      })

      const data = await response.json();
      setMakePaymentDetails(data)
      console.log(data)
      if(response.status === 201){
        console.log('sucess')
        navigate("/makePaymentPage")
        setLoader(false)

      }else{
        const errorData = await response.json()
        const errorMessage = errorData.error
        setLoader(false)
      }
    }catch (error){
      console.log(error)
    }

  }

  useEffect(() => {
    getPaymentType()
    getTerm()
    getSession()
  },[])






  return(
    <div>
      <div  className="position-sticky">
        <DashFrame />
      </div>
      <div className="main-content">

         {loader &&
            < LoadingSpiner/>
          } 

        
        <section className="container-lg ">
          <div className="row my-3 pb-4">
            <div className="col-md-8 col-sm-6 col-6">
              <h5>Payment Off Fees</h5>
            </div>
          </div>

          <div className="boxing-shadow pb-4">

            <div className="navyblue-blackground-dash py-4">
              <p className="text-center">PLEASE FILL IN THE REQUIRED DETAILS</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="py-5">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="row mx-2 ">
                    <div className="col-md-6 mt-3">
                      <label for="name" className="form-label">Payment Types</label>
                      <select id="inputState" className={`admin-input ${errors.payment ? 'error-input' : ''} form-control compulsory form-dark form-select`} {...register('payment', {required: true})}  value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
                        <option selected></option>
                        {paymentData.map((data) =>(
                          <option value={data.id}>{data.name}</option>
                        ))}
                      </select>
                      {errors.payment && <span style={{color: 'red'}}>This Feild is required</span>} 
                    </div>
            
                    <div className="col-md-6 mt-3">
                      <label for="name" className="form-label">Session</label>
                      <select type="text" className={`admin-input ${errors.session ? 'error-input' : ''} form-control compulsory form-dark form-select`} {...register('session', {required: true})}  value={session} onChange={(e) => setSession(e.target.value)} id="name" placeholder="2021/2022">
                        <option></option>
                        {sessionData.map((data) =>(
                          <option value={data.id}>{data.name}</option>
                        ))}

                      </select>
                      {errors.session && <span style={{color: 'red'}}>This Feild is required</span>} 
  
                    </div>
            
                    <div className="col-md-6 mt-3">
                      <label for="name" className="form-label">Select term</label>
                      <select id="inputState" className={` ${errors.term ? 'error-input' : ''} form-control compulsory form-dark form-select`} {...register('term', {required: true})}  value={term} onChange={(e) => setTerm(e.target.value)}>
                        <option selected></option>
                        {termData.map((data) =>(
                          <option value={data.id}>{data.name}</option>
                        ))}
                      </select>
                      {errors.term && <span style={{color: 'red'}}>This Feild is required</span>} 
                    </div> 

                    <div className="col-md-6 mt-3">
                      <label for="name" className="form-label">Amount</label>
                      <input type="text" className={` ${errors.amount ? 'error-input' : ''} form-control compulsory form-dark`} {...register('amount', {required: true})}  value={amount} onChange={(e) => setAmount(e.target.value)} id="name" placeholder="30000"/>
                      {errors.amount && <span style={{color: 'red'}}>This Feild is required</span>} 
                    </div>           
                  </div>
                </div>
              </div>


              <div className="payment-link my-2">
                <button type="submit" color="white" className="button-dashboard">Submit</button>
              </div>
          
      
            </form>

          </div>
    
        </section>   
      </div>
       
    </div>
        

  )
}
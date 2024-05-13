import "../css/style.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import CircularProgress from '@mui/material/CircularProgress';

export const Portal = () =>{
  const {username, password, setUsername, setPassword, loginUser, loading} = useContext(AuthContext)
  
 
  return(
    <div>
      <section id="portal">
        <div className="portal-background-img">
          <div className="container-sm">
            <div className="row">
              <div className="col-xxl-12">
                <div className="row align-items-center ">
                  <div className="col-lg-7 d-none d-lg-block">
                    <div className="portal-text mx-3">
                      <h1>BABY'S DAYOUT / FREDITA CHILDREN ACADEMY</h1>
                      <h4 className="text-muted">School Data Management System.</h4>
                      <h4 className="text-muted">Managing Student record.</h4>
                    </div>
                  </div>

                  <div className="col-lg-5 row mt-5 ">
                    <div className="portal-form  forms">
                      <h1 className="pb-5 text-primary1 sign-in-text ps-3">Sign In</h1>
                      <form action="" className="m-3">
                        <div className="form-input">
                          <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="portal-input-password">
                          <input type="password" id="password" placeholder="Password" className="password-input" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        
                        <div className="my-5 py-5" onClick={loginUser}>
                          <p className="btn btn-lg primary-background app-btn">{loading ? <CircularProgress color="inherit"/> : "Login"}</p>
                        </div>
                      </form>
                      <p className="p-3">Proudly developed by <a href="#">Ehiz</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" portal-content">

    

            </div>
          </div>
          

        </div>
      </section>

    </div>
      
  )
}
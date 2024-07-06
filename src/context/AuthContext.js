import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({children}) => {
    const [authTokens, setAuthToken] = useState(() => localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null)

    const [user, setUser] = useState(() => localStorage.getItem("authTokens") ? jwtDecode(localStorage.getItem("authTokens")) : null)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const [details, setDetails] = useState()

    const [className, setClassName] = useState([])
    const [term, setTerm] = useState([])
    const [session, setSession] = useState([])

    const [classe, setClasse] = useState("")
    const [terms, setTerms] = useState("")
    const [sessions, setSessions] = useState("")

    const [date, setDate] = useState("")
    const [studentID, setStudentID] = useState("")
    const [resultStudent, setResultStudent] = useState()
    const [scratchCards, setScratchCard] = useState([])
    const [allResults, setAllResults] = useState([])

    const [allScheme, setAllScheme] = useState([])

    const [loadingModal, setLoadingModal] = useState(false)

    const [makePaymentDetails, setMakePaymentDetails] = useState([])

    const [disablebutton, setdisablebutton] = useState(false)
    
    const [userProfile, setUserProfile] = useState([])
    console.log(userProfile)
    console.log(user)

    const navigate = useNavigate()

    const userDetails = async () => {
        try {
          const response = await fetch(
            `https://bdmos.onrender.com/api/user_profile/${user?.profile_id}/`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
    
          if (response.status === 200) {
            setUserProfile(data);
          } else {
            console.error("Failed to fetch user details:", response.statusText);
          }
        } catch (error) {
          console.log(error);
       }
    
    }


    const loginUser = async (e) => {
        e.preventDefault()
        setLoading(true)
        setdisablebutton(true)

        try {
            let response = await fetch("https://bdmos.onrender.com/api/signin/", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })

            const data = await response.json()
    
            if(response.status === 200){
                setAuthToken(data)
                setUser(jwtDecode(data.access))
                localStorage.setItem("authTokens", JSON.stringify(data))
                setLoading(false)
                setdisablebutton(false)
    
                if(data.role === "ADMIN"){
                    navigate("/admin")
                }else{
                    navigate("/dashboard")
                }
            }else{
                console.log(data)
                if(!username){
                    alert(data.username)
                } else{
                    alert(data.password)
                }
            }
            
        } catch (error) {
            console.log("Error", error)
        } finally{
            setLoading(false)
        }
    }

    const logoutUser = () => {
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem("authTokens")
        navigate("/")
    }

    const updateToken = async () => {
        let response = await fetch("https://bdmos.onrender.com/api/token/refresh/",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({refresh: authTokens?.refresh})
        })
        const data = await response.json()

        if(response.status === 200){
            setAuthToken(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem("authTokens", JSON.stringify(data))
        } else{
            logoutUser()
        }
    }

    useEffect(() => {
        const mins = 1000 * 60 * 9
        const interval = setInterval(() => {
            if(authTokens){
                updateToken()
            }
        }, mins)

        return () => clearInterval(interval)
    }, [authTokens])

    useEffect(() =>{
        userDetails()
        

    }, [userProfile])

    const contextData = {
        loadingModal, 
        setLoadingModal,
        user,
        authTokens,
        password,
        username,
        setUsername,
        setPassword,
        loading,
        loginUser,
        logoutUser,
        details,
        setDetails,
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
        setDate,
        studentID,
        setStudentID,
        resultStudent,
        setResultStudent,
        scratchCards,
        setScratchCard,
        allResults,
        setAllResults,
        allScheme, 
        setAllScheme,
        makePaymentDetails, 
        setMakePaymentDetails
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
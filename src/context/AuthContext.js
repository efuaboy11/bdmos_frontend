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

    console.log(details)

    const navigate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault()
        if(loading){
            setLoading(false)
        }else{
            setLoading(true)
        }

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

            if(data.role === "ADMIN"){
                navigate("/admin")
            }else{
                navigate("/dashboard")
            }
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

    const contextData = {
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
        setDate
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
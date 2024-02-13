import { useState, useContext } from "react"
import UserContext from "../context/userContext"

const Login = () => {
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({name,password})
    }
    return (
        <>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login
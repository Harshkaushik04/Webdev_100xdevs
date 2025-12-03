import './css/signup.css'
import {useState,useRef} from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function Login(){
    let username_ref=useRef();
    let password_ref=useRef();
    const [errorLine,setErrorLine]=useState();
    const navigate=useNavigate();
    async function handleSubmit(){
        const res=await axios.post("/api/login",{
            username:username_ref.current.value,
            password:password_ref.current.value
        })
        if(res.data.validUser){
            localStorage.setItem("token",res.data.token);
            navigate("/home");
        }
        else setErrorLine("Invalid credentials");
    }
    return(
        <div className="whole">
            <div>LOGIN IN</div>
            <div>
                <input ref={username_ref} className="username" placeholder="username"/>
            </div>
            <div>
                <input ref={password_ref} className="password" placeholder="password"/>
            </div>
            <div>
                <button onClick={handleSubmit}>SUBMIT</button>
            </div>
            <div>{errorLine}</div>
        </div>
    )
}

export default Login
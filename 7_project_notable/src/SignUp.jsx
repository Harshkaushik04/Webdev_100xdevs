import './css/signup.css'
import {useState,useEffect,useRef} from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios"
function SignUp(){
    let username_ref=useRef();
    let password_ref=useRef();
    let [errorLine,setErrorLine]=useState();
    const navigate=useNavigate();
    async function handleSubmit(){
        const res=await axios.post("/api/signup",{
            username:username_ref.current.value,
            password:password_ref.current.value
        }); 
        if(res.data.alreadyUser){
            setErrorLine("User already signed up");
        }
        else navigate("/login");
    }
    return(
        <div className="whole">
            <div>SIGN UP</div>
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

export default SignUp
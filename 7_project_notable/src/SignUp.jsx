import './css/signup.css'
import {useState,useEffect,useRef,useNavigate} from "react"
import axios from "axios"
function SignUp(){
    let username_ref=useRef();
    let password_ref=useRef();
    let [username,setUsername]=useState();
    let [password,setPassword]=useState();
    let [errorLine,setErrorLine]=useState();
    const navigate=useNavigate();
    function handleSubmit(){
        setUsername(username_ref.current.value);
        setPassword(password_ref.current.value);
        useEffect(async ()=>{
            const res=await axios.post("/api/signup",{
                username:username,
                password:password
            }); 
            if(res.data.alreadyUser){
                setErrorLine("User already signed up");
            }
            else navigate("/home");
        },[])
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
                <button onclick={handleSubmit}>SUBMIT</button>
            </div>
            <div>{errorLine}</div>
        </div>
    )
}

export default SignUp
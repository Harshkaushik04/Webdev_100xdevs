import "./css/Landing.css"
import {useNavigate} from "react-router-dom"
function Landing(){
    const navigate=useNavigate();
    function goToLogin(){
        navigate("/login");
    }
    function goToSignUp(){
        navigate("/signup");
    }
    return(
        <div>
            <div>
                <div className="top-bar">
                <button className="button1 right" onClick={goToLogin}>Login</button>
                <button className="button1" onClick={goToSignUp}>Signup</button>
            </div>
            <div className="main-body">
                    <div className="main-name">NOTABLE</div>      
                    <div className="quote">"The gods write stars across the night,<br/>
We write thoughts across a page.<br/>
Both are maps against forgetting,<br/>
Both outlive their age."</div>
            </div>
            </div>
        </div>
    )
}

export default Landing
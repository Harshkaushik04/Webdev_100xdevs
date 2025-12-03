import './css/ViewNote.css'
import { useState,useRef } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from "axios"

function ViewNote(){
    const location=useLocation();
    const navigate=useNavigate();
    const {description,index}=location.state;
    const [actualDescription,setActualDescription]=useState(description);
    const [update,setUpdate]=useState(false);
    const updatableDescriptionRef=useRef();
    async function completedUpdate(){
        const res=await axios.post("/api/update-note",{
            description:updatableDescriptionRef.current.value,
            index:index
        },
    {
        headers:{
            token:localStorage.getItem("token")
        }
    })
        if(!res.data.validUser) navigate("/login");
        setActualDescription(updatableDescriptionRef.current.value);
        setUpdate(false);
    }
    function backButton(){
        if(update) setUpdate(false);
        else navigate("/home");
    }

    return(<div className="whole">
        {update?<textarea ref={updatableDescriptionRef} defaultValue={actualDescription}></textarea>:<div>{actualDescription}</div>}
        <div><button onClick={()=>{backButton()}}>Back</button>
        {update?null:<button onClick={()=>{setUpdate(true)}}>Update</button>}</div>
        {update?<button onClick={()=>{completedUpdate()}}>complete the update</button>:null}
    </div>)
}

export default ViewNote;
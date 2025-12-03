import {useState,useEffect,useRef} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import './css/Note.css'

function Note(){
    let title_ref=useRef();
    let note_ref=useRef();
    let navigate=useNavigate();
    async function submitNote(){
        const title=title_ref.current.value;
        const description=note_ref.current.value;
        const res=await axios.post("/api/submit-note",{
            title:title,
            description:description
        },{
            headers:{token:localStorage.getItem("token")}
        });
        if(res.data.validUser) navigate("/home");
        else navigate("/login");
    }
    return(
        <div className="whole">
            <div>
                NOTE:
            </div>
            <div>
                Title:<input ref={title_ref} placeholder="title"/>
            </div>
            <div>
                Note:<input ref={note_ref} placeholder="input"/>
            </div>
            <div>
                <button onClick={submitNote}>Submit</button>
            </div>
        </div>
    )
}

export default Note
import {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import './css/Home.css'

function Home(){
    const [noteTitles,setNoteTitles]=useState([]); //[index,title]
    const navigate=useNavigate();
    async function fetchTitles(){
        const res=await axios.get("/api/get-titles",{
            headers:{
            token:localStorage.getItem("token")
        }}); //validUser,titles
        if(res.data.validUser){
            setNoteTitles(res.data.titles);
            // console.log(`notes length:${noteTitles.length}`)
        }
        else navigate("/login");
    }

    function createNote(){
        navigate("/note");
    }
    async function handleView(index){
        const res=await axios.get("/api/get-description",{
            headers:{
                token:localStorage.getItem("token")
            },
            params:{
                index:index
            }
        }) //validUser,description
        if(res.data.validUser){
            navigate("/view-note",{
                state:{
                    description:res.data.description,
                    index:index
                }
            })
        }
        else navigate("/login")  
    }
    async function handleDelete(index,arrIndex){
        const res=await axios.delete("/api/delete-note",{
            params:{
                index:index
            },
            headers:{
                token:localStorage.getItem("token")
            }
        })
        if(!res.data.validUser) navigate("/login");
        else{
            setNoteTitles((prev)=>{
                let copy=[...prev];
                copy.splice(arrIndex,1);
                return copy;
            })
        } 
    }

    useEffect(()=>{fetchTitles()},[])
    return(
        <div className="whole">
            <div>NOTES:</div>
            {noteTitles.length!=0 ? noteTitles.map((p,arrIndex)=>{return(
                <div><div><span style={{marginRight:10}}>{p[1]}</span><button onClick={()=>{handleView(p[0])}}>View</button> <button onClick={()=>{handleDelete(p[0],arrIndex)}}>Delete</button></div></div>
            )}):<div>No Notes Available!</div> }
            <div>
                <button onClick={createNote}>CREATE</button>
            </div>
        </div>
    )
}

export default Home
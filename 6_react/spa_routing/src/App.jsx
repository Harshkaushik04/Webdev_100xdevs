import {BrowserRouter,Routes,Route,Link,useNavigate, Outlet} from "react-router-dom";
import {useEffect,useState} from "react"
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Landing/>}/>
          <Route path="/new" element={<New/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function Layout(){
  return(
    <div>
        <Link to="/new">new</Link>
          |
        <Link to="/">Landing</Link>
        <Outlet/>

    </div>
  )
}

function Landing(){
  return(
    <div>
      landing page
    </div>
  )
}

function ErrorPage(){
  return(
    <div>
      page not found
    </div>
  )
}

function New(){
  const navigate=useNavigate();
  useEffect(()=>{
    let clock=setTimeout(() => {
      navigate("/");
    }, 5000);
    return ()=>{clearTimeout(clock)}
  },[])
  return(
    <div>
      new page
    </div>
  )
}

export default App

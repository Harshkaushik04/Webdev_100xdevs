import './css/App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home'
import Landing from './Landing'
import Login from './Login'
import SignUp from './SignUp'
import Note from './Note'
import ErrorPage from './ErrorPage'
import ViewNote from './ViewNote'

function App() {
  return(
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/note" element={<Note/>}/>
          <Route path="/view-note" element={<ViewNote/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

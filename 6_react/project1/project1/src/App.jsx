import { useState,useEffect } from "react";

function App(){
  const [count,setCount]=useState(0);
  const [countVisible,setCountVisible]=useState(true);
  function reverseCountVisibility(){
    if(countVisible) setCountVisible(false);
    else setCountVisible(true);
  }

  return(
    <div>
      hi there!
      {countVisible ? <Button count={count} setCount={setCount}></Button>:<div></div>}
      <button onClick={reverseCountVisibility}>Reverse count visibility</button>
    </div>
  )
}

function Button(props){
  //gaurd setInterval from re rendering
  useEffect(()=>{
    console.log("mount");
    let clock=setInterval(()=>{
      props.setCount((cnt)=>{
        return cnt+1;
      }
    )
    console.log("inside interval")
    },1000);
    return ()=>{
      clearInterval(clock);   
      console.log("unmount");
    }
  },[props.count])
  function increaseCount(){
    props.setCount(props.count+1);
  }

  return(
    <div>
      <button onClick={increaseCount}>increase count</button>
      <div>count:{props.count}</div>
    </div>
  )
}

export default App;
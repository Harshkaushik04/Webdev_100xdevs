import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let img_link_title="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_960_720.png"
let globe_image="data:image/jpeg;base64,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"
let main_image="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg"
function App() {
  const [posts,setPosts]=useState([{
      name:"100xDevs", 
      num_followers:12788,
      time_in_minutes:12,
      text:"test line",
      imgLinkTitle:img_link_title,
      globeImage:globe_image,
      mainImage:main_image
  }]);
  let postsArr=[];
  for(let i=0;i<posts.length;i++){
    postsArr.push(
      <PostComponent name={posts[i].name}
      num_followers={posts[i].num_followers}
      time_in_minutes={posts[i].time_in_minutes}
      text={posts[i].text}
      imgLinkTitle={posts[i].imgLinkTitle}
      globeImage={posts[i].globeImage}
      mainImage={posts[i].mainImage}/>
    );
  }
  return(
    <div style={{display:"flex",
      flexDirection:"column",
    }}>
      <Form postsByForm={posts} setPostsByForm={setPosts}/>
      {postsArr}
    </div>
  )
}

function Form({postsByForm,setPostsByForm}){
  const [name,setName]=useState(null);
  const [text,setText]=useState(null);
  const [num_followers,set_num_followers]=useState(null);
  return(
    <div >
      <div>
        Input name:<input type="text" placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
        Input text:<input type="text" placeholder="text" onChange={(e)=>{setText(e.target.value)}}/>
        Input number of followers:<input type="text" placeholder="num followers" onChange={(e)=>{set_num_followers(e.target.value)}}/>
      </div>
      <div>
        <button onClick={()=>{
          setPostsByForm([...postsByForm,{
            name:name, 
            num_followers:num_followers,
            time_in_minutes:12,
            text:text,
            imgLinkTitle:img_link_title,
            globeImage:globe_image,
            mainImage:main_image
          }]);
        }}>Add Post</button>
      </div>
    </div>
  )
}

function PostComponent({name,num_followers,time_in_minutes,text,imgLinkTitle,globeImage,mainImage}){
  return(
    <div className="post" style={{
      width:300,
      height:600,
      borderRadius:10,
      backgroundColor:"white",
    }}>
      <div className="topbar" style={{
        paddingTop:8,
        display:"flex"
      }}>
        <img src={imgLinkTitle} style={{
        width:40,
        height:40,
        borderRadius:20
        }}/>
        <div className="title_details" style={{
          height:40,
          color:"black",
          paddingLeft:10
        }}>
            <div style={{fontSize:12}}><b>{name}</b></div>
            <div style={{fontSize:8}}>{num_followers} followers</div>
            <div style={{fontSize:8,display:"flex"}}>
              <span style={{textAlign:"start"}}>{time_in_minutes}m</span>
              <span><img src={globeImage} style={{width:12,height:12}}/></span>            </div>
        </div>
      </div>
      <div className="content" style={{marginLeft:10}}>
          <div className="text-content" style={{color:"black",fontSize:10,marginTop:15}}>{text}</div>
          <div className="image-content" style={{width:220,height:320}}>
            <img src={mainImage} style={{width:220,height:320,borderRadius:10,marginLeft:20}}/>
          </div>
      </div>
      <div className="bottom-bar" style={{
        paddingTop:17,
        display:"flex",
        height:50,
        color:"black",
        fontSize:15
      }}>
        <div className="Like" style={{border:".5px solid black",width:75}}>
            <div style={{marginTop:12,textAlign:"center"}}><b>Like</b></div>
        </div>
        <div className="Comment" style={{border:".5px solid black",width:75}}>
            <div style={{marginTop:12,textAlign:"center"}}><b>Comment</b></div>
        </div>
        <div className="Repost" style={{border:".5px solid black",width:75}}>
            <div style={{marginTop:12,textAlign:"center"}}><b>Repost</b></div>
        </div>
        <div className="Send" style={{border:".5px solid black",width:75}}>
            <div style={{marginTop:12,textAlign:"center"}}><b>Send</b></div>
        </div>
      </div>
    </div>
  )
}

export default App

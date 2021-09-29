import React, {useState,useEffect} from 'react'
import './Feed.css'
import db from './firebase'
import Post from './Post'
import ThingeBox from './ThingeBox'
export default function Feed() {
  
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    db.collection("questions").orderBy('timestamp','desc')
    .onSnapshot(snapshot => setPosts(snapshot.docs.map((doc)=>{
      return {
        id: doc.id,
        question: doc.data(),
      }
    })))
  },[])
  
  return (
    <div className="feed">
      <ThingeBox/>
      {posts.map(({id,question})=>{
        return (
          <Post key={id} Id={id} image={question.imageUrl}
                question={question.questions} timestamp={question.timestamp} 
                thingeUser={question.user}/> 
        )
      })}
    </div>
  )
}

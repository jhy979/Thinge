import React from 'react'
import './Feed.css'
import Post from './Post'
import ThingeBox from './ThingeBox'
export default function Feed() {
  return (
    <div className="feed">
      <ThingeBox/>
      <Post/>  
    </div>
  )
}

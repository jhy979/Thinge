import { Avatar } from '@material-ui/core'
import React from 'react'
import './ThingeBox.css'
export default function ThingeBox() {
  return (
    <div className="thingeBox">
      
      <div className="thingeBox_info">
        <Avatar/>
        <h5>리액트 프로젝트</h5>
      </div>
      
      <div className="thinge_thing">
        <p>무엇이 궁금하신가요?</p>
      </div>

    </div>
  )
}

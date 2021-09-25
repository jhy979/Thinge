import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice'
import './ThingeBox.css'

export default function ThingeBox() {
  const user = useSelector(selectUser)

  return (
    <div className="thingeBox">
      
      <div className="thingeBox_info">
        <Avatar src={user.photo}/>
        <h5>{user.displayName ? user.displayName : user.email.match(/.+@/)[0].slice(0,-1) }</h5>
      </div>
      
      <div className="thinge_thing">
        <p>무엇이 궁금하신가요?</p>
      </div>

    </div>
  )
}

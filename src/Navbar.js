import { Avatar, Button } from '@material-ui/core'
import { AssignmentIndOutlined, BorderAllRounded, Home, Language, NotificationsOutlined, PeopleAltOutlined, Search } from '@material-ui/icons'
import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="header_logo">
        <img src="https://user-images.githubusercontent.com/32920566/133925017-5b1dacae-9806-4e42-9bca-4d77f2a68bfa.jpg" alt="Thinge"/>
      </div>


        <div className="header_icons">
          <div className="header_icon">
            <Home/>
          </div>
          <div className="header_icon">
            <BorderAllRounded/>
          </div>
          <div className="header_icon">
            <AssignmentIndOutlined/>
          </div>
          <div className="header_icon">
            <PeopleAltOutlined/>
          </div>
          <div className="header_icon">
            <NotificationsOutlined/>
          </div>
        </div>


        <div className="header_input">
          <input type="text" placeholder=" Thinge에게 물어보세요."/>
          <Search/>
        </div>


        <div className="header_Rem">
          <div className="header_avatar">
            <Avatar/>
          </div>
          <Language/>
          <Button>질문하기</Button>
        </div>

    </div>
  )
}

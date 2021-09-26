import { Avatar, Button, Input } from '@material-ui/core'
import { AssignmentIndOutlined, BorderAllRounded, ExpandMore, Home, Language, Link, NoEncryption, NotificationsOutlined, PeopleAltOutlined, Search } from '@material-ui/icons'
import React from 'react'
import {useSelector} from 'react-redux'
import { useState } from 'react'
import { selectUser } from './features/counter/userSlice'
import db, { auth } from './firebase'
import './Navbar.css'
import Modal from 'react-modal'
import firebase from 'firebase'
export default function Navbar() {

  const user = useSelector(selectUser)
  const [openModal, setOpenModal] = useState(false)
  const [input, setInput] = useState("")
  const [inputUrl, setInputUrl] = useState("")
  const handleQuestion = (e) => {
    e.preventDefault();
    setOpenModal(false);
    db.collection("questions").add({
      questions: input,
      imgUrl: inputUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user
    })
    
    setInput("");
    setInputUrl("");
  }

  return (
    <div className="navbar">
      <div className="header_logo">`
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
            <Avatar src={user.photo} onClick={()=>{auth.signOut()}  }/>
          </div>
          
          <Language/>

          <Button onClick={()=>{setOpenModal(true)}}>질문하기</Button>

          <Modal isOpen={openModal} onRequestClose={()=>{setOpenModal(false)}} 
          shouldCloseOnOverlayClick={false}
          style={{
            overlay:{
              width:"80%",
              height:"80%",
              backgroundColor:"rgba(0,0,0,0.4)",
              zIndex:"1000",
              top: "10%",
              left:"10%",
              borderRadius:"40px"
            },
            content:{
              background:"#274722",
              border: '3px solid #ebd8ad',
            }
          }}
          >
            <div className="modal_title">
              <h5>질문</h5>
              <h5>공유하기</h5>
            </div>
            <div className="modal_title_bottom"/>
            <div className="modal_info">
              <Avatar src={user.photo}/>
              <p> 질문자 : {user.displayName ? user.displayName : user.email.match(/.+@/)[0].slice(0,-1)} </p>

              <div className="modal_scope">
                <PeopleAltOutlined/>
                <p>전체공개</p>
                <ExpandMore/>
              </div>

            </div>

            <div className="modal_field">
              <Input className="input" type="text" placeholder="질문을 남기세요." required value={input} onChange={(e)=>{setInput(e.target.value)}}/>
                <div className="modal_fieldLink">
                  <Link/>
                  <Input className="input" type="text" placeholder="삽입 url, 이미지" value={inputUrl} onChange={(e)=>{setInputUrl(e.target.value)}}/>
                </div>
            </div>
            <div className="modal_buttons">
              <Button type="text" className="add" onClick={handleQuestion}>질문하기</Button>
              <Button className="cancel" onClick={()=>{setOpenModal(false)}}>닫기</Button>
            </div>
          </Modal>
        </div>



    </div>
  )
}

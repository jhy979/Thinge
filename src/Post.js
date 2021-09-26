import { Avatar } from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@material-ui/icons'
import React from 'react'
import './Post.css'

export default function Post( {key,Id,image,question,timestamp,thingeUser}) {

  return (
    <div className="post">

       <div className="post_info">
        <Avatar src={thingeUser.photo}/>
        <h5>{thingeUser.displayName ? thingeUser.displayName : thingeUser.email.match(/.+@/).slice(0,-1)}</h5>
        <small>{new Date(timestamp).toLocaleString()}</small>
      </div>

      <div className="post_body">
        <div className="post_question">
          <p>{question}</p> 
          <button className="post_btnAnswer">답변하기</button>
        </div>
        
        <div className="post_answer">
          <p>답변 내용</p>
        </div>
      </div>
      <img src={image} alt=""/>
      
      <div className="post_footer">
        <div className="post_footerAction">
          <ArrowUpwardOutlined/>
          <ArrowDownwardOutlined/>
        </div>
        <RepeatOneOutlined/>
        <ChatBubbleOutlineOutlined/>
        <div className="post_footerRight">
          <ShareOutlined/>
          <MoreHorizOutlined/>
        </div>
      </div>
    </div>
  )
}

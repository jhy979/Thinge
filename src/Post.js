import {
  Avatar,Button
} from '@material-ui/core'
import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutlineOutlined,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined
} from '@material-ui/icons'
import React, {
  useEffect,
  useState,
} from 'react'
import './Post.css'
import Modal from 'react-modal'
import {useDispatch,useSelector} from 'react-redux'
import { selectQuestionId, selectQuestionName, setQuestionInfo } from './features/counter/questionSlice'
import { selectUser } from './features/counter/userSlice'
import db from './firebase'
import firebase from 'firebase'
Modal.setAppElement("#root")

export default function Post( {key,Id,image,question,timestamp,thingeUser}) {

  const [openModal, setOpenModal] = useState(false)
  const [answer,setAnswer] =useState("");
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const questionId = useSelector(selectQuestionId)
  // const questionName = useSelector(selectQuestionName)
  const [getAnswer, setGetAnswer] = useState([])

  const handleAnswer = (e)=>{
    e.preventDefault();
    if(questionId){
      db.collection('questions').doc(questionId).collection('answer')
      .add({
        questionId:questionId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        answer:answer,
        user:user,
      })

      setAnswer("")
      setOpenModal(false)
      
    }
  }

  useEffect(()=>{
    if(questionId){
      db.collection('questions').doc(questionId).collection('answer')
      .orderBy("timestamp","asc").onSnapshot(snapshot=>{
        setGetAnswer(snapshot.docs.map((doc)=>{
          return {
            id:doc.id,
            answer:doc.data()
          }
        }))
      })
    }
  },[questionId])

  return (
    <div className="post" onClick={()=>{
      dispatch(setQuestionInfo({
        questionId: Id,
        questionName: question
      }))
    }}>

       <div className="post_info">
        <Avatar src={thingeUser.photo}/>
        <h5>{thingeUser.displayName ? thingeUser.displayName : thingeUser.email.match(/.+@/)[0].slice(0,-1)}</h5>
        <small>{new Date(timestamp).toLocaleString()}</small>
      </div>

      <div className="post_body">
        <div className="post_question">
          <p>{question}</p> 
          <button className="post_btnAnswer" onClick={()=>{setOpenModal(true)}}>답변하기</button>
          
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
            <div className="modal_question">
              <h1>{question}</h1>
              <p>
                <span className="name">{thingeUser.displayName ? thingeUser.displayName : thingeUser.email.match(/.+@/)[0].slice(0,-1)}</span>
                님의 질문
                <span className="time">{new Date(timestamp).toLocaleString()}</span>
              </p>
            </div>

            <div className="modal_title_bottom"/>

            <div className="modal_answer">
             <textarea placeholder="답변을 작성해주세요." type="text" value={answer} onChange={(e)=>{setAnswer(e.target.value)}}/>
            </div>

            <div className="modal_buttons">
              <Button type="submit" className="add" onClick={handleAnswer}>답변하기</Button>
              <Button className="cancel" onClick={()=>{setOpenModal(false)}}>닫기</Button>
            </div>
            
          </Modal>


        </div>
        <img src={image} alt=""/>
        
        <div className="post_answer">
            {
              getAnswer.map(({id, answer})=>{
                return (
                  <p key={id} style={{
                    position:"relative",
                    paddingBottom:"5px",
                  }}>
                    {Id === answer.questionId ? (
                    <span>{answer.answer}
                      <br/>
                      <span style={{
                        position:"absolute",
                        color: "black",
                        fontSize: "small",
                        display:"flex",
                        right:"0px"}}>
                        <span style={{color:"#274722 ", marginRight:"20px"}}>{answer.user.displayName ? answer.user.displayName : answer.user.email.match(/.+@/)[0].slice(0,-1)}</span>
                        <span style={{color:"olivedrab"}}>{new Date(answer.timestamp).toLocaleString()}</span>
                      </span> 
                    </span> 
                  ):undefined}
                  </p>
                )
              })
            }
        </div>

        
      </div>
      
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

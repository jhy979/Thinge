import { useState } from 'react';
import { ArrowForwardIos } from '@material-ui/icons'
import React from 'react'
import './Login.css'
import auth from './firebase'
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //로그인 함수
  const handleLogin = (e) => {
    e.preventDefault(); // 새로고침방지
    auth.siginInWithEmailAndPassword(email,password).then(
      (auth)=>{
        console.log(auth)
      }
    ).catch(err=>alert(err))

    setEmail("");
    setPassword("");
  }
  // 회원가입
  const handleRegister = (e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then(
      (auth)=>{
        if(auth)
          console.log(auth)
      }
    ).catch(err=>alert(err.message))
    setEmail("");
    setPassword("");
  }
  return (
    <div className="login">
      
      <div className="login_container">

        <div className="login_desc">
          <h3>세상의 모든 질문</h3>
          <p>
            어떤 분야든 고민하지말고<br/> 
            어떤 궁금증이든 Thinge에서 해결하세요
          </p>
        </div>
        
        <div className="login_auth">
          <div className="login_authOptions">

            <div className="login_authOption">
              <img className="login_googleAuth" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google"/>
              <p>구글 아이디로 로그인</p>
            </div>

            <div className="login_authOption">
              <img className="login_googleAuth" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook"/>
              <p>페이스북 아이디로 로그인</p>
            </div>

            <div className="login_authDesc">
              <p>
                <span style={{color:'olivedrab', cursor:"pointer"}}>이메일로 회원가입</span>
                시 본사의 
                <p><span style={{color:'olivedrab', cursor:"pointer"}}>개인정보정책{" "}</span> </p> 과 {" "}
                <p><span style={{color:'olivedrab', cursor:"pointer"}}>서비스 제공 정책{" "}</span> 
                에 동의하는 것으로 간주합니다.
                </p>
              </p>
            </div>

          </div>

          <div className="login_emailPass">
            <div className="login_label">
              <h4>로그인</h4>
            </div>

            <div className="login_inputFields">
              <div className="login_inputField">
                <input type="text" placeholder="이메일" value={email} onChange = {e=>setEmail(e.target.value)}/>
              </div>
              <div className="login_inputField">
                <input type="password" placeholder="비밀번호" value={password} onChange={e=>setPassword(e.target.value)}/>
              </div>
            </div>

            <div className="login_forgButt">
              <small> 비밀번호 찾기</small>
              <button type="submit" onClick={handleLogin}>로그인</button>
            </div>

            <button onClick={handleRegister}>회원가입</button>

          </div>
          
          </div>

        <div className="login_lang">
          <p>언어설정</p>
          <ArrowForwardIos fontSize="small"/>
        </div>

        <div className="login_footer">
          <p>About</p>
          <p>오시는길</p>
          <p>비즈니스 문의</p>
          <p>사업자 번호</p>
          <p>개인정보방침</p>
          <p>&copy;jhy</p>
        </div>
      </div>
    </div>
  )
}

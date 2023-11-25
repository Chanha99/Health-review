import './css/signup.css';
import Logo from './img/logo.PNG';
import { useState } from "react"; 
import Box from "@mui/material/Box"; 
import Button from "@mui/material/Button"; 
import Typography from "@mui/material/Typography";
import CustomModal from "./CustomModal_Signiup";
import { useEffect } from 'react';

function Signup(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true); 
  const closeModal = () => setIsModalOpen (false);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");


  return (   
  <div className='signup'>
  <Button onClick={openModal}>Signup</Button> 
  <CustomModal
  isOpen={isModalOpen} 
  closeModal={closeModal}
  >
      <Box>
  <div className="member">
    {/* 1. 로고 */}
    <img className="logo" src={Logo} alt="Logo" />
    {/* 2. 필드 */}
    <div className="field">
      <b>아이디</b>
      <span className="placehold-text">
      <input className="login" type="text" placeholder="아이디" onChange={event => {
        setId(event.target.value);
      }} />
      </span>
    </div>
    <div className="field">
      <b>비밀번호</b>
      <input className="login" type="password" placeholder="비밀번호" onChange={event => {
        setPassword(event.target.value);
      }} />
    </div>
    <div className="field">
      <b>비밀번호 재확인</b>
      <input className="login" type="password" placeholder="비밀번호 확인" onChange={event => {
        setPassword2(event.target.value);
      }} />
    </div>
    <div className="field">
      <b>닉네임</b>
      <input type="text" />
    </div>
    {/* 3. 필드(성별) */}
    <div className="field gender">
      <b>성별</b>
      <div>
        <label>
          <input type="radio" name="gender" />
          남자
        </label>
        <label>
          <input type="radio" name="gender" />
          여자
        </label>
      </div>
    </div>
    {/* 4. 신체 정보 */}
    <div className="body-size">
      <b>키</b>
      <div>
        <label>
          <input type="text" name="height" />
        </label>
        <b>체중</b>
        <label>
          <input type="text" name="weight" />
        </label>
      </div>
    </div>
    {/* 5. 가입하기 버튼 */}
    <input className="btn" type="submit" value="회원가입" onClick={() => {
        const userData = {
          userId: id,
          userPassword: password,
          userPassword2: password2,
        };
        fetch("http://localhost:3001/signin", { //signin 주소에서 받을 예정
          method: "post", // method :통신방법
          headers: {      // headers: API 응답에 대한 정보를 담음
            "content-type": "application/json",
          },
          body: JSON.stringify(userData), //userData라는 객체를 보냄
        })
          .then((res) => res.json())
          .then((json) => {
            if(json.isSuccess==="True"){
              alert('회원가입이 완료되었습니다!')
              props.setMode("LOGIN");
            }
            else{
              alert(json.isSuccess)
            }
          });
      }} />
    {/* 6. 푸터 */}
    <div className="member-footer">
      <div>
        <a href="#none">이용약관</a>
        <a href="#none">개인정보처리방침</a>
        <a href="#none">책임의 한계와 법적고지</a>
        <a href="#none">회원정보 고객센터</a>
      </div>
      <span>
        <a href="#none">health_review Corp.</a>
      </span>
    </div>
  </div>
      </Box>
  </CustomModal>
  </div>
  );
}
export default Signup;
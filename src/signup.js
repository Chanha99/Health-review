import './signup.css';
import Logo from './img/logo.PNG';
import { useState } from "react"; 
import Box from "@mui/material/Box"; 
import Button from "@mui/material/Button"; 
import Typography from "@mui/material/Typography";
import CustomModal from "./CustomModal_Signiup";

function Signup() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true); 
  const closeModal = () => setIsModalOpen (false);

  return (   
  <div>
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
        <input type="text" />
      </span>
    </div>
    <div className="field">
      <b>비밀번호</b>
      <input className="userpw" type="password" />
    </div>
    <div className="field">
      <b>비밀번호 재확인</b>
      <input className="userpw-confirm" type="password" />
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
    <input type="submit" defaultValue="가입하기" />
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
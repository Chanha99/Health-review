import './css/login.css';
import Logo from './img/logo.PNG';
import { useState } from "react"; 
import Box from "@mui/material/Box"; 
import Button from "@mui/material/Button"; 
import CustomModal from "./CustomModal";

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true); 
  const closeModal = () => setIsModalOpen (false);

  return (   
  <div>
  <Button className="LoginButton"onClick={openModal}>Login</Button> 
  <CustomModal
  isOpen={isModalOpen} 
  closeModal={closeModal}
  >
      <Box>
      <div className="login-wrapper">
    <div className="logo">
      <img className="logo" src={Logo} alt="Logo" />
    </div>
    <h2>Login</h2>
    <form method="post" action="서버의url" id="login-form">
      <input type="text" name="userName" placeholder="Email" />
      <input type="password" name="userPassword" placeholder="Password" />
      <label htmlFor="remember-check">
        <input type="checkbox" id="remember-check" />
        아이디 저장하기
      </label>
      <input type="submit" defaultValue="Login" />
      <div className="signup">
        <a href="signup.html">
          <button type="button">회원가입</button>
        </a>
      </div>
    </form>
  </div>
      </Box>
  </CustomModal>
  </div>
  );
}
export default Login;

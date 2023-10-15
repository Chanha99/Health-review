import './login.css';

function Login(){
    return(
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>로그인</title>
  <link href="icon.png" rel="shortcut icon" type="image/x-icon" />
  <link rel="stylesheet" href="login.css" />
  <div className="login-wrapper" style={{ margin: "auto", paddingTop: 250 }}>
    <div className="logo">
      <a href="home.html">
        <img
          className="logo"
          href="home2.html"
          src="logo.PNG"
          alt="헬스리뷰 로고"
        />
      </a>
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
</>

    )
}
export default Login;
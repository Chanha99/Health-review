import '../css/r_home.css';
import Logo from '../img/r_logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return(
    <>
    <header className='main_header'>
        <div className="logo">
          <Link to="/">
          <img className='r_logo' src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="top_menu">
          
        
        
        </div>
      </header>
        <div className='header_nav'>
          <div className='inner'>
            <nav>
              <Link to="./board">게시판</Link> |
              <Link to="./review">리뷰</Link> 
            </nav>
          </div>
        </div>
        </>
    )
}
export default Header;
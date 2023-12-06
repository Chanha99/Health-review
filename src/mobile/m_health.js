import '../css/mobile.css';
import Up from '../img/up.jpg';
import Down from '../img/down.webp';
import { Link } from 'react-router-dom';

function Health (){

return(
<section className="m_review_content">
          <h1>운동 부위</h1>
          <div className="m_review">
            <div className="m_review1">
              <Link to="/m_health_list">
                <h3>상체</h3>
                <img className='m_review_icon1' alt="상체" src={Up} />
              </Link>

              
            </div>
            <div className="m_review2">
              <Link to="/m_leg">
                  <h3>하체</h3> 
                  <img className="m_review_icon2" alt="하체" src={Down} />
              </Link>
            </div>
          </div>
        </section>
)
}

export default Health;
        

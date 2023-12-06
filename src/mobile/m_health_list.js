import { Link } from 'react-router-dom';
import '../css/m_health_list.css'

function m_Chest() {
    return (
        <div>
        <div className='m_h_l'>
      <h1>상체 운동</h1>
      </div>
          <div className='m_health_list'>
      <ul>
        <li>
            <Link to="/m_chest1">
            <h2>가슴 운동</h2>
            
            </Link>
        </li>
        <br></br>
        <li>
            <Link to="/m_shoulder">
            <h2>어깨 운동</h2>
            
            </Link>
        </li>
        <br></br>
        <li>
            <Link to="/m_back">
            <h2>등 운동</h2>
            
            </Link>
        </li>
      </ul>
      
    </div>
    </div>
    )
}

export default m_Chest;
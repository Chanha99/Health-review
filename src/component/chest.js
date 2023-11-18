import { Link } from 'react-router-dom';

function Chest() {
    return (
    <div>
      <h1 align="center">상체 운동</h1>
      <ul>
        <li>
            <Link to="/chest1">
            <h2>가슴 운동</h2>
            </Link>
        </li>
        <br></br>
        <li>
            <Link to="/shoulder">
            <h2>어깨 운동</h2>
            </Link>
        </li>
      </ul>
      
    </div>
    )
}

export default Chest;
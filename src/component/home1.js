import { Outlet } from 'react-router-dom';
import Header from './home_header';

const Home1 = () => {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  };

  export default Home1;
import Sidebar from '@/components/Sidebar';
import LandingPage from './landing';
import { useSelector } from 'react-redux';
import Home from './home';
import FinancesTest from './finances-test';

const Layout = () => {
  const userToken = useSelector((state: any) => state.app.client.tokenUser);
  const isLoggedIn = !!userToken;

  const selectedComponent = useSelector((state: any) => state.app.client.selectedComponent);

  const selectComponent = () => {
    if (selectedComponent === '/finances-test' && isLoggedIn ) { return <FinancesTest /> }
    else if (selectedComponent === '/home' && isLoggedIn ) { return <Home /> }
    else return <LandingPage />
  };

  return (
    <div className="flex">
      {isLoggedIn && <Sidebar />}
      <main
        className="flex-1 p-8 overflow-y-auto"
        style={{ marginLeft: isLoggedIn ? '250px' : '0' }}
      >
        {selectComponent()}
      </main>
    </div>
  );
};

export default Layout;

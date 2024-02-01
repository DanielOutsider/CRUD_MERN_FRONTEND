//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { AppRoutes } from './routes/Routes.tsx';
import { StyckyFooter } from './components/dashboard/StickyFooter.tsx';


function App() {
  return (
    <div className="App">
      {/*<LoginForm />*/}
      {/*<RegisterForm />*/}
      <Router>
        <AppRoutes/>
      </Router>
      {/* <StyckyFooter/> */}
    </div>
  );
}

export default App;

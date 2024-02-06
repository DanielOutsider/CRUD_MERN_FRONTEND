//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { AppRoutes } from './routes/Routes.tsx';
import { StyckyFooter } from './components/dashboard/StickyFooter.tsx';
import { SnackbarProvider } from 'notistack';


function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={4}>
      {/*<LoginForm />*/}
      {/*<RegisterForm />*/}
      <Router>
        <AppRoutes/>
      </Router>
      {/* <StyckyFooter/> */}
      </SnackbarProvider>
    </div>
  );
}

export default App;

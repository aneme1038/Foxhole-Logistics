import './App.css';
import {Route, Routes} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import NavBar from './navigation/nav-bar';
import Loading from './navigation/loading';
import Home from './navigation/home';

const App = () => {
  const {isLoading} = useAuth0();

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
      </div>
    </div>
  )
}

export default App;

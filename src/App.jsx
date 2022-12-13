import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import { NewsFeed, NewsFeedFunc } from './pages';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

function App(props) {
  return (
    <BrowserRouter>
      <div className="AppBack">
        <div className="App">
          <HeaderContainer />
          <NavBar />
          <div className="App-content">
            <Routes>
              <Route path="/profile:userId" element={<ProfileContainer />} />
              <Route path="/messages" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/news" element={<NewsFeed />} />
              <Route path="/newsFunc" element={<NewsFeedFunc />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import { NewsFeed, NewsFeedFunc } from './pages';

function App(props) {
  return (
    <BrowserRouter>
      <div className="AppBack">
        <div className="App">
          <Header />
          <NavBar />
          <div className="App-content">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
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

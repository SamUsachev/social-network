import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="AppBack">
        <div className="App">
          <Header />
          <NavBar />
          <div className="App-content">
            <Routes>
              <Route
                path="/profile"
                element={<Profile store={props.store} />}
              />
              <Route
                path="/messages"
                element={
                  <DialogsContainer
                    store={props.store}
                    dispatch={props.dispatch}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

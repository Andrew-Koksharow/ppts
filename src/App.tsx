import React from 'react';
import s from './App.module.scss';

import Sort from './Components/Sort/Sort';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import ListContainer from './Components/Users/ListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProfileContainer from './Components/Profile/ProfileContainer';



function App() {

  return (

    <Provider store={store}>
      <BrowserRouter>
        <div className={s.app}>
          <div className={s.side}><Sort /></div>

          <div className={s.content}>
            <Routes>
              <Route path='/' element={<ListContainer />}/>
              <Route path='Profile/:UserId' element={<ProfileContainer />}/>
              
              
              
              <Route path='*' element={<main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>}></Route>
            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </Provider>

  );
}

export default App;

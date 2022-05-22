import React from 'react';
import s from './App.module.scss';

import Sort from './Components/Sort/Sort';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import ListContainer from './Components/Users/ListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Components/Profile/Profile';



function App() {
  
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className={s.app}>
     <div className={s.side}><Sort /></div>
     
     <div className={s.content}>
       <Routes>
       <Route path='/' element={<ListContainer/>}></Route>
       <Route path='/Profile/UserId' element={<Profile/>}></Route>

       </Routes>
       </div>
     
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;

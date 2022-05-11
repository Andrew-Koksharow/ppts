import React from 'react';
import s from './App.module.scss';

import Sort from './Components/Sort/Sort';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import ListContainer from './Components/Users/ListContainer';



function App() {
  return (
    <Provider store={store}>
    <div className={s.app}>
     <div className={s.side}><Sort /></div>
     <div className={s.content}><ListContainer/></div>
    </div>
    </Provider>
  );
}

export default App;

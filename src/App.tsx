import React from 'react';
import s from './App.module.scss';
import List from './Components/Users/List';
import Sort from './Components/Sort/Sort';



function App() {
  return (
    <div className={s.app}>
     <div className={s.side}><Sort /></div>
     <div className={s.content}><List/></div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import Thinge from './Thinge';
import Login from './Login';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      {
        user ? (<Thinge/>) : (<Login/>)
      }
    </div>
  );
}

export default App;

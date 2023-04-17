import React, {useState} from 'react';
import './App.css';
import {Login} from './components/Login/Login';
import {Register} from './components/Register/Register';
import {Start} from './Start';

function App() {

  const [currentForm, setCurrentForm] = useState('start');

  const toggleForm = (formName : any) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "start"? <Start onFormSwitch={toggleForm}/> : (currentForm === "login" ? <Login onFormSwitch={toggleForm}/> :  <Register onFormSwitch={toggleForm}/>)
      }
    </div>
  );
}

export default App;


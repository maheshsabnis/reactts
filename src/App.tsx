import React from 'react';
import logo from './logo.svg';
import InfoComponent from './components/usingprops/infocomponent';
import './App.css';
import CustomerComponent from './components/usingobjects/infocomponentobject';

function App() {
  return (
    <div className="App">
      <InfoComponent id={1001} name={'Mahesh'}></InfoComponent>
      <br/>
      <CustomerComponent></CustomerComponent>
    </div>
  );
}

export default App;

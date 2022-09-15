import React from 'react';
import logo from './logo.svg';
import InfoComponent from './components/usingprops/infocomponent';
import './App.css';
import CustomerComponent from './components/usingobjects/infocomponentobject';
import SelectComponent from './components/reusablecomponents/selectcomponent';
interface Schema{
  dataSource:string[],
  propertyName:string,
  emitData:any
};


function App() {

  const obj = {
     dataSource: ['IT', 'HRD', 'TRG'],
     propertyName: 'DeptName',
     emitData:(data:any)=>{
       alert(`Received values ${JSON.stringify(data)}`);
     }
  };

  const prop: Schema = {dataSource:obj.dataSource, propertyName:obj.propertyName, emitData:obj.emitData};

  return (
    <div className="App">
      <InfoComponent id={1001} name={'Mahesh'}></InfoComponent>
      <br/>
      <CustomerComponent></CustomerComponent>
      <br/>
      <SelectComponent {...prop}></SelectComponent>
    </div>
  );
}

export default App;

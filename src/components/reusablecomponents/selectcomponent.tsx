import React, { ChangeEventHandler, FC } from "react";

interface Schema{
  dataSource:string[],
  propertyName:string,
  emitData:any
};

const SelectComponent:FC<Schema>=({dataSource, propertyName,emitData}:Schema):JSX.Element=>{
    const handleChange=(value:any)=>{
        emitData(value);
    }
    return(
        <select className="form-control"
         value={propertyName}
         onChange={(evt)=>emitData(evt.target.value)}>
             {
                dataSource.map((record,index)=>(
                    <option key={index} value={record}>{record}</option>
                ))
             }   
        </select>
    );
};

export default  SelectComponent;
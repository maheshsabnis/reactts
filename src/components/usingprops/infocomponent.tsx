import React, { FC, useState } from "react";
// Define interface for passing props
interface Details {
    id:number,
    name:string
}
// use the interface that is used to pass data to the Component
const InfoComponent:FC<Details>=(props)=>{

    return (
        <div className="container">
            <h1>Using Props in TypeScript</h1>
            <div className="form-group">
                <strong>
                    {props.id}
                </strong>
            </div>
            <div className="form-group">
                <strong>
                    {props.name}
                </strong>
            </div>
        </div>
    );
};

export default InfoComponent;
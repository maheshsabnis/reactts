import React, { FC } from "react";

// define typs of which data is been passed to the component
type Customer = {
   firstName:string,
   lastName:string,
   age:number
};

interface CustomerData{
    customer:Customer
}

const CustomerComponent=()=>{
    // define data to be passed to thechild component
  const customerInfo:Customer = {firstName:'Mahesh', lastName:'Sabnis', age:46}; 
  const custData:CustomerData = {customer:customerInfo};
   
  return(
    <div className="container">
        <CustomerDetailsComponent customer={custData.customer}></CustomerDetailsComponent>
    </div>
  );

};


const CustomerDetailsComponent:FC<CustomerData>=({ customer }):JSX.Element=>{
    return(
        <div className="container">
            <div className="form-group">
                <label>First Name</label>
                <strong>
                    {customer.firstName}
                </strong>
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <strong>
                    {customer.lastName}
                </strong>
            </div>
            <div className="form-group">
                <label>Age</label>
                <strong>
                    {customer.age}
                </strong>
            </div>
        </div>
    );
};

export default CustomerComponent;

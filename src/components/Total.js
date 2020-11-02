import React, { useContext } from 'react';
import {GlobalContext} from "../context/globalContext";

function Total(props) {
    const {transections}=useContext(GlobalContext)
const transectionAmount=transections.map(e=>e.amount)
    const Total=transectionAmount.reduce((acc,res)=>(acc+=res),0)
    
    return (
        <h1 className="text-center">
            <div>
                Your Total Balance
            </div>
            <div className="font-weight-bold text-success">
                ${Total}
            </div>
        </h1>
    );
}

export default Total;
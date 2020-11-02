import React, { useContext } from 'react';
import {GlobalContext} from "../context/globalContext";
import Transection from "./Transection";

function TransectionHistory(props) {
    const {transections}=useContext(GlobalContext)
    return (
        <div className="transectionHistory">
            {transections.map(e=>{
              return  <Transection key={e.id} transection={e}/>
            })}
        </div>
    );
}

export default TransectionHistory;
import React, { useContext } from 'react';
import { GlobalContext } from "../context/globalContext";
function Transection({transection}) {
    const {delTransection}=useContext(GlobalContext)
    const sign=transection.amount>0?'+':'-';
    const amountType=transection.amount>0?'plus':'minus';
    return (
        <div className={amountType}>
            <div>
                {transection.desc}
            </div>
            <div>
                {sign} ${Math.abs(transection.amount)}
            </div>
            <button className="closeBtn" onClick={()=>delTransection(transection.id)}>
X
            </button>
        </div>
    );
}

export default Transection;
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/globalContext';

function AddTransection(props) {
    const [Amount,setAmount]=useState(0)
    const [Description,setDescription]=useState('')
const {addTransection}=useContext(GlobalContext)
    const submitForm=(e)=>{
        e.preventDefault();
        const newTransection={
            id:new Date().getTime(),
            desc:Description,
            amount:+Amount
        }
        addTransection(newTransection)
    }
    return (
        <div>
            <form onSubmit={submitForm}>
            <div>
            <label>Description</label>
            <div className="form-group">
<input type="text" className="form-control" placeholder='Description' onChange={e=>setDescription(e.target.value)}/>
            </div>
            </div>
            <div>
            <label>Amount</label>
            <div className="form-group">
<input type="text" className="form-control" placeholder='Amount' onChange={e=>setAmount(e.target.value)}/>
            </div>
            </div>
            <div className="text-center">
                <button className="btn btn-primary">
                    Add Transection
                </button>
            </div>
            </form>
        </div>
    );
}

export default AddTransection;
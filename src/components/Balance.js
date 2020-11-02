import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

function Balance(props) {
    const { transections } = useContext(GlobalContext)
    const transectionAmount = transections.map(e => e.amount)
    const income = Math.abs(transectionAmount.filter(e => e > 0).reduce((acc, tran) => (acc += tran),0))
    const expence = Math.abs(transectionAmount.filter(e => e < 0).reduce((acc, tran) => (acc += tran),0))

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="py-4 px-3 text-center border display-4 shadow text-success">
                    <div className="font-weight-bold">
                        Income
</div>
                    <div>
                        $ {income}
</div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="py-4 px-3 text-center border display-4 shadow text-danger">
                    <div  className="font-weight-bold">
                        Expence
</div>
                    <div>
                        $ {expence}
</div>
                </div>
            </div>
        </div>
    );
}

export default Balance;
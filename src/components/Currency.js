import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import { AppContext } from '../context/AppContext';

const Currency = (props) => {

    const [currency, setCurrency] = useState('');


    

    return (
        <div>
            <div className='row'>

            <div className='alert alert-primary'>
                <span>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="$" name="Dollar"> $ Dollar</option>
                        <option value="£" name="Pound">£ Pound</option>
                        <option value="€" name="Euro">€ Euro</option>
                        <option value="₹" name="Ruppee">₹ Ruppee</option>
                    </select>
                </span>
                </div>
                </div>

        </div>
    );
};

export default Currency;
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {

    const [currency, setCurrency] = useState('');


    const submitEvent = () => {


    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>

                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="$" name="Dollar"> $ Dollar</option>
                        <option value="£" name="Pound">£ Pound</option>
                        <option value="€" name="Euro">€ Euro</option>
                        <option value="₹" name="Ruppee">₹ Ruppee</option>
                    </select>

                </div>
                </div>

        </div>
    );
};

export default Currency;
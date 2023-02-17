import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import { AppContext } from '../context/AppContext';

const Currency = (props) => {

const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        })
    }
    return (
        <div className='alert alert-secondary' style={{alignmentBaseline:"central"}} >           
           <select className="custom-select" style={{background:"lightgreen", border:"round", size:"10"}}  id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)}>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
                <option value="$" name="Dollar"> $ Dollar</option>
            </select>
                
                
                

        </div>
    );
};

export default Currency;
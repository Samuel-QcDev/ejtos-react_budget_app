import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
//import { AppContext } from '../context/AppContext';
const Budget = () => {
    //const { budget } = useContext(AppContext);
    const [budget, setBudget] = useState('2000');
    const { expenses } = useContext(AppContext)
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    if(budget > 20000){
        alert("The value cannot exceed 20,000");
        setBudget("20000")
        return;
    }
    if(budget < totalExpenses ){
       alert("You cannot reduce the budget lower than the spending");
        setBudget("960")
        return;
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => setBudget(event.target.value)}>
                </input>                 
            </span>
        </div>
    );
};
export default Budget;

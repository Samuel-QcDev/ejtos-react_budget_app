import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const [budget, setBudget] = useState('2000');
    const { expenses, currency } = useContext(AppContext)
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
        setBudget(totalExpenses)
        return;
    }

    return (
        <div className='alert alert-secondary' style={{alignItems:"flex-start"}} >
            <span>Budget:{currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    step='10'
                    value={budget}
                    style={{ marginLeft: '2rem'}}
                    onChange={(event) => setBudget(event.target.value)}>
                </input>                 
            </span>
        </div>
    );
};
export default Budget;

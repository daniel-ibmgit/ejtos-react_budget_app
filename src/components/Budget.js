import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget,dispatch,expenses, currency } = useContext(AppContext);
    const max_budget = 20000;

	const changeBudget = (val) =>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		if(val<totalExpenses) {
			alert("You cannot reduce the budget that is already allocated!");
		}

        else if (val > max_budget) {
            alert("Budget cannot exceed £" + max_budget);
        }
        else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
	}
	
	return (
		<div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
			<input class="w-50" type="number" step="10" value={budget} onInput={(event)=>changeBudget(event.target.value)}></input>
		</div>
	);
};

export default Budget;
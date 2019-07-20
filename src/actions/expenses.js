
import uuid from 'uuid';

//ACtions
//Add_expnese //action generator
export const addExpense = (
    { 
        description='',
        note='', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//remove_expense
export const removeExpense = ( {id} = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id //should go to action object to be called in reducer
});

//edit_expense
export const editExpense= (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
import uuid from "uuid";
import db from "../firebase/firebase";

//Summary
//1. Component calls action generator
//2. Action generator returns object
//3. Component dispatches object
//4. redux store changes

//Summary (Asynchronous Redux Action)
//1. Component calls action generator
//2. Action generator returns object
//3. Component dispatches function
//4. function runs (has the ability to dispatch other actions and do whatever it wants)
//5. redux-thunk module (supports for dispatching functions)

//Action
//Add_expnese //action generator
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return db.ref('expenses')
      .push(expense)
      .then((ref) => {
        dispatch(addExpense({
            id: ref.key,
            ...expense
          }));
      });
  };
};

//remove_expense
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id //should go to action object to be called in reducer
});

export const startRemoveExpense = ({ id } ={}) => {
  return (dispatch) => {
    return db.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};

//edit_expense
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

//setEditExpense
export const startEditExpense = (id, updates) => {
  return(dispatch) => {
    return db.ref(`expenses/${id}`).update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return db.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];
      
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setExpenses(expenses));  
    });
  };
};


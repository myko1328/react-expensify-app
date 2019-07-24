import uuid from "uuid";
import db from "../firebase/firebase";
import { regExpLiteral } from "@babel/types";

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

    return db.ref('expense')
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

//remove_expense
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id //should go to action object to be called in reducer
});

//edit_expense
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

//expenses reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return[
                ...state, //spread operator
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => { //returns new array with the subsets value
                return id !== action.id;
            });
        case 'EDIT_EXPENSE':
            // return state.map - allow us to go to every single item with conditional logic
            return state.map ((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default: 
        return state;
    }
};


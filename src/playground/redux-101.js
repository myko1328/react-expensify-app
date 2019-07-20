import {createStore} from 'redux';

//ACtion generators are functions that return action object
const incrementCount = ({ incrementBy = 1} ={}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET',

});

const setCount = ({count}) => ({
    type: 'SET',
    count
})

//Reducers
//1. Reducers are pure functions
//   - unique function = output is determins by the input 
//2. Never change state or action

const store = createStore((state = {count: 0}, action) => {
    switch (action.type){
        case 'INCREMENT':
        return{
            count: state.count + action.incrementBy
        }; 
        case 'DECREMENT':
        return{
            count: state.count - action.decrementBy
        }; 
        case 'SET':
        return {
            count: action.count
        }  
        case 'RESET':
        return{
            count: 0
        };
        default:
        return state;
    }
});

store.subscribe(() =>{
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));

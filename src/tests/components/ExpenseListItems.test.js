import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItems from '../../components/ExpenseListItems';
import expenses from '../fixtures/expenses';

test('Should render ExpenseList items', () => {
    const wrapper = shallow(<ExpenseListItems {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot();
});
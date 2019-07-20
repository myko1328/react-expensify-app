import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSymmary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSymmary with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={12312456642}/>);
    expect(wrapper).toMatchSnapshot();
});

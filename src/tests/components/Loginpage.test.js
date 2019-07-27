import React from 'react';
import { LoginPage } from '../../components/LoginPage';
import { shallow } from 'enzyme';

test('should correctly render LoginPage', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startlogin on button click', () => {
    const startLogin = jest.fn(); //spy
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});
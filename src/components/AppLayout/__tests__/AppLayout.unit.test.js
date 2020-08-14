import React from 'react';
import {shallow} from 'enzyme';
import AppLayout from '../AppLayout';

describe('AppLayout', () => {
    test('renders empty AppLayout', () => {
        const wrapper = shallow(
            <AppLayout />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders AppLayout with props', () => {
        const wrapper = shallow(
            <AppLayout props={<div className="main"></div>}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
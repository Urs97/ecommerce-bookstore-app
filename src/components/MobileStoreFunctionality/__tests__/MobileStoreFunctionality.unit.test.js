import React from 'react';
import {shallow} from 'enzyme';
import MobileStoreFunctionality from '../MobileStoreFunctionality';

describe('MobileStoreFunctionality', () => {
    test('renders MobileStoreFunctionality', () => {
        const wrapper = shallow(
            <MobileStoreFunctionality />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
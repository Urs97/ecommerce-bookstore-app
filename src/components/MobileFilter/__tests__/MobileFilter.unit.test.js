import React from 'react';
import {shallow} from 'enzyme';
import MobileFilter from '../MobileFilter';

describe('MobileFilter', () => {
    test('renders MobileFilter', () => {
        const wrapper = shallow(
            <MobileFilter />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
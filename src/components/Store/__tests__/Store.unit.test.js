import React from 'react';
import {shallow} from 'enzyme';
import Store from '../Store';

describe('Store', () => {
    test('renders empty Store', () => {
        const wrapper = shallow(
            <Store />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
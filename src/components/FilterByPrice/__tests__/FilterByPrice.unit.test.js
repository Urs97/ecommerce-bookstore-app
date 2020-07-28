import React from 'react';
import {shallow} from 'enzyme';
import FilterByPrice from '../FilterByPrice';

describe('FilterByPrice', () => {
    test('renders FilterByPrice', () => {
        const wrapper = shallow(
            <FilterByPrice />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
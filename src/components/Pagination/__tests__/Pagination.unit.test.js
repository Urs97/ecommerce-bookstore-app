import React from 'react';
import {shallow} from 'enzyme';
import Pagination from '../Pagination';

describe('Pagination', () => {
    test('renders empty Pagination', () => {
        const wrapper = shallow(
            <Pagination />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
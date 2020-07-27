import React from 'react';
import {shallow} from 'enzyme';
import Book from '../Book';

describe('Book', () => {
    test('renders empty Book', () => {
        const wrapper = shallow(
            <Book />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
import React from 'react';
import {shallow} from 'enzyme';
import BookGenres from '../BookGenres';

describe('BookGenres', () => {
    test('renders BookGenres', () => {
        const wrapper = shallow(
            <BookGenres />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
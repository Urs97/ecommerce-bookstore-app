import React from 'react';
import {shallow} from 'enzyme';
import BooksContainer from '../BooksContainer';

describe('BooksContainer', () => {
    test('renders empty BooksContainer', () => {
        const wrapper = shallow(
            <BooksContainer />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
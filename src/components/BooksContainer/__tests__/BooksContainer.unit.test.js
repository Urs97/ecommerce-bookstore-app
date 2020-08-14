import React from 'react';
import {shallow} from 'enzyme';
import BooksContainer from '../BooksContainer';

describe('BooksContainer', () => {
    test('renders empty BooksContainer', () => {
        const emptyBookData = [];
        const wrapper = shallow(
            <BooksContainer bookData={emptyBookData}/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders BooksContainer', () => {
        const mockBookData = [{
            cover_edition_key: 'OL6147070M',
            title: 'Frankenstein',
            price: [94, 99],
            authors: [{name: 'Marry Shelley', key: '/authors/OL25342A'}],
            key: '/works/OL450125W'
        }, {
            cover_edition_key: 'OL8000344M',
            title: 'The Time Machine',
            price: [75, 65],
            authors: [{name: 'H. G. Wells', key: '/authors/OL13066A'}],
            key: '/works/OL52267W'
        }
        ];
        const wrapper = shallow(
            <BooksContainer bookData={mockBookData}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
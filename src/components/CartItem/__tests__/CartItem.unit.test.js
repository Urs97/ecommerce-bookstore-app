import React from 'react';
import {shallow} from 'enzyme';
import CartItem from '../CartItem';

describe('CartItem', () => {
    test('renders empty CartItem', () => {
        const mockBook = {
            cover_edition_key: 'OL6147070M',
            title: 'Frankenstein',
            price: [94, 99],
            authors: [{name: 'Marry Shelley', key: '/authors/OL25342A'}],
            key: '/works/OL450125W',
            quantity: 1
        }; 
        const wrapper = shallow(
            <CartItem book={mockBook}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
import React from 'react';
import {shallow} from 'enzyme';
import SidebarBook from '../SidebarBook';

describe('SidebarBook', () => {
    test('renders SidebarBook', () => {
        const mockBook = {
            cover_edition_key: 'OL6147070M',
            title: 'Frankenstein',
            price: [94, 99],
            authors: [{name: 'Marry Shelley', key: '/authors/OL25342A'}],
            key: '/works/OL450125W'
        }; 
        const wrapper = shallow(
            <SidebarBook book={mockBook}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
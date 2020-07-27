import React from 'react';
import {shallow} from 'enzyme';
import SidebarBook from '../SidebarBook';

describe('SidebarBook', () => {
    test('renders empty SidebarBook', () => {
        const wrapper = shallow(
            <SidebarBook />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
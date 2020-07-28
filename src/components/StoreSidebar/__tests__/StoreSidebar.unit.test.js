import React from 'react';
import {shallow} from 'enzyme';
import StoreSidebar from '../StoreSidebar';

describe('StoreSidebar', () => {
    test('renders StoreSidebar', () => {
        const wrapper = shallow(
            <StoreSidebar />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
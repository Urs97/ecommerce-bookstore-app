import React from 'react';
import {shallow} from 'enzyme';
import SidebarBookContainer from '../SidebarBookContainer';

describe('SidebarBookContainer', () => {
    test('renders empty SidebarBookContainer', () => {
        const wrapper = shallow(
            <SidebarBookContainer />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
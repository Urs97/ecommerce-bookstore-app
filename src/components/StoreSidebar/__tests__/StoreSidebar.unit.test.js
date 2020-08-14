import React from 'react';
import {shallow} from 'enzyme';
import StoreSidebar from '../StoreSidebar';
import StoreState from '../../../context/StoreState';

describe('StoreSidebar', () => {
    test('renders StoreSidebar', () => {
        const wrapper = shallow(
            <StoreState>
                <StoreSidebar />
            </StoreState>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
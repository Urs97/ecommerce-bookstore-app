import React from 'react';
import {shallow} from 'enzyme';
import PageHeader from '../PageHeader';

describe('PageHeader', () => {
    test('renders PageHeader', () => {
        const mockColor = "green";
        const mockTitle = "Your Cart";
        const wrapper = shallow(
            <PageHeader 
                title={mockTitle} 
                color={mockColor}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
import React from 'react';
import {shallow} from 'enzyme';
import CartCheckout from '../CartCheckout';

describe('CartCheckout', () => {
    test('renders empty CartCheckout', () => {
        const wrapper = shallow(
            <CartCheckout />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
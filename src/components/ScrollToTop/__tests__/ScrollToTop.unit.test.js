import React from 'react';
import {shallow} from 'enzyme';
import ScrollToTop from '../ScrollToTop';

describe('ScrollToTop', () => {
    test('renders ScrollToTop', () => {
        const wrapper = shallow(
            <ScrollToTop />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
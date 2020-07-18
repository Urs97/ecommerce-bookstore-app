import React from 'react';
import {shallow} from 'enzyme';
import AboutUs from '../AboutUs';

describe('AboutUs', () => {
    test('renders empty AboutUs', () => {
        const wrapper = shallow(
            <AboutUs />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
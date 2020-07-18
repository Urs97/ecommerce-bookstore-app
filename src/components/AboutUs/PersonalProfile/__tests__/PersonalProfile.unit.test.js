import React from 'react';
import {shallow} from 'enzyme';
import PersonalProfile from '../PersonalProfile';

describe('PersonalProfile', () => {
    test('renders empty PersonalProfile', () => {
        const wrapper = shallow(
            <PersonalProfile />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
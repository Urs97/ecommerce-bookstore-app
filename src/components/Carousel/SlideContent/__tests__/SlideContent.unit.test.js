import React from 'react';
import {shallow} from 'enzyme';
import SlideContent from '../SlideContent';

describe('SlideContent', () => {
    test('renders empty SlideContent', () => {
        const wrapper = shallow(
            <SlideContent />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
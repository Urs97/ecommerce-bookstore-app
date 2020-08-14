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

    test('renders SlideContent with props', () => {
        const mockText = "Reading provides you with wisdom."
        const mockTitle = "Keep Reading"
        const wrapper = shallow(
            <SlideContent 
                text={mockText} 
                title={mockTitle}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
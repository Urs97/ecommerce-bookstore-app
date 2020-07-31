import React from 'react';
import {shallow} from 'enzyme';
import PersonalProfile from '../PersonalProfile';
import portraitImg from '../../../../assets/images/testimonial-portrait-1.webp';

describe('PersonalProfile', () => {
    test('renders empty PersonalProfile', () => {
        const wrapper = shallow(
            <PersonalProfile />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders PersonalProfile with props', () => {
        const wrapper = shallow(
            <PersonalProfile 
                imgSrc={portraitImg} 
                name="Larry Jones" 
                title="CEO & Founder" 
                text="Larry Jones is company's founder and longest serving employee"/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
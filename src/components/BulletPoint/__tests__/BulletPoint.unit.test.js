import React from 'react';
import {shallow} from 'enzyme';
import BulletPoint from '../BulletPoint';

describe('BulletPoint', () => {
    test('renders BulletPoint in unrecognizable mode', () => {
        const wrapper = shallow(
            <BulletPoint 
                mode="wrong-mode" 
                color="yellow" 
                icon="mockIcon.svg" 
                text="This is BulletPoint text" 
                title="BulletPoint title"/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders BulletPoint in expanded mode', () => {
        const wrapper = shallow(
            <BulletPoint
                mode="expanded" 
                color="yellow" 
                icon="mockIcon.svg" 
                text="This is BulletPoint text" 
                title="BulletPoint title"/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders BulletPoint in normal mode', () => {
        const wrapper = shallow(
            <BulletPoint
                mode="normal" 
                color="yellow" 
                icon="mockIcon.svg" 
                text="This is BulletPoint text" 
                title="BulletPoint title"/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
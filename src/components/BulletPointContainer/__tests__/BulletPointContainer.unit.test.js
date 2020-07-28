import React from 'react';
import {shallow} from 'enzyme';
import BulletPointContainer from '../BulletPointContainer';

const texts = ["This is text number 1", "This is text number 2", "This is text number 3"];
const titles = ["Title 1, Title 2, Title 3"];
const icons = ["mockIcon1.svg", "mockIcon2.svg", "mockIcon3.svg"]

describe('BulletPointContainer', () => {
    test('renders BulletPointContainer in unrecognizable mode', () => {
        const wrapper = shallow(
            <BulletPointContainer 
                mode="wrong-mode"
                icons={icons}
                titles={titles}
                texts={texts}
                color="yellow"/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders BulletPointContainer in normal mode', () => {
        const wrapper = shallow(
            <BulletPointContainer 
                mode="normal"
                icons={icons}
                titles={titles}
                texts={texts}
                color="yellow"/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders BulletPointContainer in expanded mode', () => {
        const wrapper = shallow(
            <BulletPointContainer 
                mode="expanded"
                icons={icons}
                titles={titles}
                texts={texts}
                color="yellow"/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
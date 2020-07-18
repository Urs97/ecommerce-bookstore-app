import React from 'react';
import {shallow} from 'enzyme';
import BulletPoint from '../BulletPoint';

describe('BulletPoint', () => {
    test('renders empty BulletPoint', () => {
        const wrapper = shallow(
            <BulletPoint />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
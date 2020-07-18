import React from 'react';
import {shallow} from 'enzyme';
import BulletPointContainer from '../BulletPointContainer';

describe('BulletPointContainer', () => {
    test('renders empty BulletPointContainer', () => {
        const wrapper = shallow(
            <BulletPointContainer />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
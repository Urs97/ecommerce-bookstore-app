import React from 'react';
import {shallow} from 'enzyme';
import PageHeader from '../PageHeader';

describe('PageHeader', () => {
    test('renders empty PageHeader', () => {
        const wrapper = shallow(
            <PageHeader />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
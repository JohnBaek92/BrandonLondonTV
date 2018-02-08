import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon'
import About from '../frontend/components/About.jsx'

configure({ adapter: new Adapter() });

describe("<About/>", () => {
    let wrapper;
    let window;
    beforeEach(() => {
        wrapper = shallow(<About />);
    });

    it("renders two images", () => {
        expect(wrapper.find('img').length).toBe(2)
    })
    it("renders 4 articles", () => {
        expect(wrapper.find('article').length).toBe(3)
    })
    it("images dont go anywhere", () => {
        wrapper.find('img').forEach((el) => el.simulate('click'))
    })

});

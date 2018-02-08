import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon'
import Header from '../frontend/components/header.jsx'

configure({ adapter: new Adapter() });

describe("<Header/>", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('renders seven link tags', () => {
        expect(wrapper.find('li.navbar-item').length).toBe(7)
    })

})

describe("Social tags", () => {
    let wrapper;
    let tags;
    beforeEach(() => {
        wrapper = mount(<Header />);
        tags = wrapper.find('div.navbar-item')

    })
    it('header also contains social-tags', () => {
        tags = wrapper.find('div.navbar-item')
        expect(tags.length).toBe(4)
    })



    it('expects all social tags to open a new window', () => {
        // expect(tags.every('a').prop("target")).toEqual("_blank")
        for(var i = 0; i < tags.length; i++){
            console.log(tags[i])
            expect(tags[i].find('a').prop("target")).toBe("_blank")
        }
        // expect(wrapper.find('div.navbar-item').every('a')).toBe(true);
    })

})
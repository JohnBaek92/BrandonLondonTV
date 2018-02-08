import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import jest from "jest";

import { shallow, mount, render } from "enzyme";
import sinon from "sinon";
import Header from "./Header.jsx";
import { MemoryRouter } from "react-router";

configure({ adapter: new Adapter() });

describe("<Header/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it("renders seven link tags", () => {
    expect(wrapper.find("li.navbar-item").length).toBe(7);
  });
});

describe("Header Menu Functionality", () => {
  const wrapper = shallow(<Header />);
  const burgerActions = wrapper.instance().burgerActions();
  const methodNameFake = sinon.spy(wrapper.instance(), "burgerActions");
  const closeMenu = wrapper.instance().closeMenu();
  it("invokes burgerActions on render", () => {
    expect(methodNameFake).toHaveBeenCalledTimes(1);
  });

  it("Burger becomes active on click", () => {
    wrapper
      .find(".navbar-burger")
      .first()
      .simulate("click", { button: 0 });

    expect(wrapper.find(".navbar-burger").hasClass("is-active")).toBe(true);
  });
});

describe("Social tags", () => {
  let wrapper;
  let tags;
  beforeEach(() => {
    wrapper = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    tags = wrapper.find("div.navbar-item");
  });
  it("header also contains social-tags", () => {
    tags = wrapper.find("div.navbar-item");
    expect(tags.length).toBe(4);
  });
});

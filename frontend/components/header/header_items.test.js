import React from "react";
import { SocialLink, NavBarItem } from "./header_items";
import { Link } from "react-router-dom";
import { configure, mount, shallow, render } from "enzyme";
import { MemoryRouter } from "react-router";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Social Links renders as expected", () => {
  let social_wrapper;
  beforeEach(() => {
    social_wrapper = shallow(<SocialLink />);
  });
  it("Social Links have a class of 'navbar-item", () => {
    expect(social_wrapper.find("div").hasClass("navbar-item")).toBe(true);
  });
  it("Clicking on a social link opens a new tab", () => {
    expect(social_wrapper.find("a").prop("target")).toMatch(/_blank/);
  });
  it("Clicking on a link envoke function", () => {
    let links = "1,2,3,4".split(",").map((link, idx) => ({
      name: "foo" + link,
      link: link
    }));
    const myMock = jest.fn();
    let navLinks = links.map(navLink => SocialLink(navLink, myMock));
    let component = mount(
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <div>{navLinks}</div>
      </MemoryRouter>
    );
    component
      .find("a")
      .first()
      .simulate("click", { button: 0 });

    expect(myMock).toHaveBeenCalledTimes(1);
  });
});
describe("Nav Links renders as expected", () => {
  let nav_wrapper;
  beforeEach(() => {
    nav_wrapper = shallow(<NavBarItem />);
  });
  it("NavBarLinks have a class of 'navbar-item", () => {
    expect(nav_wrapper.find("li").hasClass("navbar-item")).toBe(true);
  });
  it("Clicking on a link envoke function", () => {
    let links = "1,2,3,4".split(",").map((link, idx) => ({
      name: "foo" + link,
      link: link
    }));
    const myMock = jest.fn();
    let navLinks = links.map(navLink => NavBarItem(navLink, myMock));
    let component = mount(
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <div>{navLinks}</div>
      </MemoryRouter>
    );
    component
      .find("a")
      .first()
      .simulate("click", { button: 0 });

    expect(myMock).toHaveBeenCalled();
  });
});

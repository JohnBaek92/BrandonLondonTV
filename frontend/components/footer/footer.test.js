import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Footer from "./Footer";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";

var jsdom = require("jsdom");

configure({ adapter: new Adapter() });

describe("Footer component should render as expected", () => {
  const { JSDOM } = jsdom;

  let { document } = new JSDOM("").window;
  let images = { circle_logo: "foo", circle_logo2: "foo" };
  global.window = {
    ...document
  };
  global.window.images = images;
  it("Renders the Footer correctly", () => {
    const component = mount(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
  });
});

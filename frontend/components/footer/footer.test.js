import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Footer from "./Footer";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

var jsdom = require("jsdom");
const { JSDOM } = jsdom;

let { document } = new JSDOM("").window;
global.window = document;

configure({ adapter: new Adapter() });

test("Footer component should render as expected", () => {
  beforeEach(() => {
    document = {
      ...document,
      images: { circle_logo: "foo", circle_logo2: "foo" }
    };
  });
  const component = mount(<Footer />);
  const tree = toJson(component);

  expect(tree).toMatchSnapshot();
});

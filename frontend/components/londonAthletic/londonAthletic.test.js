import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LondonAthletic from "./LondonAthletic";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";

var jsdom = require("jsdom");

configure({ adapter: new Adapter() });

describe("LondonAthletic component should render as expected", () => {
  const { JSDOM } = jsdom;

  let { document } = new JSDOM("").window;
  let images = {
    dubois: "foo",
    fitzpatrick: "foo",
    lewis: "foo",
    vassel: "foo"
  };
  global.window = {
    ...document
  };
  global.window.images = images;
  it("Renders the LondonAthletic correctly", () => {
    const component = shallow(<LondonAthletic />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
  });
});

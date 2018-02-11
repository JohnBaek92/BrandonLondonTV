import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Joso from "./Joso";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";

var jsdom = require("jsdom");

configure({ adapter: new Adapter() });

describe("Joso component should render as expected", () => {
  const { JSDOM } = jsdom;

  let { document } = new JSDOM("").window;
  let load = jest.fn();
  global.window = {
    ...document
  };
  global.window.gapi = { load, client: load };
  it("Renders the Joso correctly", () => {
    const component = mount(
      <MemoryRouter>
        <Joso />
      </MemoryRouter>
    );
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
  });
});

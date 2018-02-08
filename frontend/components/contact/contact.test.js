import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Contact from "./Contact";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("Contact component should render as expected", () => {
  const component = shallow(<Contact />);
  const tree = toJson(component);

  expect(tree).toMatchSnapshot();
});

import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import BlogShow from "./BlogShow";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("BlogShow component should render as expected", () => {
  const component = shallow(<BlogShow />);
  const tree = toJson(component);

  expect(tree).toMatchSnapshot();
});
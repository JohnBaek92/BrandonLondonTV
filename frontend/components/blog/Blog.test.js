import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Blog from "./Blog";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("Blog component should render as expected", () => {
  const component = shallow(<Blog />);
  const tree = toJson(component);

  expect(tree).toMatchSnapshot();
});

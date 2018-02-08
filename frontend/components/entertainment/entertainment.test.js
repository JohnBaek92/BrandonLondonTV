import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Entertainment from "./Entertainment";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("Entertainment component should render as expected", () => {
  const component = shallow(<Entertainment />);
  const tree = toJson(component);

  expect(tree).toMatchSnapshot();
});

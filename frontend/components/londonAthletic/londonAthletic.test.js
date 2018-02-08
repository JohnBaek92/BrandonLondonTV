import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LondonAthletic from "./LondonAthletic";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("LondonAthletic component should render as expected", () => {
  const component = shallow(<LondonAthletic />);
  const tree = toJson(component);

  expect(tree).toMatchSnapshot();
});

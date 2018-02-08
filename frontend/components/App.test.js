import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("App component should render as expected", () => {
  const component = shallow(<App />);
  const tree = toJson(component);

  expect(tree).toMatchSnapshot();
});

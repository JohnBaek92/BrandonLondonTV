import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";
import Joso from "./Joso";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("Joso component should render as expected", () => {
  const component = render(<Joso />);
  const tree = toJson(component);

  it("Loads the Youtube API", () => {
    expect(global.window.gapi.load).toBeCalled();
  });
});

import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Blog from "./Blog";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Blog component should render as expected", () => {
  const mockBlog = {
    title: "foo",
    subtitle: "foo",
    image: "foo",
    blurb: "foo",
    date: "foo"
  };
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          blogs: mockBlog
        })
    })
  );
  const component = shallow(<Blog />);
  const tree = toJson(component);

  expect(tree).toMatchSnapshot();
});

describe("Blogs should handle AJAX", () => {
  const mockBlogs = [
    {
      id: 1,
      title: "foo",
      subtitle: "foo",
      image: "foo",
      blurb: "foo",
      date: "foo"
    },
    {
      id: 2,
      title: "foo",
      subtitle: "foo",
      image: "foo",
      blurb: "foo",
      date: "foo"
    },
    {
      id: 3,
      title: "foo",
      subtitle: "foo",
      image: "foo",
      blurb: "foo",
      date: "foo"
    },
    {
      id: 4,
      title: "foo",
      subtitle: "foo",
      image: "foo",
      blurb: "foo",
      date: "foo"
    }
  ];

  const mockEvent = { preventDefault: jest.fn() };

  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          blogs: mockBlogs
        })
    })
  );
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<Blog />);
  });

  let fetchBlogs;

  it("Blogs are added to state on successful AJAX", () => {
    fetchBlogs = renderedComponent.instance().fetchBlogs(mockEvent);
    new Promise(resolve => {
      resolve(fetchBlogs);
    })
      .then(() => {
        renderedComponent.update();
      })
      .then(() => {
        expect(renderedComponent.state("blogs")).toEqual({ blogs: mockBlogs });
      });
  });

  it("sets an error when the fetch fails", () => {
    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          reject(new Error("failed"));
        })
    );
    let renderedComponent = shallow(<Blog />);

    new Promise(resolve => {
      resolve(renderedComponent.instance().fetchBlogs(mockEvent));
    })
      .then(() => {
        renderedComponent.update();
      })
      .then(() => {
        renderedComponent.update();
      })
      .then(() => {
        expect(renderedComponent.state("error")).toEqual(
          "There Was an Error..."
        );
      });
  });
});

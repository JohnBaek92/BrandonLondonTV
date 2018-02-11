import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import BlogShow from "./BlogShow";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("BlogShow component should render as expected", () => {
  const component = shallow(
    (() => <BlogShow props={{ match: { params: { id: "2" } } }} />)()
  );
  const tree = toJson(component);

  expect(tree).toMatchSnapshot();
});

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
  const component = shallow(
    (() => <BlogShow props={{ match: { params: { id: "2" } } }} />)()
  );
  const tree = toJson(component);

  expect(tree).toMatchSnapshot();
});

describe("Blog should handle AJAX", () => {
  const mockEvent = { preventDefault: jest.fn() };

  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          blogs: mockBlog
        })
    })
  );
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(
      (() => <BlogShow props={{ match: { params: { id: "2" } } }} />)()
    );
  });

  let fetchBlog;

  it("Blogs are added to state on successful AJAX", () => {
    fetchBlog = renderedComponent.instance().fetchBlog(mockEvent);
    new Promise(resolve => {
      resolve(fetchBlog);
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
    let renderedComponent = shallow(
      (() => <BlogShow props={{ match: { params: { id: "2" } } }} />)()
    );

    new Promise(resolve => {
      resolve(renderedComponent.instance().fetchBlog(mockEvent));
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

  let parsePost;
  let blogComponent;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            blog: null
          })
      })
    );
    blogComponent = shallow(
      (() => <BlogShow props={{ match: { params: { id: "2" } } }} />)()
    );

    parsePost = blogComponent.instance().parsePost;
  });

  it("tests 'parsePost' method returns correct object for image", () => {
    let mockPost = { content: [["image", "foo"]] };

    expect(parsePost(mockPost)).toEqual([
      <img src={"foo"} className="blog-photo is-3by2" />
    ]);
  });
  it("tests 'parsePost' method returns correct object for text", () => {
    let mockPost = { content: [["text", "foo"]] };

    expect(parsePost(mockPost)).toEqual([<div>foo</div>]);
  });
  it("tests 'parsePost' method returns correct object for title", () => {
    let mockPost = { content: [["title", "foo"]] };

    expect(parsePost(mockPost)).toEqual([
      <h1 className="title is-1 has-text-centered" style={{ color: "#03a797" }}>
        foo
      </h1>
    ]);
  });
  it("tests 'parsePost' method returns correct object for subtitle", () => {
    let mockPost = { content: [["subtitle", "foo"]] };

    expect(parsePost(mockPost)).toEqual([
      <h1
        className="subtitle is-2 has-text-centered"
        style={{ color: "#1b00ff" }}
      >
        foo
      </h1>
    ]);
  });
});

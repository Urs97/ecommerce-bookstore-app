import React from "react";
import { shallow } from "enzyme";
import Home from "../Home";

describe("Home", () => {
  test("renders Home", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});

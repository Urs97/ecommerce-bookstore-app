import React from "react";
import { shallow } from "enzyme";
import Footer from "../Footer";

describe("Footer", () => {
  test("renders Footer", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});

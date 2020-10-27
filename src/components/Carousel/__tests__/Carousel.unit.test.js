import React from "react";
import { shallow } from "enzyme";
import Carousel from "../Carousel";

describe("Carousel", () => {
  test("renders Carousel", () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper).toMatchSnapshot();
  });
});

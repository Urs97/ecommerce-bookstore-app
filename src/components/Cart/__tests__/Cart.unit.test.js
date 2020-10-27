import React from "react";
import { shallow } from "enzyme";
import Cart from "../Cart";

describe("Cart", () => {
  test("renders Cart", () => {
    const wrapper = shallow(<Cart />);
    expect(wrapper).toMatchSnapshot();
  });
});

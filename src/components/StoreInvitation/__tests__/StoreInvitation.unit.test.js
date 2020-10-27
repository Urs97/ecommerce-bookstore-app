import React from "react";
import { shallow } from "enzyme";
import StoreInvitation from "../StoreInvitation";

describe("StoreInvitation", () => {
  test("renders StoreInvitation", () => {
    const wrapper = shallow(<StoreInvitation />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from "react";
import { shallow } from "enzyme";
import CartCheckout from "../CartCheckout";

describe("CartCheckout", () => {
  test("renders CartCheckout", () => {
    const mockQuantity = 3;
    const mockSubtotal = "193.97";
    const wrapper = shallow(
      <CartCheckout quantity={mockQuantity} subtotal={mockSubtotal} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

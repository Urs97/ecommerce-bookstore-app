import React from "react";
import { shallow } from "enzyme";
import Book from "../Book";

describe("Book", () => {
  test("renders Book", () => {
    const mockBook = {
      cover_edition_key: "OL6147070M",
      title: "Frankenstein",
      price: [94, 99],
      authors: [{ name: "Marry Shelley", key: "/authors/OL25342A" }],
      key: "/works/OL450125W",
    };
    const wrapper = shallow(<Book book={mockBook} />);
    expect(wrapper).toMatchSnapshot();
  });
});

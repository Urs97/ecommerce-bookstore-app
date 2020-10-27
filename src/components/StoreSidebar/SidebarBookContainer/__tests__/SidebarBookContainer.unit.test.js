import React from "react";
import { shallow } from "enzyme";
import SidebarBookContainer from "../SidebarBookContainer";

describe("SidebarBookContainer", () => {
  test("renders SidebarBookContainer", () => {
    const mockTitle = "Top Rated Books";
    const mockBookData = [
      {
        cover_edition_key: "OL6147070M",
        title: "Frankenstein",
        price: [94, 99],
        authors: [{ name: "Marry Shelley", key: "/authors/OL25342A" }],
        key: "/works/OL450125W",
      },
      {
        cover_edition_key: "OL8000344M",
        title: "The Time Machine",
        price: [75, 65],
        authors: [{ name: "H. G. Wells", key: "/authors/OL13066A" }],
        key: "/works/OL52267W",
      },
      {
        cover_edition_key: "OL7027686M",
        title: "Journey to the Center of the Earth",
        price: [54, 38],
        authors: [{ name: "Jules Verne", key: "/authors/OL113611A" }],
        key: "/works/OL1099513W",
      },
    ];
    const wrapper = shallow(
      <SidebarBookContainer title={mockTitle} bookData={mockBookData} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

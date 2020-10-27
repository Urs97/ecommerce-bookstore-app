import React from "react";

export default React.createContext({
  state: {},
  isLoading: true,
  data: [],
  currentBooks: [],
  currentData: [],
  changeCategory: (payload) => {},
  changeCurrentPage: (payload) => {},
  submitFilterValue: (payload) => {},
  toggleMobileFilter: (payload) => {},
});

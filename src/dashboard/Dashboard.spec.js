import React from "react";
import Dashboard from "./Dashboard";
import { render } from "react-testing-library";
import Display from "../display/Display";

describe("<Dashboard />", () => {
  it("shows the controls and display", () => {
    render(<Dashboard />);
  });
});

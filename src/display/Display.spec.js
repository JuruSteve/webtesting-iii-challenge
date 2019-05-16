// Test away!
import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Display from "./Display";
import Controls from "../controls/Controls";
import { get } from "http";

describe("Display", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });
  describe("displays if gate is open/closed and if it is locked/unlocked", () => {
    it("displays open/unlocked", () => {
      // Open/Closed
      const { getByText } = render(<Display closed={false} locked={false} />);
      const unlocked = getByText(/unlocked/i).textContent;
      const open = getByText(/open/i).textContent;
      expect(unlocked).toBe("Unlocked");
      expect(open).toBe("Open");
    });

    it("displays locked/closed", () => {
      const { getByText } = render(<Display closed={true} locked={true} />);
      const closed = getByText(/closed/i).textContent;
      const locked = getByText(/locked/i).textContent;

      expect(locked).toBe("Locked");
      expect(closed).toBe("Closed");
    });
  });

  it(`displays 'Closed' if the closed prop is true and 'Open' if otherwise`, () => {
    const { getByText } = render(<Display closed={true} />);
    const closed = getByText(/closed/i).textContent;
    expect(closed).toBe("Closed");

    render(<Display closed={false} />);
    const open = getByText(/open/i).textContent;
    expect(open).toBe("Open");
  });

  it(`displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise`, () => {
    const { getByText } = render(<Display locked={true} />);
    const locked = getByText(/locked/i).textContent;
    expect(locked).toBe("Locked");
    render(<Display locked={false} />);
    const unlocked = getByText(/unlocked/i).textContent;
    expect(unlocked).toBe("Unlocked");
  });

  it(`when locked or closed use the red-led class`, () => {
    const { getByText } = render(<Display locked={true} />);
    const className = getByText(/locked/i).className;
    expect(className).toBe("led red-led");
  });
  it("when unlocked or open use the green-led class", () => {
    const { getByText } = render(<Display locked={false} />);
    const className = getByText(/unlocked/i).className;
    expect(className).toBe("led green-led");
  });
});

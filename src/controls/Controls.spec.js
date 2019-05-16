import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Controls from "./Controls";

// Test away!
describe("<Controls />", () => {
  it("provide buttons to toggle the closed and locked states.", () => {
    const { getByText, debug } = render(<Controls />);
    const lockGate = getByText(/lock gate/i).textContent;
    expect(lockGate).toBe("Lock Gate");
    const closeGate = getByText(/close gate/i).textContent;
    expect(closeGate).toBe("Close Gate");
  });
  it(`buttons' text changes to reflect the state the door will be in if clicked`, () => {
    const { getAllByText } = render(<Controls locked closed />);
    const gateButtons = getAllByText(/gate/i).map(x => x.textContent);
    expect(gateButtons).toEqual(["Unlock Gate", "Open Gate"]);
    const { getByText } = render(<Controls />);
    const closeGate = getByText(/close gate/i).textContent;
    const lockGate = getByText(/lock gate/i).textContent;
    expect(closeGate).toBe("Close Gate");
    expect(lockGate).toBe("Unlock Gate");
  });
  it("the closed toggle button is disabled if the gate is closed", () => {
    const { getByText } = render(<Controls closed locked />);
    const closeBtn = getByText(/open gate/i).getAttributeNames()[0];
    expect(closeBtn).toBe("disabled");
  });
  it("the locked toggle button is disabled if the gate is open", () => {
    const { getByText } = render(<Controls />);
    const closeBtn = getByText(/lock gate/i).getAttributeNames()[0];
    expect(closeBtn).toBe("disabled");
  });
});
// const unlocked = getByText(/unlocked/i).textContent;
// const open = getByText(/open/i).textContent;
// expect(unlocked).toBe("Unlocked");
// expect(open).toBe("Open");

// const lockGate = getByText(/lock gate/i).textContent;
// const closeGate = getByText(/close gate/i).textContent;
// expect(lockGate).toBe("Lock Gate");
// expect(closeGate).toBe("Close Gate");

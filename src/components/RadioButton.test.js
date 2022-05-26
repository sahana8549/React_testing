import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createContext } from "react";
import RadioButtons from "./RadioButton";

afterEach(cleanup);
describe("radio component", () => {
  it("render Radio button component", () => {
    render(<RadioButtons />);
  });

  it("has 3 options", () => {
    render(<RadioButtons />);

    expect(screen.getAllByRole("radio").length).toBe(3);
  });
  it("renders gender", () => {
    render(<RadioButtons />);
    const gender = screen.findAllByText("Male");
    expect(gender).toBeDefined;
  });
  it("renders gender", () => {
    render(<RadioButtons />);
    const ele = screen.getAllByRole("radio");
    expect(ele[0]).not.toBeChecked();
    userEvent.click(ele[0]);
    expect(ele[0]).not.toBeChecked();
  });
});

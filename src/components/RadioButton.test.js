import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createContext } from "react";
import { Rootprovider } from "../RootContext";
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
  it("gender change", () => {
    render(
      <Rootprovider>
        <RadioButtons />
      </Rootprovider>
    );
    const ele = screen.queryAllByRole("radio");
    expect(ele[1]).not.toBeChecked();
    fireEvent.click(ele[1]);
    expect(ele[1]).toBeChecked();
  });
});

import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  test("renders card", () => {
    render(<Card />);
  });
});

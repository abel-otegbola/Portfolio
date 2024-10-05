import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  test("renders button component", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeDefined();
  });

  // test("click event", () => {
  //   const clickMock = vitest.fn()
  //   const button = screen.getByRole("button")

  //   fireEvent.click(button)

  //   expect(clickMock).toHaveBeenCalledTimes(1)
  // })
}); 
import React from "react";
import * as stories from "./Input.stories";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

const { BaseInput, InputWithError, InputWithLabel, WideInput } =
  composeStories(stories);

describe("Input component", () => {
  it("should be render", () => {
    render(<BaseInput />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("should be wide", () => {
    render(<WideInput />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveStyle({ width: "100%" });
  });

  it("should have label", () => {
    render(<InputWithLabel />);
    const label = screen.getByLabelText(InputWithLabel.args.label);
    expect(label).toBeInTheDocument();
  });

  it("should have error message", () => {
    render(<InputWithError />);
    const error = screen.getByText(InputWithError.args.error);
    expect(error).toBeInTheDocument();
  });
});

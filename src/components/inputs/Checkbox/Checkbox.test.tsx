import React from "react";
import * as stories from "./Checkbox.stories";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

const { BaseCheckbox } = composeStories(stories);

describe("Checkbox component", () => {
  it("should be render", () => {
    render(<BaseCheckbox />);
    const checkboxText = screen.getByText(BaseCheckbox.args.text);
    expect(checkboxText).toBeInTheDocument();
  });

  it("should have clickable text", () => {
    const handleChangeSpy = jest.fn();
    render(<BaseCheckbox clickableText onChange={handleChangeSpy} />);
    const checkboxText = screen.getByText(BaseCheckbox.args.text);
    expect(checkboxText).toBeInTheDocument();
    checkboxText.click();
    expect(handleChangeSpy).toHaveBeenCalled();
  });

  it("should not have clickable text", () => {
    const handleChangeSpy = jest.fn();
    render(<BaseCheckbox onChange={handleChangeSpy} />);
    const checkboxText = screen.getByText(BaseCheckbox.args.text);
    expect(checkboxText).toBeInTheDocument();
    checkboxText.click();
    expect(handleChangeSpy).not.toHaveBeenCalled();
  });
});

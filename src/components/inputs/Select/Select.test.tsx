import React from "react";
import * as stories from "./Select.stories";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

const { BaseSelect } = composeStories(stories);

describe("Select component", () => {
  it("should be render", () => {
    render(<BaseSelect wide />);
    const select = screen.getByText(BaseSelect.args.placeholder);
    expect(select).toBeInTheDocument();
  });
});

import React from "react";
import * as stories from "./Button.stories";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

const { DefaultButton, ButtonDisabled, ButtonWide } = composeStories(stories);

describe("Button component", () => {
  it("should be render on screen", () => {
    render(<DefaultButton />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  it("should be wide", () => {
    render(<ButtonWide />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveStyle({
      width: "100%",
    });
  });

  it("should be disabled", () => {
    const onClickSpy = jest.fn();
    render(<ButtonDisabled onClick={onClickSpy} />);
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
    btn.click();
    expect(onClickSpy).not.toHaveBeenCalled();
  });
});

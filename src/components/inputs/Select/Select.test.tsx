import React from "react";
import * as stories from "./Select.stories";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

const { BaseSelect, WideSelect, WideOptionsSelect } = composeStories(stories);

const checkSelectRender = (Component = BaseSelect) => {
  render(<Component wide />);
  const select = screen.getByText(BaseSelect.args.placeholder);
  expect(select).toBeInTheDocument();
  return select;
};

describe("Select component", () => {
  it("should be render", () => {
    checkSelectRender();
  });

  it("should be wide", () => {
    const select = checkSelectRender(WideSelect).closest("div");
    expect(select).toHaveStyle({
      width: "100%",
    });
  });

  it("should open options list", () => {
    const select = checkSelectRender();
    select.click();
    const lastOptionInList =
      BaseSelect.args.options[BaseSelect.args.options.length - 1];
    const findLastOption = screen.getByText(lastOptionInList.label);
    expect(findLastOption).toBeInTheDocument();
  });

  it("should have wide options", () => {
    // const select = checkSelectRender(WideOptionsSelect);
    // select.click();
    // const firstLongOption = WideOptionsSelect.args.options[0];
    // const optionItem = screen.getByText(firstLongOption.label).closest("div");
    // const optionsList = optionItem.closest("div");
    // screen.debug();
    // console.log(optionsList);
    // expect(optionsList).toHaveStyle({ width: "" });
    throw new Error("Test not work. Need to re-implement it");
  });

  it("should render selected options label", () => {
    const select = checkSelectRender();
    select.click();
    const lastOptionInList =
      BaseSelect.args.options[BaseSelect.args.options.length - 1];
    const findLastOption = screen.getByText(lastOptionInList.label);
    findLastOption.click();
    const findLastOptionSelectedLabel = screen.getByText(
      lastOptionInList.label
    );
    expect(findLastOptionSelectedLabel).toBeInTheDocument();
  });

  it("should have label", () => {
    const select = checkSelectRender();
    const label = screen.getByText(BaseSelect.args.label);
    expect(label).toBeInTheDocument();
  });
});

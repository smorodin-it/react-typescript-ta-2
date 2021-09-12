import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./Input";

export default {
  title: "Component/Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const BaseInput = Template.bind({});
BaseInput.args = {
  placeholder: "Placeholder",
};

export const WideInput = Template.bind({});
WideInput.args = {
  wide: true,
  placeholder: "Placeholder",
};

export const InputWithLabel = Template.bind({});
InputWithLabel.args = {
  label: "Label",
  name: "test-input",
  placeholder: "Placeholder",
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  label: "Label",
  name: "test-input",
  error: "validation error",
  placeholder: "Placeholder",
};

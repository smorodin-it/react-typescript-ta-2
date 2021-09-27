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
  ...BaseInput.args,
  wide: true,
};

export const InputWithLabel = Template.bind({});
InputWithLabel.args = {
  ...BaseInput.args,
  label: "Label",
  name: "test-input",
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  ...InputWithLabel.args,
  error: "validation error",
};

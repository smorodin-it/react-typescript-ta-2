import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from "./Select";

export default {
  title: "Component/Input",
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const BaseSelect = Template.bind({});
BaseSelect.args = {
  label: "Label",
  placeholder: "Placeholder",
  error: "Some validation error",
};

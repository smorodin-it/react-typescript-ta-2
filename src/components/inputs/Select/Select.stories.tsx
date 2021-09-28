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
  wide: false,
  wideOptions: false,
  options: [
    {
      label:
        "Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1",
      value: "item 1",
    },
    { label: "Item 2", value: "item 2" },
    { label: "Item 3", value: "item 3" },
    { label: "Item 4", value: "item 4" },
    { label: "Item 5", value: "item 5" },
    { label: "Item 6", value: "item 6" },
  ],
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { Medium16Font } from "../../fonts/Fonts";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Button_ = Template.bind({});
Button_.args = {
  // children: "Button",
  children: <Medium16Font>Button</Medium16Font>,
};

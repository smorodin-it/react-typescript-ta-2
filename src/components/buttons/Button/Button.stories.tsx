import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  text: "Button",
};

export const ButtonWide = Template.bind({});
ButtonWide.args = {
  ...DefaultButton.args,
  wide: true,
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  ...DefaultButton.args,
  disabled: true,
};

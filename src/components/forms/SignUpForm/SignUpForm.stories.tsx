import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SignUpForm } from "./SignUpForm";

export default {
  title: "Component/Forms",
  component: SignUpForm,
  argTypes: {},
} as ComponentMeta<typeof SignUpForm>;

const Template: ComponentStory<typeof SignUpForm> = (args) => (
  <SignUpForm {...args} />
);

export const SignUpForm_ = Template.bind({});
SignUpForm_.args = {};

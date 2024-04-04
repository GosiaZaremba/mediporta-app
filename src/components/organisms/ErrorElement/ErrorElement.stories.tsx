import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ErrorElement } from "./ErrorElement";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../themes/theme";
import { CssBaseline } from "@mui/material";

const meta: Meta<typeof ErrorElement> = {
  title: "/components/organisms/ErrorElement",
  component: ErrorElement,
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      );
    },
  ],
  argTypes: {
    errorMsg: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorElement>;

export const Default: Story = {
  args: {
    errorMsg: "Some Error that occured!",
  },
};

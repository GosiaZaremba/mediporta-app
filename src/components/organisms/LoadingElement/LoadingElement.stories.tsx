import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { LoadingElement } from "./LoadingElement";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../themes/theme";
import { CssBaseline } from "@mui/material";

const meta: Meta<typeof LoadingElement> = {
  title: "/components/organisms/LoadingElement",
  component: LoadingElement,
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
};

export default meta;
type Story = StoryObj<typeof LoadingElement>;

export const Default: Story = {};

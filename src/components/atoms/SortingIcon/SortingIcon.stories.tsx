import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SortingIcon } from "./SortingIcon";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../themes/theme";
import { CssBaseline } from "@mui/material";

const meta: Meta<typeof SortingIcon> = {
  title: "/components/atoms/SortingIcon",
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Story />
        </Provider>
      </ThemeProvider>
    ),
  ],
  component: SortingIcon,
};

export default meta;
type Story = StoryObj<typeof SortingIcon>;

export const Default: Story = {};

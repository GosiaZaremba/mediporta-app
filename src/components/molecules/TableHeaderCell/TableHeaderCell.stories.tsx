import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TableHeaderCell } from "./TableHeaderCell";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../themes/theme";
import { CssBaseline } from "@mui/material";

const meta: Meta<typeof TableHeaderCell> = {
  title: "/components/molecules/TableHeaderCell",
  component: TableHeaderCell,
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <CssBaseline />
            <Story />
          </Provider>
        </ThemeProvider>
      );
    },
  ],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TableHeaderCell>;

export const Default: Story = {
  args: {
    cellName: "Cell Name",
  },
};

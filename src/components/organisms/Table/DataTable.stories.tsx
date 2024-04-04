import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../themes/theme";
import { CssBaseline } from "@mui/material";

const meta: Meta<typeof DataTable> = {
  title: "/components/organisms/DataTable",
  component: DataTable,
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
  argTypes: {
    data: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    data: [
      { name: "Some name", count: 123 },
      { name: "Some name", count: 123 },
      { name: "Some name", count: 123 },
      { name: "Some name", count: 123 },
      { name: "Some name", count: 123 },
      { name: "Some name", count: 123 },
    ],
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";

import Toast from "./Toast";

const meta = {
  component: Toast,
  title: "Toast",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    Toast: {
      id: "1",
      message: "info",
      type: "info",
      duration: 4000,
    },
  },
};

export const Success: Story = {
  args: {
    Toast: {
      id: "2",
      message: "success",
      type: "success",
      duration: 4000,
    },
  },
};

export const Error: Story = {
  args: {
    Toast: {
      id: "3",
      message: "error",
      type: "error",
      duration: 4000,
    },
  },
};

export const Warning: Story = {
  args: {
    Toast: {
      id: "4",
      message: "warning",
      type: "warning",
      duration: 4000,
    },
  },
};

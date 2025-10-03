import type { Meta, StoryObj } from "@storybook/react-vite";

import Input from "./Input";

const meta = {
  component: Input,
  title: "Input",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Input: {
      id: "1",
      title: "Test Input",
      type_password: false,
      cleareble: true,
    },
  },
};

export const Password: Story = {
  args: {
    Input: {
      id: "2",
      title: "Test Toast",
      type_password: true,
      cleareble: false,
    },
  },
};

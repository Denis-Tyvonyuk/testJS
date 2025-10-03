import type { Meta, StoryObj } from "@storybook/react-vite";

import SidebarMenu from "./SidebarMenu";

const meta = {
  component: SidebarMenu,
  title: "Sidebar",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Input: {
      id: "1",
    },
  },
};

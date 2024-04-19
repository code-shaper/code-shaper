import { TextField } from './TextField';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    children: 'Hello, World!',
  },
} satisfies Story;

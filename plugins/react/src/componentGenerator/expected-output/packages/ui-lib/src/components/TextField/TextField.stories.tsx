import { TextField } from './TextField';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: 'TextField',
  },
} satisfies Story;

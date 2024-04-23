import { AppHeader } from './AppHeader';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/AppHeader',
  component: AppHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {} satisfies Story;

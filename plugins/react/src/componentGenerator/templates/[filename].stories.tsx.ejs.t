import type { Meta, StoryObj } from '@storybook/react';
import { <%= itemNamePascalCase %> } from './<%= itemNamePascalCase %>';

const meta = {
  title: 'Components/<%= itemNamePascalCase %>',
  component: <%= itemNamePascalCase %>,
  tags: ['autodocs'],
} satisfies Meta<typeof <%= itemNamePascalCase %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    children: '<%= itemNamePascalCase %>',
  },
} satisfies Story;

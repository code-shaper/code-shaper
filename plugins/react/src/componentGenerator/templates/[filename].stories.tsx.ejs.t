import { <%= itemNamePascalCase %> } from './<%= itemNamePascalCase %>';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/<%= itemNamePascalCase %>',
  component: <%= itemNamePascalCase %>,
  tags: ['autodocs'],
} satisfies Meta<typeof <%= itemNamePascalCase %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: '<%= itemNamePascalCase %>',
  },
} satisfies Story;

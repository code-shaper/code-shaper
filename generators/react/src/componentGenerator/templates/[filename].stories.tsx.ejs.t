import { <%= itemNamePascalCase %> } from './<%= itemNamePascalCase %>';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/<%= itemNamePascalCase %>',
  component: <%= itemNamePascalCase %>,
  tags: ['autodocs'],
  argTypes: {
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof <%= itemNamePascalCase %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    children: 'Hello, World!',
  },
} satisfies Story;

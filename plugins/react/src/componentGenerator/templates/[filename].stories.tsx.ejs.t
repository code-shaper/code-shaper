import { Story, Meta } from '@storybook/react';
import { <%= itemNamePascalCase %> } from './<%= itemNamePascalCase %>';

export default {
  title: 'Components/<%= itemNamePascalCase %>',
  component: <%= itemNamePascalCase %>,
} as Meta;

const Template: Story = (args) => {
  return <<%= itemNamePascalCase %>>{args.children}</<%= itemNamePascalCase %>>;
};

export const <%= itemNamePascalCase %>Story = Template.bind({});
<%= itemNamePascalCase %>Story.storyName = '<%= itemNamePascalCase %>';
<%= itemNamePascalCase %>Story.args = {
  children: '<%= itemNamePascalCase %>',
};

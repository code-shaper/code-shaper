import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { <%= componentName %> } from './<%= componentName %>';

export default {
  title: 'Components/<%= componentName %>',
  component: <%= componentName %>,
} as Meta;

const Template: Story = (args) => {
  return <<%= componentName %>>{args.children}</<%= componentName %>>;
};

export const <%= componentName %>Story = Template.bind({});
<%= componentName %>Story.storyName = '<%= componentName %>';
<%= componentName %>Story.args = {
  children: 'Headlines',
};

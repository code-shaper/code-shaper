import { Story, Meta } from '@storybook/react';
import { TextField } from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta;

const Template: Story = (args) => {
  return <TextField>{args.children}</TextField>;
};

export const TextFieldStory = Template.bind({});
TextFieldStory.storyName = 'TextField';
TextFieldStory.args = {
  children: 'TextField',
};

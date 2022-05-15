import { render, screen } from '../../test/test-utils';
import { <%= componentName %> } from './<%= componentName %>';

describe('<<%= componentName %> />', () => {
  test('renders correctly', () => {
    render(<<%= componentName %>><%= componentName %></<%= componentName %>>);
    expect(screen.getByText('<%= componentName %>')).toBeInTheDocument();
  });
});

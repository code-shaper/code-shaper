import { render, screen } from '../../test/test-utils';
import { <%= componentName %> } from './<%= componentName %>';

describe('<<%= componentName %> />', () => {
  test('renders correctly', () => {
    render(<<%= componentName %>>Headlines</<%= componentName %>>);
    expect(screen.getByText('Headlines')).toBeInTheDocument();
  });
});

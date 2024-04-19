import { render, screen } from '@/test/test-utils';
import { <%= itemNamePascalCase %> } from './<%= itemNamePascalCase %>';

describe('<<%= itemNamePascalCase %> />', () => {
  test('renders correctly', () => {
    render(<<%= itemNamePascalCase %> />);
    expect(screen.getByText('<%= itemNameCapitalCase %>')).toBeInTheDocument();
  });
});

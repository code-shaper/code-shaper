import { <%= itemNamePascalCase %> } from './<%= itemNamePascalCase %>';
import { render, screen } from '@/test/test-utils';

describe('<<%= itemNamePascalCase %> />', () => {
  it('should render correctly', () => {
    render(<<%= itemNamePascalCase %>>Hello, World!</<%= itemNamePascalCase %>>);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});

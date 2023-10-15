import { <%= itemNamePascalCase %> } from './<%= itemNamePascalCase %>';
import { render, screen } from '@/test/test-utils';

describe('<<%= itemNamePascalCase %> />', () => {
  it('should render correctly', () => {
    render(<<%= itemNamePascalCase %>><%= itemNamePascalCase %></<%= itemNamePascalCase %>>);
    expect(screen.getByText('<%= itemNamePascalCase %>')).toBeInTheDocument();
  });
});

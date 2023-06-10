import { render, screen } from '../../test/test-utils';
import { <%= itemNamePascalCase %> } from './<%= itemNamePascalCase %>';

describe('<<%= itemNamePascalCase %> />', () => {
  it('should render correctly', () => {
    render(<<%= itemNamePascalCase %>><%= itemNamePascalCase %></<%= itemNamePascalCase %>>);
    expect(screen.getByText('<%= itemNamePascalCase %>')).toBeInTheDocument();
  });
});

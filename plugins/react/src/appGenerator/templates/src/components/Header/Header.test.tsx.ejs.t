import { Header } from './Header';
import { render, screen } from '../../test/test-utils';

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<Header />);
    expect(screen.getByText('<%= itemNameCapitalCase %>')).toBeInTheDocument();
  });
});

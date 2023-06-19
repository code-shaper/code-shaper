import { render, screen } from '@/test/test-utils';
import { Header } from './Header';

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<Header />);
    expect(screen.getByText('Movie Magic')).toBeInTheDocument();
  });
});

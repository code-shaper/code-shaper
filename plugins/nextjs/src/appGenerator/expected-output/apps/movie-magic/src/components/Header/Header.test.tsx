import { render, screen } from '@/test/test-utils';
import { Header } from './Header';

describe('<Header />', () => {
  test('renders correctly', () => {
    render(<Header />);
    expect(screen.getByText('Movie Magic')).toBeInTheDocument();
  });
});

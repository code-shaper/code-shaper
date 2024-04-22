import { AppHeader } from './AppHeader';
import { render, screen } from '@/test/test-utils';

describe('<AppHeader />', () => {
  it('should render correctly', () => {
    render(<AppHeader />);
    expect(screen.getByText('Movie Magic')).toBeInTheDocument();
  });
});

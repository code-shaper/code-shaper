import { render, screen } from '@/test/test-utils';
import { SettingsPage } from './SettingsPage';

describe('<SettingsPage />', () => {
  test('renders correctly', () => {
    render(<SettingsPage />);
    expect(screen.getByText('Settings Page')).toBeInTheDocument();
  });
});

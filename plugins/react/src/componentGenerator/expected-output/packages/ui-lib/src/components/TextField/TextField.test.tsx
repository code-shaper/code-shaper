import { render, screen } from '../../test/test-utils';
import { TextField } from './TextField';

describe('<TextField />', () => {
  test('renders correctly', () => {
    render(<TextField>TextField</TextField>);
    expect(screen.getByText('TextField')).toBeInTheDocument();
  });
});

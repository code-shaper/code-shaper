import { TextField } from './TextField';
import { render, screen } from '../../test/test-utils';

describe('<TextField />', () => {
  it('should render correctly', () => {
    render(<TextField>TextField</TextField>);
    expect(screen.getByText('TextField')).toBeInTheDocument();
  });
});

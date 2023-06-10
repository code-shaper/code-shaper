import { render, screen } from '../../test/test-utils';
import { TextField } from './TextField';

describe('<TextField />', () => {
  it('should render correctly', () => {
    render(<TextField>TextField</TextField>);
    expect(screen.getByText('TextField')).toBeInTheDocument();
  });
});

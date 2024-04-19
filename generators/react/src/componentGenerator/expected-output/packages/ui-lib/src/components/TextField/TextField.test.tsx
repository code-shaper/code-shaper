import { TextField } from './TextField';
import { render, screen } from '@/test/test-utils';

describe('<TextField />', () => {
  it('should render correctly', () => {
    render(<TextField>Hello, World!</TextField>);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});

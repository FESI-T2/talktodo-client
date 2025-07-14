import { render, screen } from '@testing-library/react';

import Home from '../app/page';

describe('홈페이지', () => {
  it('렌더링이 잘 되는가', () => {
    render(<Home />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});

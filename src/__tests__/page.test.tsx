import { render, screen } from '@testing-library/react';

import Home from '../app/page';

describe('홈페이지', () => {
  it('렌더링이 잘 되는가', () => {
    render(<Home />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('넥스트 로고가 나오는가', () => {
    render(<Home />);

    const logo = screen.getByAltText('Next.js logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('width', '180');
    expect(logo).toHaveAttribute('height', '38');
  });
});

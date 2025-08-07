import { render, screen, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('컴포넌트가 정상적으로 렌더링된다.', () => {
    render(<LoginForm />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  /*
  차후에 밑으로 변경
  it('카카오 로그인 버튼 클릭 링크를 이동한다.', async () => {
    render(<LoginForm />);
    const kakaoButton = screen.getByRole('button');
    await fireEvent.click(kakaoButton);
    expect(window.location.href).toBe('http://localhost/');
  });*/

  // 테스트용 모킹
  it('카카오 로그인 버튼 클릭 시 /auth/kakao/login으로 이동한다.', async () => {
    const mockRouter = use();
    const mockPush = mockRouter.push;

    render(<LoginForm />);
    const kakaoButton = screen.getByRole('button');
    kakaoButton.click();

    await fireEvent.click(kakaoButton);

    expect(mockPush).toHaveBeenCalledWith('/kakao-login');
  });
});

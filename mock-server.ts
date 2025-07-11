import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

const app = express();
const PORT = 3001;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// 카카오 로그인 API 모킹
app.post('/api/user/kakao-login', (req, res) => {
  console.log('🔥 카카오 로그인 API 호출됨:', req.body);

  const mockResponse = {
    access_token: 'mock_access_token_' + Date.now(),
  };

  res.cookie('refresh_token', 'mock_refresh_token_' + Date.now(), {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json(mockResponse);
});

// 토큰 갱신 API
app.post('/api/auth/refresh', (req, res) => {
  console.log('🔄 토큰 갱신 API 호출됨');

  const refreshToken = req.cookies.refresh_token;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token not found' });
  }

  const newTokens = {
    access_token: 'new_access_token_' + Date.now(),
  };

  res.cookie('refresh_token', 'new_refresh_token_' + Date.now(), {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json(newTokens);
});

app.listen(PORT, () => {
  console.log(`🚀 Express 모킹 서버가 포트 ${PORT}에서 실행 중입니다!`);
  console.log(`   http://localhost:${PORT}`);
  console.log(`   테스트: http://localhost:${PORT}/api/test`);
});

export default app;

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // 기본 URL 설정
    baseUrl: 'http://localhost:3000',

    // 테스트 파일 위치
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    // 스크린샷 및 비디오 설정
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    video: true,

    // 뷰포트 설정
    viewportWidth: 1280,
    viewportHeight: 720,

    // 타임아웃 설정
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,

    // 브라우저 설정
    chromeWebSecurity: false,
  },

  component: {
    // 컴포넌트 테스트 설정
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },

  // 일반 설정
  watchForFileChanges: true,
  trashAssetsBeforeRuns: true,

  // 환경 변수
  env: {
    // 커스텀 환경 변수들
  },
});

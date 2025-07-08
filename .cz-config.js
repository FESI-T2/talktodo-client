module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat : 새로운 기능, 페이지 추가',
    },
    {
      value: 'rename',
      name: 'rename : 파일이나 폴더명 변경',
    },
    {
      value: 'fix',
      name: 'fix : 버그 수정',
    },
    {
      value: 'env',
      name: 'env : 프로젝트 세팅 및 package.json 수정',
    },
    {
      value: 'docs',
      name: 'docs : 문서 관련',
    },
    {
      value: 'style',
      name: 'style : 코드 스타일 수정',
    },
    {
      value: 'refactor',
      name: 'refactor : 코드 리펙토링',
    },
    {
      value: 'test',
      name: 'test : 테스트 관련',
    },
    {
      value: 'remove',
      name: 'remove : 파일 삭제하는 작업만 수행한 경우',
    },
    {
      value: 'design',
      name: 'design : css 수정',
    },
    {
      value: 'chore',
      name: 'chore : 빌드 및 프로덕션 코드와 관련 없는 수정',
    },
    {
      value: 'ci',
      name: 'ci : CI/CD 관련 수정',
    },
    {
      value: 'perf',
      name: 'perf : 성능 개선',
    },
  ],

  messages: {
    type: '변경사항의 유형을 선택하세요:',
    subject: '변경사항에 대한 간단하고 명확한 설명을 작성하세요:\n',
    body: "변경사항에 대한 자세한 설명을 작성하세요 (선택사항). 줄바꿈은 '|'로 구분:\n",
    breaking: 'BREAKING CHANGES가 있다면 설명해주세요 (선택사항):\n',
    footer: '관련된 이슈 번호가 있다면 작성해주세요 (예: closes #123, fixes #456):\n',
    confirmCommit: '위 커밋 메시지로 진행하시겠습니까?',
  },

  allowCustomScopes: false,
  skipQuestions: ['scope'],
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 100,
};

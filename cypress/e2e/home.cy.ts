describe('홈페이지 E2E 테스트', () => {
  beforeEach(() => {
    // 홈페이지 방문
    cy.visit('/');
  });

  it('페이지 제목과 메인 콘텐츠가 표시되어야 한다', () => {
    // 페이지 제목 확인 (Next.js 기본 제목)
    cy.title().should('include', 'Create Next App');

    // Next.js 로고 확인
    cy.get('img[alt="Next.js logo"]').should('be.visible');

    // 메인 텍스트 확인
    cy.contains('Get started by editing').should('be.visible');
    cy.contains('src/app/page.tsx').should('be.visible');
    cy.contains('Save and see your changes instantly').should('be.visible');
  });

  it('외부 링크들이 올바르게 작동해야 한다', () => {
    // Deploy 버튼 확인
    cy.get('a').contains('Deploy now').should('have.attr', 'href').and('include', 'vercel.com');

    // Docs 버튼 확인
    cy.get('a').contains('Read our docs').should('have.attr', 'href').and('include', 'nextjs.org/docs');
  });

  it('푸터 링크들이 있어야 한다', () => {
    // 푸터의 링크들 확인
    cy.get('footer').within(() => {
      cy.get('a').contains('Learn').should('have.attr', 'href').and('include', 'nextjs.org/learn');

      cy.get('a').contains('Examples').should('have.attr', 'href').and('include', 'vercel.com/templates');

      cy.get('a').contains('Go to nextjs.org').should('have.attr', 'href').and('include', 'nextjs.org');
    });
  });
});

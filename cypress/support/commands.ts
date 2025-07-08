// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/// <reference types="cypress" />

// 커스텀 명령어들을 여기에 추가
/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * 특정 텍스트를 가진 요소를 찾는 커스텀 명령어
       * @param text 찾을 텍스트
       * @example cy.getByText('Submit')
       */
      getByText(text: string): Chainable<JQuery<HTMLElement>>;

      /**
       * data-testid로 요소를 찾는 커스텀 명령어
       * @param testId 테스트 ID
       * @example cy.getByTestId('submit-button')
       */
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;

      /**
       * 로그인을 시뮬레이션하는 커스텀 명령어 (예시)
       * @param username 사용자명
       * @param password 비밀번호
       * @example cy.login('user@example.com', 'password123')
       */
      login(username: string, password: string): Chainable<void>;
    }
  }
}

// 커스텀 명령어 구현
Cypress.Commands.add('getByText', (text: string) => {
  cy.contains(text);
});

Cypress.Commands.add('getByTestId', (testId: string) => {
  cy.get(`[data-testid="${testId}"]`);
});

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.session([username, password], () => {
    cy.visit('/login');
    cy.get('[data-testid="username"]').type(username);
    cy.get('[data-testid="password"]').type(password);
    cy.get('[data-testid="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});

export {};

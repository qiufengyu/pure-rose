describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3030');
  });

  it('Invalid user', () => {
    cy.get('[data-cy=login-tip]').contains('Oops, please login first.');
  });

  it('Login test', () => {
    cy.get('[data-cy=login-button]').click();
    cy.get('[data-cy=input-username]').type('Cypress');
    cy.get('[data-cy=input-password]').type('randomValue');
    cy.get('[data-cy=login-submit]').click();
    cy.get('[data-cy=login-error-msg]').contains('The username and password were not recognised.');
  });

});

describe('App Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3030');
  });

  it('Title rendered', () => {
    cy.get('[data-cy=app-name]').contains('Pure Rose');
  });

  it('Tab rendered', () => {
    cy.get('[data-cy=tab-home]').contains('Home');
    cy.get('[data-cy=tab-product]').contains('Product');
    cy.get('[data-cy=tab-rose]').contains('Rose');
  });

});

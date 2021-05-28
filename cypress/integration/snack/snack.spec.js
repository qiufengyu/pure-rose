describe('Snack Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3030');
    cy.get('button[data-cy=tab-rose]').click();
  });

  it('Select date', () => {
    cy.get('input[data-cy=date-input]')
      .type('5/6/2021', {force: true})
      .should('have.value', '5/6/2021');
    cy.get('p').contains('Thu May 06 2021');
  });

});

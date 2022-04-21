describe('Error page', function () {
  it('successfully loads', function () {
    cy.visit('/before-you-start', {failOnStatusCode: false});
    cy.get('h1').should('contain', 'there is a problem with the service');
  });
});

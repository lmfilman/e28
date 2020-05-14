
describe('home-page', () => {
  it('finds a random recipe', () => {
    // Visit homepage
    cy.visit('/');

    // Click 'find random recipe' button
    cy.wait(1000);
    cy.get('[data-test="home-page-button"]').click({ force: true });

    // Click recipe link
    cy.wait(1000);
    cy.get('[data-test="home-page-recipe-link"]').click({ force: true });

    // Verify on recipe page
    cy.get('#recipe-page').should('exist');;
  })
})
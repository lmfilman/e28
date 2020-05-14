
describe('recipes-page', () => {
  it('lists multiple recipes', () => {
    // Visit recipes list
    cy.visit('/recipes');
    cy.get('#recipes').should('exist');

    // Click first recipe link
    cy.get('[data-test="recipes-page-recipe-link"]').first().click();

    // Verify on recipe page
    cy.get('#recipe-page').should('exist');;
  })
})

describe('add-a-recipe-page', () => {
  it('validates the form', () => {
    // Visit Add a Recipe page
    cy.visit('/admin');
    cy.get('#add-a-recipe').should('exist');

    // Click submit
    cy.get('[data-test="create-recipe-submit"]').click();

    // See error
    cy.get('[data-test="create-recipe-form-errors"]').should('exist');
  })

  it('adds a recipe', () => {
    // Visit Add a Recipe page
    cy.visit('/admin');
    cy.get('#add-a-recipe').should('exist');

    // Fill out name
    cy.get('#name').type('Automated Test Recipe');

    // Fill out reference type
    cy.get('.multiselect').first().click();
    cy.get('.multiselect li').first().click();

    // Fill out reference
    cy.get('#reference').type('http://www.google.com')

    // Fill out number of times cooked
    cy.get('#number-of-times-cooked').type('{backspace}1')

    // Click liked
    cy.get('#liked').check();

    // Click submit
    cy.get('[data-test="create-recipe-submit"]').click();

    // See success message
    cy.get('[data-test="create-recipe-success"]').should('exist');
  })
})
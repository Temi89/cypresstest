context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.virginmedia.com');
    Cypress.on('uncaught:exception', () =>
      false,
    );
    cy.get('#consent_prompt_submit').click();
    cy.injectAxe();
  });

  it('Has no detectable a11y violations on load', () => {
    // Test the page at initial load
    cy.checkA11y();
  });

  it('.type() - type into a DOM element', () => {
    cy.percySnapshot('Before');
    // https://on.cypress.io/type
    cy.get('.signin-link-content');

    cy.percySnapshot('After');
  });
});

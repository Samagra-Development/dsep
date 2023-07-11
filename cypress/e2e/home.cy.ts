describe('Home tests', () => {
    it('should visit the homepage', () => {
      cy.visit('https://ui.dsep.samagra.io/courses');
      cy.contains('IIT Bombay').should('be.visible');
      cy.contains('Add to List').first().click();
      cy.contains('Go To Class').should('be.visible');
    });
  });
describe('First', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get("#btn-login").click()
    cy.get("main div.toolbar__title").contains('Login2').should('be.visible')
  })
})
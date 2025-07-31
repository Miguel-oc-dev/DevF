describe('Prueba del flujo de inicio de sesión', () => {
  it('Debería permitir al usuario iniciar sesión con credenciales válidas', () => {
    cy.visit('/')

    cy.get('input[name="email"]').type('usuario@example.com')
    cy.get('input[name="password"]').type('123456')
    cy.get('button[type="submit"]').click()

    cy.contains('Bienvenido').should('be.visible')
  })
})

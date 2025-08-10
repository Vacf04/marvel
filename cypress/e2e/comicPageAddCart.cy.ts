describe('Cart', () => {
  it('Testar funcionalidades de entrar na página inicial e adicionar ao carrinho', () => {
    cy.visit('/')

    cy.get('[data-cy="comic-card"]').first().click();

    cy.wait(1000);

    cy.get('[data-cy="add-cart-comic"]').click();

    cy.wait(1000);

    cy.get('[data-cy="cart-link"]').click();

    cy.wait(1000);

    cy.get('[data-cy="cart-comics-list"]').should('have.length', 1);

 });;
});
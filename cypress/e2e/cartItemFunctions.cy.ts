describe('Cart', () => {
  it('Testar funcionalidades do carrinho: Adicionar, Mudar quantidade e remover', () => {
    cy.visit('/')

    cy.get('[data-cy="cart-add-button"]').first().click();

    cy.get('[data-cy="cart-link"]').click();

    cy.wait(1000);

    cy.get('[data-cy="cart-comics-list"]').should('have.length', 1);

    cy.wait(1000);

    cy.get('[data-cy="cart-item-plus"]').click();

    cy.get('[data-cy="cart-item-quantity"]').contains("2");

    cy.wait(1000);

    cy.get('[data-cy="cart-item-minus"]').click();

    cy.get('[data-cy="cart-item-quantity"]').contains("1");

    cy.wait(1000);

    cy.get('[data-cy="cart-item-remove"]').click();

    cy.get('[data-cy="cart-empty-title"]').contains("Your Cart is Empty");
 });;
});
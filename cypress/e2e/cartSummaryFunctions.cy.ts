describe('Coupon', () => {
  it('Testar funcionalidade de adicionar cupom', () => {
    cy.visit('/')

    cy.get('[data-cy="cart-add-button"]').first().click();

    cy.wait(1000);

    cy.get('[data-cy="cart-link"]').click();

    cy.wait(1000);

    cy.get('body').then(($body) => {
        if ($body.find('[data-cy="rare-item-cart"]').is(':visible')) {
            cy.get('[data-cy="input"]').type('RARE_COUPON');
        } else {
            cy.get('[data-cy="input"]').type('COMMON_COUPON');
        }
    });

    cy.wait(1000);

    cy.get('[data-cy="button-coupon"]').click();

    cy.get('[data-cy="message-coupon"]').should('be.visible');
 });;
});
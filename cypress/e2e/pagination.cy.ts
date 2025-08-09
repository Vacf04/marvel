describe('Paginação', () => {
  it('Deve entrar na página inicial, passar para a próxima página, voltar uma página, ir para a última página e voltar para a primeira.', () => {
    cy.visit('/')

    cy.get('[data-cy="next-page-button"]').click();

    cy.get('[data-cy="prev-page-button"]').click();

    cy.get('[data-cy="last-page-button"]').click();

    cy.get('[data-cy="first-page-button"]').click();
  });
});
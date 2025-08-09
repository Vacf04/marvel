describe('Rares', () => {
  it('Verificar se tem 10% de raros', () => {
    cy.visit('/')

    cy.get('[data-cy="rare-comic"]').as('rareComics');

    cy.get('[data-cy="comic-card"]').as('AllComics');

    cy.get('@AllComics').then(($comics) => {
  const totalComics = $comics.length;
  cy.get('@rareComics').then(($rareComics) => {
        const totalRares = $rareComics.length;
        const expectedRares = Math.round(totalComics * 0.1);
        expect(totalRares).to.be.equal(expectedRares);
      });
 });;
});
});
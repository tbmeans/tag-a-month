describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the resources text', () => {
    cy.get('h2')
    .contains('Tag an entire month of saves with one click');
  })
  it('renders the image', () => {
    cy.get('svg')
    .should('be.visible')
    .and(($svg) => {
      expect($svg[0].width.baseVal.value).to.be.greaterThan(0);
    })
  })
})

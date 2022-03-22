describe('Custom Geo location params', () => {
    it('Get the custom geo location', () => {
      cy.visitWithMockGeo('./test.html', 51.507351, -0.127758)
    })
  })
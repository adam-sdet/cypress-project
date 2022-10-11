describe('Promethium homepage spec', () => {
  beforeEach(() => {
    cy.visit('https://www.promethium.ai/')
  })
  it('you should see Promethium, Promethium Collaborative Data Analytics,  Never miss an opportunity', () => {
    cy.get('[alt="Promehtium Black New Logo.png"]').should('be.visible')
    cy.get('h1').should('have.text', 'Promethium Collaborative Data Analytics')
    cy.get('h3').should('include.text', 'Never miss an opportunity')

  })

  it('if required should appear when you click on Try now tab from home page and then Sign up button in a new window', () => {
    
    cy.contains('Try Now').should($a => {
      expect($a.attr('href'), 'href').to.equal('https://onboarding.pm61data.cloud/user/register')
      expect($a.attr('target'), 'target').to.equal('_blank')
      $a.attr('target', '_self')
    }).click()
    cy.get('button[type="submit"]').click()
    cy.get('.ant-form-item-required').should('have.length', 5)
    cy.get('.ant-input').should('include.text', '')
    cy.get('.ant-form-item-explain-error').should('include.text', 'required')
  })
})
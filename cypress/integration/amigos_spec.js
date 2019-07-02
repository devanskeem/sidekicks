describe('Look at events', () => {
    it ('should have active events', () => {
        cy.visit('/events')
        cy.get('div').should('have.class')
        cy.get('button:last').click()
    })

    
})
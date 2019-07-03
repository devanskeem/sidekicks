describe('Look at events', () => {
    it ('should have active events', () => {
        cy.visit('/events')
        cy.get('div').should('have.class')
        cy.get('button:last').click()
    })

})

describe('Create an event', () => {
    it('View events', () => {
        cy.visit('/search')
        cy.url().should('include', '/events')
    })
})

describe('view an event', () => {
    it('view created event', () => {
        cy.get().click()
        cy.get("placeholder-div.nav a:nth-child(2)")
        cy.url("placeholder").should('include', '/myevents')
    })
})
    it('should have an "Add an Event" button', () => {
        cy.get("placeholder_button").should('exist').click()
    })
    it('Should type in the event name and description', () => {
        cy.get('input.input').type("placeholder event name and description").should('exist').click()
    })
    it('Should have Save (placeholder) button', () => {
        cy.get('button.save(placeholder)').should('have.length', numplacholder)
    })
    it('should have a ')



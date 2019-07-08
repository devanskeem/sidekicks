//Events
describe('Look at events', () => {
    it ('should have active events', () => {
        cy.visit('/events/all')
        cy.get('div').should('have.class')
        cy.get('button:last').click()
    })

})

describe('Create an event', () => {
    it('View my event', () => {
        cy.visit('/events/add')
        cy.get('create-btn').click
        cy.url().should('include', '/addEvent')
    })
})

describe('view an event', () => {
    it('view created event', () => {
        cy.visit('/users/getUsersByEvent/')
        cy.get("").click()
        cy.url().should('include', '/myevents')
    })
})
    it('should have an "Add an Event" button', () => {
        cy.get("placeholder_button").should('exist').click()
    })
    it('Should type in the event name', () => {
        cy.get('input.input').type('Pot Luck').should ('have.value', 'Pot Luck')('exist')
        cy.get(div.input).click()

    })

    it('Should type in the description', () => {
        cy.get('input.input').type('').should('have.value', placeholder)(exist)
        cy.get(div.input).click()
    })

    it('Should type in the host',() => {
        cy.get(input.input).type('').should('have.value', placeholder)(exist)
        cy.get(div.input).click()
    })

    

    it('Should have Save (create) button', () => {
        cy.get('button.save(create').should('have.length', 3)
    })




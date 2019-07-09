//Authentication with Auth0
const option = {
    method: 'POST',
    url: 'http://localhost:333'
}





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
        cy.visit('/events/add')
        cy.get("event").should('exist').click()
        cy.url().should('include', '/events/add')
    })

    it('Should type in the event name', () => {
        cy.visit('/events/add')
        cy.get('input.input').type('Park Pot Luck').should ('have.value', 'Pot Luck')('exist')
        cy.get(div.input).click()

    })

    it('Should type in the description', () => {
        cy.visit('/events/add')
        cy.get('input.input').type('').should('have.value', 'Outdoor fun potluck in the park')(exist)
        cy.get(div.input).click()
    })

    it('Should type in the host',() => {
        cy.visit('events/add')
        cy.get(input.input).type('').should('have.value', 'Devan Skeem')(exist)
        cy.get(div.input).click()
    })

    it('Should type in the category', () =>{
        cy.visit('/events/add')
        cy.get(input.input).type('').should('have.value',  'Outdoor')
    })

    it('Should type in the total_people', () => {
        cy.visit('/events/add')
        cy.get(input.input).type('').should('have.value', '10')(exist)
        cy.get(div.input).click()
    })

    it('Should type in the cost', () => {
        cy.visit('/events/add')
        cy.get(input.input).type('').should('have.value', '$10')(exist)
        cy.get(div.input).click()
    })

    it('Should type in the address', () => {
        cy.visit('/events/add')
        cy.get(input.input).type('Nuns Park Provo Canyon Utah')(exist)
        cy.get(div.input).click()
    })

    it('Should have an image', () =>{
        cy.visit('/events/add')
        cy.get('img.size:last').click()
        cy.url().should('include', '/event')
    })

    it('Should have Create  button', () => {
        // cy.visit('/events/add')
        cy.get('button.save(create').should('have.length', 3)
    })







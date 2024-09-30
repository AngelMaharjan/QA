describe('Sign Up Test', () => {

  it('1. Successfully signs up with valid details', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser') 
    cy.get('#firstName').type('Ramita'); 
    cy.get('#lastName').type('Maharjan'); 
    cy.get("#email").type('ramitamaharjan@gmail.com')
    cy.get("#password").type('Ramita12!@')
    cy.get("#submit").click()
  })

  it('2. Shows error on empty form submission', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser') 
    cy.get("#submit").click()
    cy.contains('User validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required., email: Email is invalid, password: Path `password` is required.').should('be.visible');
  })

  it('3. Shows error for empty first name', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')  
    cy.get('#lastName').type('Maharjan'); 
    cy.get("#email").type('ramitamaharjan@gmail.com')
    cy.get("#password").type('Ramita12!@')
    cy.get("#submit").click()
    cy.contains('User validation failed: firstName: Path `firstName` is required.').should('be.visible');
    })

    it('4. Shows error for empty last name', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')  
    cy.get('#firstName').type('Ramita'); 
    cy.get("#email").type('ramitamaharjan@gmail.com')
    cy.get("#password").type('Ramita12!@')
    cy.get("#submit").click()
    cy.contains('User validation failed: lastName: Path `lastName` is required.').should('be.visible');
    })

    it('5. Shows error for empty email', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')  
    cy.get('#firstName').type('Ramita'); 
    cy.get('#lastName').type('Maharjan'); 
    cy.get("#password").type('Ramita12!@')
    cy.get("#submit").click()
    cy.contains('User validation failed: email: Email is invalid').should('be.visible');
    })

    it('6. Shows error for empty password', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')  
    cy.get('#firstName').type('Ramita'); 
    cy.get('#lastName').type('Maharjan'); 
    cy.get("#email").type('ramitamaharjan@gmail.com')
    cy.get("#submit").click()
    cy.contains('User validation failed: password: Path `password` is required.').should('be.visible');
    })

    it('7. Shows error for invalid email format', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')  
    cy.get('#firstName').type('Rocky'); 
    cy.get('#lastName').type('Dangol'); 
    cy.get("#email").type('rockygmail.com')
    cy.get("#password").type('Rocky12!@')
    cy.get("#submit").click()
    cy.contains('User validation failed: email: Email is invalid').should('be.visible');
    })

    it('8. Displays an error when the password is shorter than 7 characters', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')  
    cy.get('#firstName').type('Rocky'); 
    cy.get('#lastName').type('Dangol'); 
    cy.get("#email").type('rockydangol@gmail.com')
    cy.get("#password").type('rocky')
    cy.get("#submit").click()
    cy.contains('User validation failed: password: Path `password` (`rocky`) is shorter than the minimum allowed length (7).').should('be.visible');
    })

    it('9. Displays an error when the email address is already registered.', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')  
    cy.get('#firstName').type('Rocky'); 
    cy.get('#lastName').type('Dangol'); 
    cy.get("#email").type('rockydangol@gmail.com')
    cy.get("#password").type('Rocky1234')
    cy.get("#submit").click()
    cy.contains('Email address is already in use').should('be.visible');
    })

    it('10. Redirects correctly to login page on clicking Cancel', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')  
    cy.get('#firstName').type('Angel'); 
    cy.get('#lastName').type('Maharjan'); 
    cy.get("#email").type('angelmaharjan88@gmail.com')
    cy.get("#password").type('angel1234')
    cy.get("#cancel").click()
    cy.url().should('include', 'https://thinking-tester-contact-list.herokuapp.com/login')
    })

});
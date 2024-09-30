describe('Login Test', () => {

  it('1. Logs in successfully with valid credentials', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/') 
    cy.get('#email').type('angelmaharjan@gmail.com'); 
    cy.get('#password').type('Angel12!@'); 
    cy.get("#submit").click()
  })

  it('2. Shows error on empty form submission', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/') 
    cy.get("#submit").click()
    cy.contains('Incorrect username or password').should('be.visible');
  })

  it('3. Shows error on invalid email format', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/') 
    cy.get('#email').type('angelmaharjangmail.com'); 
    cy.get('#password').type('Angel12!@'); 
    cy.get("#submit").click()
    cy.contains('Incorrect username or password').should('be.visible');
  })

  it('4. Shows error for incorrect password', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/') 
    cy.get('#email').type('angelmaharjangmail.com'); 
    cy.get('#password').type('Angel12'); 
    cy.get("#submit").click()
    cy.contains('Incorrect username or password').should('be.visible');
  })

  it('5. Redirects to sign-up page', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    cy.get('#signup').click()
    cy.url().should('include', 'https://thinking-tester-contact-list.herokuapp.com/addUser');
  });

  it('6. Shows error for empty password', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/') 
    cy.get('#email').type('angelmaharjangmail.com'); 
    cy.get("#submit").click()
    cy.contains('Incorrect username or password').should('be.visible');
    });

    it('7. Shows error for empty email', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/') 
    cy.get('#password').type('Angel12'); 
    cy.get("#submit").click()
    cy.contains('Incorrect username or password').should('be.visible');
    });

});
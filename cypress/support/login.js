
Cypress.Commands.add('login', (email, password) =>{
    cy.fixture('login').then((login) =>{
        cy.get(login.optionLogin).click();
        cy.get(login.email).type(email);
        cy.get(login.password).type(password);
        cy.get(login.buttonSignIn).click();
    })
})
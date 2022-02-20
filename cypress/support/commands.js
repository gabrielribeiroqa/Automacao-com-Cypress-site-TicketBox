// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//OBS 1: CASO TENHA LOCATORS ELE PRECISA SER IMPORTADO
//LOGIN É A VARIAVEL E VAI PASSAR 2 PARAMENTROS
import loc from '../support/locatorsTicketBox'

var nome ={
//NOME
firstName:"GABRIEL",
//SOBRENOME
lastName:"RIBEIRO",
}

var email={
//EMAIL INVALIDO
EmailInvalido:"gabriel",
//EMAIL VALIDO
emailValido:"teste@teste.com",
}

Cypress.Commands.add('login', (user, password) => {

    //PRIMEIRO NOME  
    cy.get(loc.USUARIO.MEUNOME).should('exist').and('be.visible')
    cy.get(loc.USUARIO.MEUNOME).type(nome.firstName)

    // SEGUNDO NOME
    cy.get(loc.USUARIO.SOBRENOME).should('exist').and('be.visible')
    cy.get(loc.USUARIO.SOBRENOME).type(nome.lastName)

})

Cypress.Commands.add('emailValido', (user, password) => {

    //EMAIL VALIDO
    cy.get(loc.EMAIL1.EMAIL_VALIDO).should('be.empty').and('be.visible').and('exist')
    cy.get(loc.EMAIL1.EMAIL_VALIDO).type(email.EmailInvalido).clear()

})
Cypress.Commands.add('emailInvalido', (user, password) => {

    //EMAIL INVALIDO   
    cy.get(loc.EMAIL1.EMAIL_VALIDO).should('be.empty').and('be.visible').and('exist')
    cy.get(loc.EMAIL1.EMAIL_VALIDO).type(email.EmailInvalido)
    cy.get(loc.EMAIL2.EMAIL_INVALIDO).should("exist").clear()
    cy.get(loc.EMAIL1.EMAIL_VALIDO).type(email.emailValido)

})



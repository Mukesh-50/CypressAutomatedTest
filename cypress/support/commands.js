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

Cypress.Commands.add("selectValueFromList", function (locator, textToSearch) {
    cy.xpath(locator)
        .each(function (ele) {
            cy.log(ele.text())
            if (ele.text().includes(textToSearch)) {
                cy.wrap(ele).click({ force: true })
            }

        })

})

Cypress.Commands.add("login", function (uname, pass) {
    cy.get('[name="email1"]').type(uname)
    cy.get('[name="password1"]').type(pass)
    cy.get('.submit-btn').should("be.enabled").click()

})


Cypress.Commands.add("swithchToIframe", function (frameIDorNameOrLocator) {
    return cy.get(frameIDorNameOrLocator)
        .its("0.contentDocument")
        .its("body")
        .then(cy.wrap)
})






















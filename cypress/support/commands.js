import "@testing-library/cypress/add-commands";

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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// import { leadFormEl as el, searchFormEl } from '../elements'

Cypress.Commands.add("getErrorMessageByLabelText", labelText => {
  cy.wait(200);
  cy.findAllByLabelText(labelText).then(element => {
    const id = element.attr("aria-describedby");
    return cy.get(`#${id}`);
  });
});

Cypress.Commands.add("filterSelectOption", (selector, query) => {
  cy.get(selector).click();
  cy.get(selector)
    .find("input")
    .clear()
    .type(query);
});

Cypress.Commands.add("selectOption", (selector, text) => {
  cy.get(selector)
    .contains(text)
    .click({ force: true });
});

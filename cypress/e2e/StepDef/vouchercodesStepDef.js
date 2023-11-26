/// <reference types="cypress" />

import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";

Given(/^I am on the vouchercodes home page$/, () => {
    cy.visit('/');
});

When(/^I click the search field$/, function () {
    cy.get("#appSearchPlaceholderInput").click()
});

When(/^I search for local london restaurant offers "([^"]*)"$/, (args1) => {
    cy.get("#appSearchPlaceholderInput").type(args1);
});

When(/^I type invalid text in the search field "([^"]*)"$/, (args1) => {
    cy.get("#appSearchPlaceholderInput").type(args1);
});

Then(/^I should see the correct offers$/, function () {
    cy.get('[data-qa="el:searchOfferTitle"]').as('searchOfferTitle');
    cy.get('@searchOfferTitle').should('contain.text', 'Selected Accounts: £10 off 2 Selected London Orders Over £25 at Uber Eats');
});

Then(/^I should see an error message$/, function () {
    cy.get('[data-qa="el:noSearchHeading"]').should('contain.text', 'Sorry, we couldn\'t find any results for "er@t4!".').wait(2000);
});

/// <reference types="cypress" />

import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";

const URL = "https://www.vouchercodes.co.uk/";
Given(/^I am on the vouchercodes home page$/, () => {
    cy.visit(URL);
});

When(/^I click the search field$/, function () {
    cy.get("#appSearchPlaceholderInput").click()
});

When(/^I type valid text in the search field "([^"]*)"$/, (args1) => {
    cy.get("#appSearchPlaceholderInput").type(args1);
});

When(/^I type invalid text in the search field "([^"]*)"$/, (args1) => {
    cy.get("#appSearchPlaceholderInput").type(args1);
});

Then(/^I should see the correct search results$/, function () {
    cy.get('[data-qa="el:searchMerchantText"]').first().should('have.text', 'Zizzi');
});

Then(/^I should see an error message$/, function () {
    cy.get('[data-qa="el:noSearchHeading"]').should('contain.text', 'Sorry, we couldn\'t find any results for "er@t4!".').wait(3000);
});

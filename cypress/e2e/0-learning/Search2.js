import SearchBox from "./Search2.page";
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")

Given('I am on the home page of zero.websecurityapp.com', () => {
    SearchBox.visit();
})

When('I type online into the search box and press enter', () => {
    SearchBox.src();
})

Then('I should see a list of related items with word online', () => {
    cy.get('.top_offset').should('contain.text', 'online');
})
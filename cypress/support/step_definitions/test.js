/// <reference types="cypress" />

import { When, Then } from "cypress-cucumber-preprocessor/steps";
const uniquerNumbers = `${Math.floor(Math.random() * 10000000000)}`
//const uniquerNumbers = 1100000117

When('User visit and click on Add assset link', () => {
    cy.visit('http://localhost:3000/#/')
    cy.contains('Add Asset').click()
})


Then('User will add new asset numbers', () => {
    cy.get('input[id="defaultFormAddAsset"]').type('ISIN' + uniquerNumbers);
    cy.contains('Send').click();
    cy.contains("Asset ISIN" + uniquerNumbers + " was added to the list");
})


When('User visit and click on Add asset link for adding exisiting asset', () => {
    cy.visit('http://localhost:3000/#/')
    cy.contains('Add Asset').click()
})


Then('User enter the exisiting asset and save it', () => {
    cy.get('input[id="defaultFormAddAsset"]').type('ISIN' + uniquerNumbers);
    cy.contains('Send').click();
    cy.contains("Asset name should be unique. Assert with this name already exists");
})

When('User visit and click on exisiting asset', () => {
    cy.visit('http://localhost:3000/#/')
    cy.contains('Existing Assets').click()
})
Then('user try to search with exisiting asset', () => {

    cy.get('input[class="form-control form-control-sm ml-0 my-1"]', { timeout: 20000 }).type('ISIN' + uniquerNumbers)

    cy.contains('ISIN' + uniquerNumbers)

})

When('user visit and click on existing asset for search non exisiting asset', () => {
    cy.visit('http://localhost:3000/#/')
    cy.contains('Existing Assets').click()
})

Then('user try to search with non exisiting asset', () => {
    cy.wait(1500)
    cy.get('input[class="form-control form-control-sm ml-0 my-1"]').type('ISIN8987666676')
    cy.contains('No matching records found')
})

When('user visit and donot enter any data in the text box', () => {
    cy.visit('http://localhost:3000/#/')
    cy.contains('Add Asset').click()
    cy.contains('Send').click()
})


When('User visit and click on exsisting asset and select 50 records for display', () => {
    cy.visit('http://localhost:3000/#/')
    cy.contains('Existing Assets').click()
})

Then('User manages to select the corresponding desire entry to select', () => {
    cy.wait(15000)
    cy.get('select').select('50')
    cy.get('.dataTable').find('tr').should('have.length', 52)
})
//Your test-case glue-code should be here :)


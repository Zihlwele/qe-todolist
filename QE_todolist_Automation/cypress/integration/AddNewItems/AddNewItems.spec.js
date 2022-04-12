const { Given, Then, When, And } = require("@badeball/cypress-cucumber-preprocessor");
const items = Array();

Given("I have navigated to page http://localhost:8081",()=>{
    cy.visit('http://localhost:8081')
})

Then("I validate that the page is open",()=>{
    cy 
        .url().should('include', '/todo')
        .title().should('include', 'QE tdolist')
        .get('#newtodo', { timeout: 1000 }).should('be.visible')
        .get('#new-submit', { timeout: 100}).should('be.visible');
})

When("I add '5' items into the newtodo textfield and click submit button",()=>{
    for(var i = 0; i < 5; i++){
        var itemToAdd = makeToDoItem(10) 
        items[i] = itemToAdd;
        cy
          .get('#newtodo')
          .type(itemToAdd).should('have.value', itemToAdd)
          .get('#new-submit').click()
          .get('#span-todo-' + i).should('have.text',itemToAdd)
          }
})

Then("I expect the new item to be added in the todolist items",()=>{
    for(var i = 0; i < items.length; i++){
        cy.get('#span-todo-' + i).should('have.text',items[i])
          }
})

Given("I expect all the items to be added in the list",()=>{
    cy.get('body > ul').find('li').then((li) =>
    {
     var count = li.length
     assert.isTrue(count == 5,'Total Number Of Item/s In Todolist:' + count)})
})
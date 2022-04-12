
describe("End To End Test - QE Todolist", function() {
    it("Open QE Todolist Page", function() {
      cy
        .visit('http://localhost:8081')
        .url().should('include', '/todo')
        .title().should('include', 'QE tdolist')
        .get('#newtodo', { timeout: 1000 }).should('be.visible')
        .get('#new-submit', { timeout: 1000
        }).should('be.visible');
        });

    it("Add New Todo Items", function(items = 5) {
      for(var i = 0; i < items; i++){
        var itemToAdd = makeToDoItem(10) 
        cy
          .get('#newtodo')
          .type(itemToAdd).should('have.value', itemToAdd)
          .get('#new-submit').click()
          .get('#span-todo-' + i).should('have.text',itemToAdd)
          }
          cy.get('body > ul').find('li').then((li) =>
          {
           var count = li.length
           assert.isTrue(count == items,'Total Number Of Item/s In Todolist:' + count)
        })         
        });

    it("Refresh Browser", function(items = 5) {
      cy       
        .reload()
        .get('body > ul').find('li').then((li) => {
          assert.isTrue(li.length == items, li.length  +" items have been found after the page has been reload")
          })
        });

    it("Edit First 3 Todo Items", function() {
      cy
        .get('body > ul').find('li').then((li) => {         
          for (let x = 0; x < 3; x++) {
            cy
              .get('#edittodo-' + x)
              .type('Updated Item ' + x).should('have.value', 'Updated Item ' + x)
              .get('#edit-submit-'+ x).click()
              .get('#span-todo-'+ x).should('have.text', 'Updated Item '+ x);
            }
          })
        });

    it("Delete All Todo Items", function() {
      cy
        .get('body > ul').find('li').then((li) => {
          const count= li.length
          for (let x = 0; x < count; x++) {
            cy
            .get('a')
            .eq(0)
            .click()              
          }
          }
          )
        });
    });

function makeToDoItem(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
 }
 return result; 
}
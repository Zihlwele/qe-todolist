As a QE Analyst I should be able to delete todo items on QE todolist page frontend
Application must be up and running
The application should  have atleast 3 todo items

Feature: Edit Todolist Items

  Scenario: Edit First 3 Todolist Items
    Given the todolist has more than one item
    When I click the update button next to an item
	And update the item with new name 'Updated Item Count'
	Then I expect an item to be updated with the automated update
		Examples:
				|Updated Item Count|
				|3				   |
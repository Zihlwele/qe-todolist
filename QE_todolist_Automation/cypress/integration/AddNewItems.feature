Feature: Add New Items

	As a QE Analyst I should be able to add a new items to the QE todolist page frontend
	PRECONDITION: Application must be up and running

	Scenario: Add new item
		Given I have navigated to page http://localhost:8081
		Then I validate that the page is open
		When I add "5" items into the newtodo textfield and click submit button
		Then I expect the new item to be added in the todolist items
		And I expect all the items to be added in the list
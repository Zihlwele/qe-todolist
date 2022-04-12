As a QE Analyst it is my duty to make sure that if multiple users are viewing the same page
They should be updated if new items are added, deleted or updated

Feature: Multi User Update

  Scenario: Update All Users With Changes To The Todoitems 
    Given 'User1' navigates to http://localhost:8081
	When 'User1' insert new item 'Automated' into the newtodo textfield and click submit button
	Then 'User1' should be able to see the added item in the list
    When 'User2' navigate to http://localhost:8081
	Then 'User2' should expected to be presented with item 'Automated' on the list
	When 'User2' update the item to 'Automated update' and click the update button
	And 'User1' refreshes the browser
	Then 'User1' should be presented with the updated item 'Automated update'
	When 'User1' delete the item 'Automated update'
	And 'User2' refreshes the browser
	Then the item should be deleted from the list and none of the user should see the item
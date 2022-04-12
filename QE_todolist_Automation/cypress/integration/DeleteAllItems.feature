Feature: Delete Todo Item/s

    As a QE Analyst I should be able to delete existing item/s on the todolist
    PRECONDITION: More than 1 item should exist on the list

    Scenario: Delete todo items
        Given I have items on the todolist
        When I click the delete button
        Then I expect the item to be deleted
        And If all Items are deleted
        Then I dont expect to see any items on the list
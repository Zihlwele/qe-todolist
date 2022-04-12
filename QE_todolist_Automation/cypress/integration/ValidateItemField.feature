Feature: Validate Item Input Field

  As a QE Analyst I should not be able to add an empty item to the list

  Scenario: Validate Item Input Field
    Given I have navigated to page http://localhost:8081
    Then I validate that the page is open
    When I type an empty string into the newtodo textfield
    And click submit button
    Then I dont expect the new item to be added in the todolist items
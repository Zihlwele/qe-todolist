As a QE Analyst I should be able to reload/refresh the
frontend page without lossing the todolist items

Feature: Refresh Browser

  Scenario: Refresh Browser
    Given that the todolist has 'n items' items
    When I fresh the browser
    Then I expect to be presented with 'n items' in the todolist
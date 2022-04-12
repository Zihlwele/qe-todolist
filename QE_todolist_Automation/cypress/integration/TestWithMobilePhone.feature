Feature: Run Application On Codova

  As a QE Analyst I should be able to test if the application can run on the mobile application
  PRECONDITION: Codova must be set up to run mibile test

  Scenario: Add iterm using mobile
	Given codeva has been set up and ready to run
	When I choose the mibile device to use
	Then I expect the mobile divice to be available
    And I have navigate to page http://localhost:8081
    Then I validate that the page is open
    When I add "5" items into the newtodo textfield and click submit button
	Then I expect the new item to be added in the todolist items
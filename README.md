
//----------------------------------------------------------------
Feature: Tally Count App
  I want to use a Tally Count App made in JavaScript
  So that I can keep track of the number of units of something there is in 5.

  Scenario: Increment the count
    Given I am on the Tally Count App
    When I click the "Increment" button (the + button)
    Then the count should increase by 5
    And the updated count should be displayed on the screen
    The count will stop at 20
    I wont be able to use the button again
    The button will turn red 

  Scenario: Decrement the count
    Given I am on the Tally Count App
    When I click the "Decrement" button (the - button)
    Then the count should decrease by 1
    And the updated count should be displayed on the screen
    The count will stop at -20
    I wont be able to use the button again
    The button will turn red 

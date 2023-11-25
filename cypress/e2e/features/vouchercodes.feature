Feature: Vouchercodes website search

  Test vouchercodes search functionality

  @validsearch
  Scenario: Verify valid search results
    Given I am on the vouchercodes home page
    When I click the search field
    And I type valid text in the search field "zi"
    Then I should see the correct search results

  @invalidsearch
  Scenario: Verify invalid search results
    Given I am on the vouchercodes home page
    When I click the search field
    And I type invalid text in the search field "er@t4!"
    Then I should see an error message

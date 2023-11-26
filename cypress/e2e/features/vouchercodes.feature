Feature: Vouchercodes website search tests

  Scenario: Verify valid search results
    Given I am on the vouchercodes home page
    When I click the search field
    And I search for local london restaurant offers "london restaurant"
    Then I should see the correct offers

  Scenario: Verify invalid search results
    Given I am on the vouchercodes home page
    When I click the search field
    And I type invalid text in the search field "er@t4!"
    Then I should see an error message

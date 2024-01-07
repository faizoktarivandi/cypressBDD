Feature: Fungsi Searching Zero Web Security App

  Scenario: Searching for certain keyword from homepage
    Given I am on the home page of zero.websecurityapp.com
    When I type online into the search box and press enter
    Then I should see a list of related items with word online

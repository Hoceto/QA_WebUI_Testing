Feature: Epam website

  Scenario: User must click the cookies button to proceed
    Given user is at the main page for the first time
    When user clicks the accept cookie button
    Then the cookie window is closed

  Scenario:
    Given user is at the main page
    When user clicks "TELESCOPEAI" button in the footer
    Then user gets redirected to TelescopeAI site: "https://www.telescopeai.com/"

  Scenario: User clicks on the company logo
    Given user is at the insights page
    When user clicks logo the top-left corner
    Then user goes to the main page: "https://www.epam.com/"

  Scenario: User changes the language of the website from English to Russian
    Given user is at the main page
    When user clicks the drop down menu with languages in header and clicks Россия
    Then user gets redirected to "https://www.epam-group.ru/"

  Scenario: User goes to "careers" section of the website
    Given user is at the main page
    When user clicks the "careers" button in the header of the site
    Then user gets redirected to "https://www.epam.com/careers"

  # Scenario: User tries to apply for a vacant position for "Big Data Support Engineer"
  #   Given user is at Big Data Support Engineer in Mexico-City Mexico vacation
  #   When user fills the email field incorrectly
  #   Then user is acknowledged about error

  Scenario: User goes to "services" section of the website
    Given user is at the main page
    When user clicks the "services" button in the header of the site
    Then user gets redirected to "https://www.epam.com/services"

  # Scenario: User fills consultation form incorrectly
  #   Given user is at the contacts page
  #   When user fill the phone info incorrectly
  #   Then UI shows the notification about the incorrect input

Feature: Swag Labs Ecomerce

@commerce
Scenario: Login to the app
    Given Swag Labs url is open
    When User login with <TestID> and <Password>
    Then User click on the login button
    Then The header title should match <Header>

    Examples:
        |TestID                  | Password     | Header   |
        |standard_user           | secret_sauce | PRODUCTS |
        |problem_user            | secret_sauce | PRODUCTS |
        |performance_glitch_user | secret_sauce | PRODUCTS |

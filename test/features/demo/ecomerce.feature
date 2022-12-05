Feature: Swag Labs Ecomerce

    @commerce
    Scenario: Login to the app
        Given Swag Labs url is open
        When User login with <TestID> and <Password> 
        Then User click on the login button
        Then The header title should match <Header>
        Then Click the inventory <product>

        Examples:
            | TestID                  | Password     | Header   | product                  |
            | standard_user           | secret_sauce | PRODUCTS | Sauce Labs Backpack      |
            | problem_user            | secret_sauce | PRODUCTS | Sauce Labs Bike Light    |
            | performance_glitch_user | secret_sauce | PRODUCTS | Sauce Labs Fleece Jacket |


    @commerce
    Scenario: Validate the price
        Given Swag Labs url is open
        When User login with <TestID> and <Password> 
        Then User click on the login button
        Then The header title should match <Header>
        Then Validate all products have a valid price


        Examples:
            | TestID                  | Password     | Header   | 
            | standard_user           | secret_sauce | PRODUCTS | 
            | problem_user            | secret_sauce | PRODUCTS | 
            | performance_glitch_user | secret_sauce | PRODUCTS | 
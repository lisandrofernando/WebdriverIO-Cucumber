Feature: Google Search

    @demo
    Scenario Outline: Searching for wdio
        Given Google url is open
        When Search with <searchItem>
        Then Click on first search result
        Then URL should match <ExpectedURL>

        Examples:
            | TestID | searchItem | ExpectedURL           |
            | Demo   | wdio       | https://webdriver.io/ |
           


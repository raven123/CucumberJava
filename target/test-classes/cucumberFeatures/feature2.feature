Feature: Form filling with Data Tables
@dataTables
Scenario: Data Tables
Given I am on google home page
When I perform search using:
|searchParameter|Hello|
|Techcanvass|Hello|
|Hero|Hero|
Then I get search results
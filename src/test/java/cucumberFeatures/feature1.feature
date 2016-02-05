Feature: Testing Cucumber features
@basic
Scenario Outline: basic
Given I am on google home page
When I perform search using "<searchParameter>"
Then I get search results for the "<searchParameter>"
When I select first result for the "<searchParameter>"
Then I am on the home page of the application as per "<searchParameter>"

Examples: 
|searchParameter|
|Techcanvass|
|Hero|
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature1.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Cucumber features",
  "description": "",
  "id": "testing-cucumber-features",
  "keyword": "Feature"
});
formatter.uri("feature2.feature");
formatter.feature({
  "line": 1,
  "name": "Form filling with Data Tables",
  "description": "",
  "id": "form-filling-with-data-tables",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Data Tables",
  "description": "",
  "id": "form-filling-with-data-tables;data-tables",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@dataTables"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I perform search using:",
  "rows": [
    {
      "cells": [
        "searchParameter",
        "Hello"
      ],
      "line": 6
    },
    {
      "cells": [
        "Techcanvass",
        "Hello"
      ],
      "line": 7
    },
    {
      "cells": [
        "Hero",
        "Hero"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I get search results",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleHomePageSteps.i_am_on_google_home_page()"
});
formatter.result({
  "duration": 14206775574,
  "status": "passed"
});
formatter.match({
  "location": "GoogleHomePageSteps.i_perform_search_using(DataTable)"
});
formatter.result({
  "duration": 18846614962,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchResultsPageSteps.i_get_search_results()"
});
formatter.result({
  "duration": 2842679588,
  "status": "passed"
});
});
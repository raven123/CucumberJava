$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature1.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Cucumber features",
  "description": "",
  "id": "testing-cucumber-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "basic",
  "description": "",
  "id": "testing-cucumber-features;basic",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@basic"
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
  "name": "I perform search using \"\u003csearchParameter\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I get search results for the \"\u003csearchParameter\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I select first result for the \"\u003csearchParameter\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the home page of the application as per \"\u003csearchParameter\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "testing-cucumber-features;basic;",
  "rows": [
    {
      "cells": [
        "searchParameter"
      ],
      "line": 11,
      "id": "testing-cucumber-features;basic;;1"
    },
    {
      "cells": [
        "Techcanvass"
      ],
      "line": 12,
      "id": "testing-cucumber-features;basic;;2"
    },
    {
      "cells": [
        "Hero"
      ],
      "line": 13,
      "id": "testing-cucumber-features;basic;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "basic",
  "description": "",
  "id": "testing-cucumber-features;basic;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@basic"
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
  "name": "I perform search using \"Techcanvass\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I get search results for the \"Techcanvass\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I select first result for the \"Techcanvass\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the home page of the application as per \"Techcanvass\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleHomePageSteps.i_am_on_google_home_page()"
});
formatter.result({
  "duration": 20077139862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Techcanvass",
      "offset": 24
    }
  ],
  "location": "GoogleHomePageSteps.i_perform_search_using(String)"
});
formatter.result({
  "duration": 3377109807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Techcanvass",
      "offset": 30
    }
  ],
  "location": "GoogleSearchResultsPageSteps.i_get_search_results_for_the(String)"
});
formatter.result({
  "duration": 4108501537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Techcanvass",
      "offset": 31
    }
  ],
  "location": "GoogleSearchResultsPageSteps.i_select_first_result_for_the(String)"
});
formatter.result({
  "duration": 8689244336,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 13,
  "name": "basic",
  "description": "",
  "id": "testing-cucumber-features;basic;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@basic"
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
  "name": "I perform search using \"Hero\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I get search results for the \"Hero\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I select first result for the \"Hero\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the home page of the application as per \"Hero\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleHomePageSteps.i_am_on_google_home_page()"
});
formatter.result({
  "duration": 4180046035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hero",
      "offset": 24
    }
  ],
  "location": "GoogleHomePageSteps.i_perform_search_using(String)"
});
formatter.result({
  "duration": 3038966694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hero",
      "offset": 30
    }
  ],
  "location": "GoogleSearchResultsPageSteps.i_get_search_results_for_the(String)"
});
formatter.result({
  "duration": 3735636085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hero",
      "offset": 31
    }
  ],
  "location": "GoogleSearchResultsPageSteps.i_select_first_result_for_the(String)"
});
formatter.result({
  "duration": 5050235126,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
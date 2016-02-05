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
  "name": "I am on the home page of the application",
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
        "hero"
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
  "name": "I am on the home page of the application",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleHomePageSteps.i_am_on_google_home_page()"
});
formatter.result({
  "duration": 13377695513,
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
  "duration": 3098978496,
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
  "duration": 168602,
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
  "duration": 54246,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchResultsPageSteps.i_am_on_the_home_page_of_the_application()"
});
formatter.result({
  "duration": 19060,
  "status": "passed"
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
  "name": "I perform search using \"hero\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I get search results for the \"hero\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I select first result for the \"hero\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the home page of the application",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleHomePageSteps.i_am_on_google_home_page()"
});
formatter.result({
  "duration": 4371843216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hero",
      "offset": 24
    }
  ],
  "location": "GoogleHomePageSteps.i_perform_search_using(String)"
});
formatter.result({
  "duration": 2944004574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hero",
      "offset": 30
    }
  ],
  "location": "GoogleSearchResultsPageSteps.i_get_search_results_for_the(String)"
});
formatter.result({
  "duration": 115822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hero",
      "offset": 31
    }
  ],
  "location": "GoogleSearchResultsPageSteps.i_select_first_result_for_the(String)"
});
formatter.result({
  "duration": 82835,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchResultsPageSteps.i_am_on_the_home_page_of_the_application()"
});
formatter.result({
  "duration": 22358,
  "status": "passed"
});
});
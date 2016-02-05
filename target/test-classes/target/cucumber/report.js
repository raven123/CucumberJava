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
  "duration": 13923338819,
  "status": "passed"
});
formatter.match({
  "location": "GoogleHomePageSteps.i_perform_search_using(DataTable)"
});
formatter.result({
  "duration": 18760165010,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d46.0.2490.86)\n  (Driver info: chromedriver\u003d2.19.346078 (6f1f0cde889532d48ce8242342d0b84f94b114a1),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 151 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027DIN16000254\u0027, ip: \u002710.75.243.48\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\ravrai\\AppData\\Local\\Temp\\scoped_dir3132_10920}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d46.0.2490.86, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b12ed0c8abef33945205ac1c8313c4dc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:268)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:89)\r\n\tat cucumberPages.GoogleHomePage.performSearch(GoogleHomePage.java:35)\r\n\tat cucumberSteps.GoogleHomePageSteps.i_perform_search_using(GoogleHomePageSteps.java:41)\r\n\tat ✽.When I perform search using:(feature2.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GoogleSearchResultsPageSteps.i_get_search_results()"
});
formatter.result({
  "status": "skipped"
});
});
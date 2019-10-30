$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tester.feature");
formatter.feature({
  "line": 2,
  "name": "One",
  "description": "",
  "id": "one",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 14,
  "name": "Test one",
  "description": "",
  "id": "one;test-one;-;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am \"goodTester\" tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "location",
        "position"
      ],
      "line": 6
    },
    {
      "cells": [
        "USA",
        "contract"
      ],
      "line": 7
    },
    {
      "cells": [
        "India",
        "Permanent"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have done \"dollar\" work",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I got \"very\" paid job",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "goodTester",
      "offset": 6
    }
  ],
  "location": "Tester.I_am_manual_tester(String,DataTable)"
});
formatter.result({
  "duration": 209565958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dollar",
      "offset": 13
    }
  ],
  "location": "Tester.I_have_done_less_work(String)"
});
formatter.result({
  "duration": 216384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "very",
      "offset": 7
    }
  ],
  "location": "Tester.I_got_less_paid_job(String)"
});
formatter.result({
  "duration": 189870,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Test one",
  "description": "",
  "id": "one;test-one;-;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am \"agile\" tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "location",
        "position"
      ],
      "line": 6
    },
    {
      "cells": [
        "USA",
        "contract"
      ],
      "line": 7
    },
    {
      "cells": [
        "India",
        "Permanent"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have done \"money\" work",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I got \"much\" paid job",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "agile",
      "offset": 6
    }
  ],
  "location": "Tester.I_am_manual_tester(String,DataTable)"
});
formatter.result({
  "duration": 1347908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "money",
      "offset": 13
    }
  ],
  "location": "Tester.I_have_done_less_work(String)"
});
formatter.result({
  "duration": 165067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "much",
      "offset": 7
    }
  ],
  "location": "Tester.I_got_less_paid_job(String)"
});
formatter.result({
  "duration": 246746,
  "status": "passed"
});
});
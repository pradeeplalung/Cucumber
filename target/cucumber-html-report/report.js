$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027developer.feature\u0027");
formatter.feature({
  "line": 1,
  "name": "Life of IT Developer",
  "description": "\r\nIn Order to get good salary\r\nAs a IT guy\r\nI want to keep my boss happy",
  "id": "life-of-it-developer",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "I am a java developer",
  "description": "",
  "id": "life-of-it-developer;i-am-a-java-developer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@javaDev"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I work in \"microsoft\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I meet \"Bill Gates\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I \"hesitate\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "he is a \"good\" person",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "microsoft",
      "offset": 11
    }
  ],
  "location": "HolyDeveloper.I_am(String)"
});
formatter.result({
  "duration": 93430252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bill Gates",
      "offset": 8
    }
  ],
  "location": "HolyDeveloper.I_meet(String)"
});
formatter.result({
  "duration": 256913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hesitate",
      "offset": 3
    }
  ],
  "location": "HolyDeveloper.I_(String)"
});
formatter.result({
  "duration": 125088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "good",
      "offset": 9
    }
  ],
  "location": "HolyDeveloper.He_is_a(String)"
});
formatter.result({
  "duration": 96222,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "I am a QTP developer",
  "description": "",
  "id": "life-of-it-developer;i-am-a-qtp-developer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@TestDev"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I work in \"Google\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I meet \"Satya Paichai\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I \"node\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "he is a \"smart\" person",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Google",
      "offset": 11
    }
  ],
  "location": "HolyDeveloper.I_am(String)"
});
formatter.result({
  "duration": 167106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Satya Paichai",
      "offset": 8
    }
  ],
  "location": "HolyDeveloper.I_meet(String)"
});
formatter.result({
  "duration": 96864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "node",
      "offset": 3
    }
  ],
  "location": "HolyDeveloper.I_(String)"
});
formatter.result({
  "duration": 77940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smart",
      "offset": 9
    }
  ],
  "location": "HolyDeveloper.He_is_a(String)"
});
formatter.result({
  "duration": 70884,
  "status": "passed"
});
});
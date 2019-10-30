$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/test.feature");
formatter.feature({
  "name": "Login Feature- Admin area demo",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Admin area demo login functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is launching admin demo url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_launching_admin_demo_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is able to login successfully with valid \"admin@yourstore.com\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_is_able_to_login_successfully_with_valid_and(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027Email\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.120)\n  (Driver info: chromedriver\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5),platform\u003dWindows NT 6.2.9200 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027RAJIV\u0027, ip: \u0027192.168.30.2\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591088 (7b2b2dca23cca0..., userDataDir: C:\\Users\\Rajiv\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63044}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 77.0.3865.120, webStorageEnabled: true}\nSession ID: dd318f746a01b495258d1d4c8f9f7971\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027Email\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat pageLayer.LoginPage.Login(LoginPage.java:32)\r\n\tat stepDefinition.StepDefinition.user_is_able_to_login_successfully_with_valid_and(StepDefinition.java:36)\r\n\tat ✽.user is able to login successfully with valid \"admin@yourstore.com\" and \"admin\"(src/test/resources/features/test.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on DashBoard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_DashBoard()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is successfully logout",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_successfully_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify Admin area demo login functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is launching admin demo url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_launching_admin_demo_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is able to login successfully with valid \"admin@yourstore.com\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_is_able_to_login_successfully_with_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on DashBoard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_DashBoard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is successfully logout",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_successfully_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Admin area demo login functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is launching admin demo url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_launching_admin_demo_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is able to login successfully with valid \"admin@yourstore.com\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_is_able_to_login_successfully_with_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on DashBoard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_DashBoard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is successfully logout",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_successfully_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Admin area demo login functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is launching admin demo url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_launching_admin_demo_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is able to login successfully with valid \"admin@yourstore.com\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_is_able_to_login_successfully_with_valid_and(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027Email\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.120)\n  (Driver info: chromedriver\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5),platform\u003dWindows NT 6.2.9200 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027RAJIV\u0027, ip: \u0027192.168.30.2\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591088 (7b2b2dca23cca0..., userDataDir: C:\\Users\\Rajiv\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63133}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 77.0.3865.120, webStorageEnabled: true}\nSession ID: 4141157417ea8793a73edb9f08bfed1b\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027Email\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat pageLayer.LoginPage.Login(LoginPage.java:32)\r\n\tat stepDefinition.StepDefinition.user_is_able_to_login_successfully_with_valid_and(StepDefinition.java:36)\r\n\tat ✽.user is able to login successfully with valid \"admin@yourstore.com\" and \"admin\"(src/test/resources/features/test.feature:28)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on DashBoard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_DashBoard()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is successfully logout",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_successfully_logout()"
});
formatter.result({
  "status": "skipped"
});
});
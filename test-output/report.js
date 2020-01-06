$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/createCustomerUsingPOM.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Create Customer And Delete Customer",
  "description": "",
  "id": "create-customer-and-delete-customer",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 21131616966,
  "status": "passed"
});
formatter.background({
  "line": 22,
  "name": "User is logged in to Actitime",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 23,
  "name": "User is on Actitime Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I enter valid user name and password",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_Actitime_Login_Page()"
});
formatter.result({
  "duration": 12738349049,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_enter_valid_user_name_and_password()"
});
formatter.result({
  "duration": 5859109122,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_should_be_able_to_see_home_page()"
});
formatter.result({
  "duration": 28798570,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cactiTIME - [Enter Time-Track]\u003e but was:\u003cactiTIME - [Login]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.synechron.bdd.actitime.pom.page.DashboardPage.verifyDashBoardTitle(DashboardPage.java:43)\r\n\tat com.synechron.bdd.actitime.pom.stepdef.Steps.i_should_be_able_to_see_home_page(Steps.java:84)\r\n\tat ✽.Then I should be able to see home page(src/test/java/features/createCustomerUsingPOM.feature:25)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 28,
  "name": "Create Customer without Importing",
  "description": "",
  "id": "create-customer-and-delete-customer;create-customer-without-importing",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click on Task Link and Add New Button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I should be able to see New Customer Button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I click on New Customer Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to enter \"BDD-Cucumber-Cus1111\" and \"BDD-Cucumber-Cust-Desc10\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I validate Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should be able to logout of the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_click_on_Task_Link_and_Add_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_should_be_able_to_see_New_Customer_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_click_on_New_Customer_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BDD-Cucumber-Cus1111",
      "offset": 27
    },
    {
      "val": "BDD-Cucumber-Cust-Desc10",
      "offset": 54
    }
  ],
  "location": "Steps.i_should_be_able_to_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_validate_Success_Message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_should_be_able_to_logout_of_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2458893469,
  "status": "passed"
});
formatter.before({
  "duration": 4804988266,
  "status": "passed"
});
formatter.background({
  "line": 22,
  "name": "User is logged in to Actitime",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 23,
  "name": "User is on Actitime Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I enter valid user name and password",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I should be able to see home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_Actitime_Login_Page()"
});
formatter.result({
  "duration": 4700222837,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_enter_valid_user_name_and_password()"
});
formatter.result({
  "duration": 6280081045,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_should_be_able_to_see_home_page()"
});
formatter.result({
  "duration": 48028003,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cactiTIME - [Enter Time-Track]\u003e but was:\u003cactiTIME - [Login]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.synechron.bdd.actitime.pom.page.DashboardPage.verifyDashBoardTitle(DashboardPage.java:43)\r\n\tat com.synechron.bdd.actitime.pom.stepdef.Steps.i_should_be_able_to_see_home_page(Steps.java:84)\r\n\tat ✽.Then I should be able to see home page(src/test/java/features/createCustomerUsingPOM.feature:25)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 37,
  "name": "Delete Customer which is Created",
  "description": "",
  "id": "create-customer-and-delete-customer;delete-customer-which-is-created",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I click on Task Link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I should be able to Search a customer \"BDD-Cucumber-Cus1111\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I click on settings Icon next to Customer name",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I should see Customer details Section",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I click on actions and delete button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I should prompt popup",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I click on delete Permanently button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I verify success message",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Logout of application",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_click_on_Task_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BDD-Cucumber-Cus1111",
      "offset": 39
    }
  ],
  "location": "Steps.i_should_be_able_to_Search_a_customer(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_click_on_settings_Icon_next_to_Customer_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_should_see_Customer_details_Section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_click_on_actions_and_delete_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_should_prompt_popup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_click_on_delete_Permanently_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_verify_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.logout_of_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2190801917,
  "status": "passed"
});
});
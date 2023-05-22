Feature: 2 field validation

    As a user
    I want to login into application

@only
    Scenario: 2.1 user2 enter the valid credentials and click on sign in button
        Given user is on login page
        When "user2" enter the valid credentials and click on sign in button
        Then user should see the dashboard page


# @only
    Scenario: 2.2 user1 enter the valid credentials and click on sign in button
        Given user is on login page
        When "user1" enter the valid credentials and click on sign in button










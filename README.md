# automation-practice

## Purpose
This repo was made to practice https://magento.softwaretestingboard.com/

## Tools
Jest for Test automation configuration and assertion library https://jestjs.io/
Selenium Webdriver Javascript for Automation functionality

# Test Documentation
As QA writing these, we will be writing this as though there is a hypothetical business document. There will also be writeups for decisions on what was done.

## File Structure
File Structure is borrowed from [Automation Testing with Selenium JavaScript](https://www.lambdatest.com/blog/automation-testing-with-selenium-javascript/)
- tests
-   tests will be handled with a module by file
- resources
  - Strings are going to be included so that the page can simulate if there were promotional/language related changes.
- util
- data

## Design Pattern
The inital design pattern is going to be taken from [Page Object Model in Selenium and JavaScript](https://www.browserstack.com/guide/page-object-model-using-selenium-javascript) 

## Goals
- Abstract away implementation so that when a tool changes, the base logic doesn't need to change.  
- Create a readable framework of tests.


[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohdjeeshan)

# Automation Project
This project automates a sample ecommerce website http://automationpractice.com/index.php.
## Table of Contents

- [Author](#author)
- [Pre-requisites](#pre-requisites)
- [Framework](#framework)
- [Clone Project](#clone-project)
- [Testing Approach](#testing-approach)
- [Running Tests](#running-tests)
- [Dockerized Tests](#dockerized-tests)
- [Issues Faced](#issues-faced)

## Author
* [Mohd Jeeshan](https://github.com/jeeshan12)

## Pre-requisites
Please install below tools to use this project

* [NodeJS](https://nodejs.org/uk/blog/release/v13.14.0/) : **I would recommend to use node version 10<node<=14 for this project. Best if you can use node v13**
* [Docker](https://www.docker.com/) : **If you need to run tests on Dockerised container , you will be needing Docker needs to be installed on the system you are executing the tests**.
* [VisualStudio](https://code.visualstudio.com/download) **(optional)** : **This tool is completely optional. You can use terminal as well to run the automated tests**.
* [Chrome]() : **Lastest version of chrome browser installed on the machine you are going to execute the tests. If chrome is already installed , please make sure that you have updated version of chrome. You can check this by going to Help -> About Google Chrome in the browser.**

## Framework
Below libraries are used to automate the web browsers
* [Protractor](https://www.protractortest.org/) - Protractor is an end-to-end test framework.Protractor runs tests against your application running in a real browser, interacting with it as a user would.
* [Jasmine](https://jasmine.github.io/) - Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests..
* [Faker](https://www.npmjs.com/package/faker) - a library to generate random data
* [Docker](https://www.docker.com/) - Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Docker is used to containerize the automated tests in our case


## Clone Project
Clone the project by running below command in terminal
```
https://github.com/jeeshan12/ECommerceAutomation.git
```
### Install dependencies
Open the terminal in the root project and run the below task
```
npm install
```
## Testing Appraoch
Protractor is used to write e2e automated tests. It uses Jasmine to proovide a BDD way of writing tests and assertions. Faker is being used to generate lot of random test data. JSON's are also used to store tests specific test data which are static like success messages, header labels on certain pages etc.

**Protractor Architecture for running tests**
![](https://github.com/jeeshan12/ECommerceAutomation/blob/main/framework_screenshots/ProtractorArchitecture.png)

### Framework Folder Structure
**Page Object Model** is used to introduce reusability of the functionalities across the application. Sometimes Page classes can become very large and difficult to maintain. This drawback is improved by introducing Page components in the framework which can later be added to the appropriate pages to introduce single responsibility among the classes. If a particular component is being used across the classes then composition is also used to make that resuable component available to different class.
**Test Data** is maintained by Faker library. This library provides the production ready test data to us.
**Resuable Utils** are handled using separate js files under utils folder.
**Waits** are handled using Expected Conditions.
**Specs** are written using Jasmine under **tests** folders.
![](https://github.com/jeeshan12/ECommerceAutomation/blob/main/framework_screenshots/Framework_structure.png)

### Automated Scenarios
Three user journey has been automated which are given below
* **Search and Order a product**
* **Register a new user to application**
* **Contact customer care on product queries**


## Running Tests
We can run our tests sequentially(one by one) or in parallel. Tests can be run on headless and headful chrome.
To run tests sequentially on headful mode
```
npm run e2e
```
To run tests sequentially on headless mode
```
npm run e2e -- --capabilities.chromeOptions.args="headless"
```

To run tests parallel on headful mode
```
npm run e2e  -- --capabilities.shardTestFiles=true
```
![](https://github.com/jeeshan12/ECommerceAutomation/blob/main/framework_screenshots/ExecutionParallel_local.png)
To run tests parallel on headless mode
```
npm run e2e -- --capabilities.shardTestFiles=true --capabilities.chromeOptions.args="headless"
```
![](https://github.com/jeeshan12/ECommerceAutomation/blob/main/framework_screenshots/Execution_local_headless.png)
### Ruunning a single test
If you want to run only one spec file, you can make `describe` or `it` block as `fdescribe` or `fit` .
### Running Through IDE
You can also execute the tests through VS Code. You can use the above commands to run in VS Code integrated terminal. Press **Ctrl+~** to open integrated terminal in IDE.



## Dockerized Tests

To Dockerize Automation framework
* Go to root directory of the framework (make sure `Dockerfile is in root directory`) and build the image by running command
```
docker build -t <<imagename>> .
```
<<imagename>> can be anything . Preferred way is to use `yourdockerid/application_name` e.g.`jeeshan12/beamery_automation`
You will get something similar to this in console once image is built successfully
![](https://github.com/jeeshan12/ECommerceAutomation/blob/main/framework_screenshots/DockerImage.png)
* Now Run the `Protractor Tests` by running below command
```
 docker run --rm <<imagename>> run e2e -- --capabilities.shardTestFiles=true --capabilities.chromeOptions.args="headless" --capabilities.chromeOptions.args="no-sandbox" --capabilities.chromeOptions.args="disable-dev-shm-usage"

```
 You will get something similar in console while the execution is happening
![](https://github.com/jeeshan12/ECommerceAutomation/blob/main/framework_screenshots/DockerExecution.png)

## Issues Faced
Application used for automation causes `Resource Limit Exceeded` message. One reason would be that it is practice site and will not be able to handle multiple subsequent requests. If you are getting below error, I would recomend to please wait for sometimes before doing next iteration of execution or try to execute the tests in docker container. I have noticed that i am not getting that `Resource Limit Exceeded` message in docker containers very frequently.
![](https://github.com/jeeshan12/ECommerceAutomation/blob/main/framework_screenshots/Issues_faced.png)

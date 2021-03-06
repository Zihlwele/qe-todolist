# QE TODOLIST FRONT END TEST PLAN

Prepared by:Nkuthalo Zihlwele
Date: 11-04-2022

### 1. INTRODUCTION
Ths Test Plan is designed to prescribe the scope, approach, resources, and schedule of all testing activities of the project QE todolist.
The plan identify the items to be tested, the features to be tested, the types of testing to be performed, the personnel responsible for testing,
the resources and schedule required to complete testing, and the risks associated with the plan.

### 2. SCOPE

#### 2.1. In Scope
  All the feature of QE Todolist which were defined in software requirement specs are need to be tested

##### Application requirements
	1. Application must be able to deploy in docker
	2. Multiple users should be able to view the shared public todo list (no live updates, only on refresh)
	3. Todo list items should persist after browser refresh
	4. Todo items should not be able to be empty
	5. Should be able to add todo items
	6. Should be able to delete todo items
	7. Should be able to edit todo items

### 2.2. Out of Scope
These feature are not be tested because they are not included in the software requirement specs

#### Future requirements (not implemented)
	8. The application (frontend only) should be ported to Cordova and run as a mobile application.
	9. The application backend should run in Kubernetes on a 3 node cluster with multiple replicas of each pod.
		- Should be able to do rolling updates on the backend service without downtime
		- Application should be self healing after network issues, node outages, node restarts and other issues
  
### 3. QUALITY OBJECTIVE
	The test objectives are to verify the Functionality of website QE todolist application, the project should focus on testing the banking operation such as
	adding items, updating items, and deleting items…etc. to guarantee all these operation can work normally in real business environment.

### 4. ROLES AND RESPONSIBILITIES
	The project should be tested and automated by our testers to save the project cost and multiple people working on the same feature.

#### 1.Test Manager:
	Manage the whole project. Define project directions. Acquire appropriate resources										
##### 2. Tester:
	Identifying and describing appropriate test techniques/tools/automation architecture Verify and assess the Test Approach, execute the tests, Log results, 	  report the defects.																		
##### 3. Developer in Test:
	Implement the test cases, test program, test suite etc.																	
##### 4. Test Administrator
	Builds up and ensures test environment and assets are managed and maintained. Support Tester to use the test environment for test execution
	
##### 5. SQA members:
	Take in charge of quality assurance. Check to confirm whether the testing process is meeting specified requirements		

### 5. TEST METHODOLOGY
#### 5.1 Test Levels
	In the project QE TODOLIST, there’re 2 types of testing should be conducted.

		(a)System Testing: Conducted on a complete, integrated system to evaluate the system’s compliance with its specified requirements
		(b)API testing: Test all the APIs create for the software under tested

### 6. BUG TRIAGE
	Suspension Criteria and Resumption Requirements
	If the team members report that there are 40% of test cases failed, suspend testing until the development team fixes all the failed cases.

### 7. TEST COMPLETNESS
	Specifies the criteria that denote a successful completion of a test phase
	Run rate is mandatory to be 100% unless a clear reason is given.
	Pass rate is 80%, achieving the pass rate is mandatory
	
### 8. PROJECT TASK AND ESTIMATION AND SCHEDULE
	Creating test specifications, Perform test execution and reporting will be executed by the QE Analyst
	The estimated time for the process is one week

### 9. TEST DELIVERABLES
	Test deliverables are provided as below

	-Before testing phase:
		Test plans document.
		Test cases documents
		Test Design specifications.
		
	-During the testing
		Test Tool Simulators.
		Test Data
		Test Trace-ability Matrix – Error logs and execution logs.

	-After the testing cycles is over
		Test Results/reports
		Defect Report
		Installation/ Test procedures guidelines
		Release notes
		
### 10. RESOURCE AND ENVIRONMENT NEEDS
#### 10.1. Testing Tools
	Front end: Cypress with cucumber
	Back end: Rest Api 
	
### 10.2. Browsers
	chrome, firefox, IE, Edge and opera

### 10.2. Test Environment
	Test Environment to be setup as per figure below:
	
	- Make sure Git (cd) is installed
	- Install Node.js (https://nodejs.org/en/)
	- In the extracted project root folder, run `npm install`

	Run the application in node.js
	- Run `node app.js` in the project root folder
	- Visit http://localhost:8080 in your browser

	Run the application in docker
	- Install Docker: https://docs.docker.com/.
	- To build docker image: `docker build -t qe-todolist .`
	- To run docker image: `docker run -p 8081:8080 -d qe-todolist`
	- Navigate to `http://localhost:8081` to see the app running in docker.
	- To stop docker image: `docker ps` grab the Container ID corresponding with the 'qe-todolist' image then `docker stop ${ContainerID}` with `${ContainerID}` replaced with the actual value.

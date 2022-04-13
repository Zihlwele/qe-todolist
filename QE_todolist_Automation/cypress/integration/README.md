#Running Automated Tests

### Pre conditions
Please make sure you follow the follow instructions to run the automated tests for QE todolist front end.
##### NOTE
All The feature files on \qe-todolist\qe-todolist\QE_todolist_Automation\cypress\integration\ do not have step definations defined for them, for the end-to-end test of QE todolist run the file todo.spec.js

### Run todolist application in docker
- Install Docker: https://docs.docker.com/.
- To build docker image: `docker build -t qe-todolist .`
- To run docker image: `docker run -p 8081:8080 -d qe-todolist`
- Navigate to `http://localhost:8081` to see the app running in docker.
- To stop docker image: `docker ps` grab the Container ID corresponding with the 'qe-todolist' image then `docker stop ${ContainerID}` with `${ContainerID}` replaced with the actual value.

### Runnig front end test
-Use any editor of your choice (preferable visual studio code)
-Open new terminal and navigate to \qe-todolist\qe-todolist\QE_todolist_Automation\cypress\integration\
-Run the command npm run cypress:open
-This will open cypress (this requires cypress to be installed on your pc)
-Choose the broser to run tests on
-Click todo.spec.js link this will open the browser and you should see test running